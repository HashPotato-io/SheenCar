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
    <div
      style={{
        width: "370px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 20,
        padding: "24px 26px",
        borderRadius: 17.22,
        background: "#F8F8F8",
        marginBottom: "20px",
      }}
    >
      <h2
        style={{
          fontFamily: "Gilroy-SemiBold",
          fontWeight: 400,
          fontSize: 32,
          lineHeight: "100%",
          letterSpacing: "-1%",
          textAlign: "center",
          color: "#171616",
        }}
      >
        Sign Up
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        <Input
          type="text"
          placeholder="First Name"
          style={{ width: "330px", height: "40px", background: "transparent" }}
        />
        <Input
          type="text"
          placeholder="Last Name"
          style={{ width: "330px", height: "40px", background: "transparent" }}
        />
        <Input
          type="email"
          placeholder="Email"
          style={{ width: "330px", height: "40px", background: "transparent" }}
        />
        <div style={{ position: "relative", width: "330px" }}>
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            style={{ width: "100%", height: "40px", background: "transparent" }}
          />
          <button
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            {showPassword ? <EyeOpen /> : <EyeClose />}
          </button>
        </div>
        <div style={{ position: "relative", width: "330px" }}>
          <Input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            style={{ width: "100%", height: "40px", background: "transparent" }}
          />
          <button
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            {showConfirmPassword ? <EyeOpen /> : <EyeClose />}
          </button>
        </div>
        <CustomPhoneInput
          value={phoneNumber}
          onChange={setPhoneNumber}
          className="w-[330px]"
        />
      </div>

      <CustomButton customStyles={{ width: "330px", height: "40px" }}>
        Sign Up
      </CustomButton>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            width: "100%",
            marginTop: 16,
            marginBottom: 16,
          }}
        >
          <div style={{ flex: 1, height: 1, background: "#E5E5E5" }} />
          <span style={{ 
            fontFamily: "Poppins",
            fontWeight: 400,
            fontSize: 12,
            lineHeight: "100%",
            letterSpacing: "0%",
            color: "#858585"
          }}>or</span>
          <div style={{ flex: 1, height: 1, background: "#E5E5E5" }} />
        </div>

        <SocialLoginButton icon={<GoogleIcon />} text="Continue with Google" />
        <SocialLoginButton
          icon={<FacebookIcon />}
          text="Continue with Facebook"
        />

        <div
          style={{
            fontFamily: "Poppins",
            fontWeight: 400,
            fontSize: 12,
            lineHeight: "100%",
            letterSpacing: "0%",
            textAlign: "center",
            color: "#000000",
          }}
        >
          By creating an account using email, Google or Apple, I agree to the
          Terms & Conditions and acknowledge the Privacy Notice.
        </div>

        <div
          style={{
            textAlign: "center",
            marginTop: 16,
            fontFamily: "Poppins",
            fontWeight: 400,
            fontSize: 12,
            lineHeight: "100%",
            letterSpacing: "0%",
            color: "#000000",
          }}
        >
          Already have an account?{" "}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              navigate("/login");
            }}
            style={{
              fontFamily: "Poppins",
              fontWeight: 400,
              fontSize: 12,
              lineHeight: "100%",
              letterSpacing: "0%",
              textAlign: "center",
              color: "#898989",
              textDecoration: "none",
            }}
          >
            Log in
          </a>
        </div>
      </div>
    </div>
  );
}
