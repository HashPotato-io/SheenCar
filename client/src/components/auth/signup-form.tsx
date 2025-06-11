import { Input } from "@/components/ui/input";
import { CustomButton } from "@/components/ui/custom-button";
import { SocialLoginButton } from "@/components/ui/social-login-button";
import { EyeClose, EyeOpen, FacebookIcon, GoogleIcon } from "../icons";
import CustomPhoneInput from "@/components/ui/phone-input";
import { useState } from "react";
import { useLocation } from "wouter";

export function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [, navigate] = useLocation();

  return (
    <div className="w-full max-w-[370px] flex flex-col items-center gap-5 p-6 rounded-[17.22px] bg-[#F8F8F8] mb-5">
      <h2 className="font-['Gilroy-SemiBold'] text-2xl md:text-3xl text-center text-[#171616] tracking-tight">
        Sign Up
      </h2>
      <div className="flex flex-col gap-4 w-full">
        <Input
          type="text"
          placeholder="First Name"
          className="w-full h-10 bg-transparent"
        />
        <Input
          type="text"
          placeholder="Last Name"
          className="w-full h-10 bg-transparent"
        />
        <Input
          type="email"
          placeholder="Email"
          className="w-full h-10 bg-transparent"
        />
        <div className="relative w-full">
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full h-10 bg-transparent"
          />
          <button
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 bg-transparent border-none cursor-pointer"
          >
            {showPassword ? <EyeOpen /> : <EyeClose />}
          </button>
        </div>
        <div className="relative w-full">
          <Input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            className="w-full h-10 bg-transparent"
          />
          <button
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 bg-transparent border-none cursor-pointer"
          >
            {showConfirmPassword ? <EyeOpen /> : <EyeClose />}
          </button>
        </div>
        <CustomPhoneInput
          value={phoneNumber}
          onChange={setPhoneNumber}
          className="w-full"
        />
      </div>

      <CustomButton customStyles={{ width: "100%", height: "40px" }}>
        Sign Up
      </CustomButton>

      <div className="flex flex-col gap-4 items-center w-full">
        <div className="flex items-center gap-2 w-full my-4">
          <div className="flex-1 h-px bg-[#E5E5E5]" />
          <span className="font-['Poppins'] text-xs text-[#858585]">
            or
          </span>
          <div className="flex-1 h-px bg-[#E5E5E5]" />
        </div>

        <SocialLoginButton icon={<GoogleIcon />} text="Continue with Google" />
        <SocialLoginButton
          icon={<FacebookIcon />}
          text="Continue with Facebook"
        />

        <div className="font-['Poppins'] text-xs text-center text-black">
          By creating an account using email, Google or Apple, I agree to the
          Terms & Conditions and acknowledge the Privacy Notice.
        </div>

        <div className="text-center mt-4 font-['Poppins'] text-xs text-black">
          Already have an account?{" "}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              navigate("/login");
            }}
            className="text-[#898989] no-underline hover:underline"
          >
            Log in
          </a>
        </div>
      </div>
    </div>
  );
}
