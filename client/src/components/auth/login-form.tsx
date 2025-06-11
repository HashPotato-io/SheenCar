import { Input } from "@/components/ui/input";
import { CustomButton } from "@/components/ui/custom-button";
import { SocialLoginButton } from "@/components/ui/social-login-button";
import { FacebookIcon, GoogleIcon } from "../icons";
import { useLocation } from "wouter";
import { useAuth } from "@/contexts/auth-context";
import { useState } from "react";

export function LoginForm() {
  const [, navigate] = useLocation();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, password);
    navigate("/account");
  };

  return (
    <div className="w-full max-w-[370px] flex flex-col items-center gap-5 p-6 rounded-[17.22px] bg-[#F8F8F8] mb-5">
      <h2 className="font-['Gilroy-SemiBold'] text-2xl md:text-3xl text-center text-[#171616] tracking-tight">
        Login
      </h2>
      <form onSubmit={handleLogin} className="w-full">
        <div className="flex flex-col gap-4">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-10 bg-transparent"
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-10 bg-transparent"
          />
          <div className="w-full text-left mb-2.5">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigate("/forgot-password");
              }}
              className="font-['Poppins'] text-sm text-[#003A2F] no-underline hover:underline"
            >
              Forgot Password?
            </a>
          </div>
        </div>

        <CustomButton
          type="submit"
          customStyles={{ width: "100%", height: "40px" }}
        >
          Login
        </CustomButton>
      </form>

      <div className="flex flex-col gap-4 items-center w-full">
        <div className="flex items-center gap-2 w-full my-4">
          <div className="flex-1 h-px bg-[#AAAAAA66]" />
          <span className="font-['Poppins'] text-xs text-[#858585]">
            or
          </span>
          <div className="flex-1 h-px bg-[#AAAAAA66]" />
        </div>

        <SocialLoginButton icon={<GoogleIcon />} text="Continue with Google" />

        <SocialLoginButton
          icon={<FacebookIcon />}
          text="Continue with Facebook"
        />

        <div className="text-center mt-4 font-['Poppins'] text-xs text-black">
          New here?{" "}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              navigate("/signup");
            }}
            className="text-[#898989] no-underline hover:underline"
          >
            Sign Up!
          </a>
        </div>
      </div>
    </div>
  );
}
