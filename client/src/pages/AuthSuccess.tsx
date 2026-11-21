import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../Context/AuthContext";

// Google OAuth ke baad /auth/success?token=xxx pe aata hai
// Token save karke dashboard redirect
export default function AuthSuccess() {
  const { login } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    if (token) {
      // Store token and fetch user via email/pass login won't work here
      // so we directly set token and redirect
      localStorage.setItem("token", token);
      // Reload so AuthContext picks up the token
      window.location.href = "/dashboard";
    } else {
      navigate("/");
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#030407] flex items-center justify-center">
      <p className="text-[#5f8bdb] font-['JetBrains_Mono',monospace] text-[12px] tracking-[0.2em]">
        AUTHENTICATING...
      </p>
    </div>
  );
}
