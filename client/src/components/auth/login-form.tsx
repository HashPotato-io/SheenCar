import { Input } from "@/components/ui/input";
import { CustomButton } from "@/components/ui/custom-button";
import { SocialLoginButton } from "@/components/ui/social-login-button";
import { FacebookIcon, GoogleIcon } from "../icons";

export function LoginForm() {
  return (
    <div
      style={{
        width: "370px",
        height: "528.78px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 20,
        padding: "24px 26px",
        borderRadius: 17.22,
        background: "#F8F8F8",
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
          style={{ width: "330px", height: "40px" }}
        />
        <Input
          type="password"
          placeholder="Password"
          style={{ width: "330px", height: "40px" }}
        />
        <div style={{ width: "330px", textAlign: "left" }}>
          <a
            href="#"
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
          <div style={{ flex: 1, height: 1, background: "#E5E5E5" }} />
          <span style={{ color: "#666", fontSize: 14 }}>or</span>
          <div style={{ flex: 1, height: 1, background: "#E5E5E5" }} />
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
