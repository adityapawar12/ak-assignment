"use client";

import { z } from "zod";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import ErrorMessage from "./error-text";

const SignUpOtpSchema = z.object({
  otp: z.string().length(6),
});
type SignUpOtpSchemaType = z.infer<typeof SignUpOtpSchema>;

function SignUpOtpForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<SignUpOtpSchemaType>({ resolver: zodResolver(SignUpOtpSchema) });
  const router = useRouter();

  const onSubmit: SubmitHandler<SignUpOtpSchemaType> = (data) => {
    if (data.otp === "123456") {
      router.push("/sign-in");
    }
    setError("root", { message: "Wrong OTP! please enter 123456." });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-4 grid w-full grid-cols-1 gap-5"
    >
      <div className="flex flex-col items-start justify-start gap-2">
        <label htmlFor="name" className="text-sm">
          OTP
        </label>
        <input
          className="w-full rounded border border-gray-300 px-4 py-2 placeholder:text-gray-400"
          placeholder="OTP"
          {...register("otp")}
        />
        {errors.otp && (
          <ErrorMessage
            message={errors.otp.message ? errors.otp.message : ""}
          />
        )}
      </div>

      <div className="mt-2 flex flex-col items-center justify-center">
        <div className="py-2">
          {errors.root && (
            <ErrorMessage
              message={errors.root.message ? errors.root.message : ""}
            />
          )}
        </div>
        <button
          type="submit"
          className="w-full rounded bg-black px-4 py-2 text-white"
        >
          VERIFY
        </button>
      </div>
    </form>
  );
}

export default SignUpOtpForm;
