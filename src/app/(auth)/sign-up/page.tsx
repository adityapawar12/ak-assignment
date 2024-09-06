import Link from "next/link";
import SignUpForm from "../_components/sign-up-form";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Spacex Assignment | Sign Up",
  description: "Spacex Assignment | Sign Up",
  openGraph: {
    title: "Spacex Assignment | Sign Up",
    description: "Spacex Assignment | Sign Up",
  },
  twitter: {
    title: "Spacex Assignment | Sign Up",
    description: "Spacex Assignment | Sign Up",
  },
};

export default function SignInPage() {
  return (
    <main className="flex min-h-[calc(100vh-120px)] flex-col items-center justify-start pb-10 pt-10 text-black max-md:px-4">
      <div className="w-11/12 rounded-lg border border-gray-300 p-6 text-center md:w-[28.5rem] md:p-8 lg:p-8 2xl:p-10">
        <h1 className="pb-4 text-3xl font-semibold">Create your account</h1>

        <SignUpForm />

        <hr className="mb-6 mt-4 border-gray-300" />

        <p className="text-sm font-normal">
          Have an Account?{" "}
          <Link className="font-medium" href={"/sign-in"}>
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}
