"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

function Logout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const logout = async () => {
    try {
      const response = await axios.get("/api/sign-out");
      router.push("/sign-in");
      toast(response.data.message || "");
    } catch (error: any) {
      toast(error.response.data.error || "", { type: "error" });
    }
  };

  return (
    <button onClick={logout} className="m-0 p-0">
      {children}
    </button>
  );
}

export default Logout;
