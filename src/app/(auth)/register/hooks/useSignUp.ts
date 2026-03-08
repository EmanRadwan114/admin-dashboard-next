import { auth } from "@/lib/firebase/firebase.config.client";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { RegisterInput } from "../validation/register.validation";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export const useSignUp = (reset: () => void) => {
  const router = useRouter();

  const [createUserWithEmailAndPassword, , , error] =
    useCreateUserWithEmailAndPassword(auth);

  const onRegisterSubmit = async (data: RegisterInput) => {
    try {
      const res = await createUserWithEmailAndPassword(
        data.email,
        data.password,
      );

      // update profile to store username
      if (res?.user) {
        await updateProfile(res.user, {
          displayName: data.fullName,
        });
        toast.success("Account created successfully");
        reset();
        router.push("/login");
      }
    } catch (error: unknown) {
      toast.error((error as { message: string })?.message);
    }
  };

  return { error, onRegisterSubmit };
};
