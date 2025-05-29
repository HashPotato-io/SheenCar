import { Input } from "@/components/ui/input";
import { CustomButton } from "@/components/ui/custom-button";
import { SocialLoginButton } from "@/components/ui/social-login-button";
import { FacebookIcon, GoogleIcon } from "../icons";
import { useLocation } from "wouter";

export function LoginForm() {
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
        Login
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        <Input
          type="email"
          placeholder="Email"
          style={{ width: "330px", height: "40px", background: "transparent" }}
        />
        <Input
          type="password"
          placeholder="Password"
          style={{ width: "330px", height: "40px", background: "transparent" }}
        />
        <div style={{ width: "330px", textAlign: "left" }}>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              navigate("/forgot-password");
            }}
            style={{
              fontFamily: "Poppins",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "100%",
              letterSpacing: "0%",
              color: "#003A2F",
              textDecoration: "none",
            }}
          >
            Forgot Password?
          </a>
        </div>
      </div>

      <CustomButton customStyles={{ width: "330px", height: "40px" }}>
        Login
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
          <div style={{ flex: 1, height: 1, background: "#AAAAAA66" }} />
          <span style={{ 
            fontFamily: "Poppins",
            fontWeight: 400,
            fontSize: 12,
            lineHeight: "100%",
            letterSpacing: "0%",
            color: "#858585"
          }}>or</span>
          <div style={{ flex: 1, height: 1, background: "#AAAAAA66" }} />
        </div>

        <SocialLoginButton icon={<GoogleIcon />} text="Continue with Google" />

        <SocialLoginButton
          icon={<FacebookIcon />}
          text="Continue with Facebook"
        />

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
          New here?{" "}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              navigate("/signup");
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
            Sign Up!
          </a>
        </div>
      </div>
    </div>
  );
}
