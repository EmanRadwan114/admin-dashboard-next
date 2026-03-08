import { auth } from "@/lib/firebase/firebase.config.client";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { LoginInput } from "../validation/login.validation";

export const useLogin = (reset: () => void) => {
  const router = useRouter();

  const [signInWithEmailAndPassword, , , error] =
    useSignInWithEmailAndPassword(auth);

  const onLoginSubmit = async (data: LoginInput) => {
    try {
      const res = await signInWithEmailAndPassword(data.email, data.password);
      if (res) {
        const token = await res.user.getIdToken();

        await fetch("/api/login", {
          method: "POST",
          body: JSON.stringify({ token }),
        });
        toast.success("Logged in successfully");
        reset();
        router.push("/dashboard");
      }
    } catch (error: unknown) {
      toast.error((error as { message: string })?.message);
    }
  };

  return { error, onLoginSubmit };
};
