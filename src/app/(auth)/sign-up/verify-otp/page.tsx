import SignUpOtpForm from "../../_components/sing-up-otp-form";

export default function SignInPage() {
  return (
    <main className="flex min-h-[calc(100vh-120px)] flex-col items-center justify-start pb-10 pt-10 text-black max-md:px-4">
      <div className="w-11/12 rounded-lg border border-gray-300 p-6 text-center md:w-[28.5rem] md:p-8 lg:p-8 2xl:p-10">
        <h1 className="pb-8 text-3xl font-semibold">Verify your email</h1>

        <p className="text-base font-normal">Enter the 6 digit code (123456)</p>

        <SignUpOtpForm />
      </div>
    </main>
  );
}
