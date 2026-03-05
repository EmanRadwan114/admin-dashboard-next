import { auth } from "@/lib/firebase/firebase.config";
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
      console.log(res);
      if (res) {
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
