import Link from "next/link";
import SignInForm from "../_components/sign-in-form";

export default function SignInPage() {
  return (
    <main className="flex min-h-[calc(100vh-120px)] flex-col items-center justify-start pb-10 pt-10 text-black max-md:px-4">
      <div className="w-11/12 rounded-lg border border-gray-300 p-6 text-center md:w-[28.5rem] md:p-8 lg:p-8 2xl:p-10">
        <h1 className="pb-8 text-3xl font-semibold">Login</h1>

        <h3 className="pb-2 text-xl font-medium md:text-2xl">
          Welcome back to ECOMMERCE
        </h3>

        <p className="text-base font-normal">
          The next gen business marketplace
        </p>

        <SignInForm />

        <hr className="mb-6 mt-4 border-gray-300" />

        <p className="text-sm font-normal">
          Don&apos;t have an Account?{" "}
          <Link className="font-medium" href={"/sign-up"}>
            Sign up
          </Link>
        </p>
      </div>
    </main>
  );
}
