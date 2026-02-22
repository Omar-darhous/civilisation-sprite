import "../styles/auth.css";
import "../styles/login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("No account found, please sign up first");
      return;
    }

    if (user.email === email && user.password === password) {
      document.querySelector(".page").classList.add("exit");

      setTimeout(() => {
        navigate("/Home");
      }, 400);
    } else {
      alert("Invalid email or password");
    }
  };

  // 🟡 Google Login
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);

      // نخزن بيانات المستخدم
      localStorage.setItem("user", JSON.stringify(result.user));

      document.querySelector(".page").classList.add("exit");

      setTimeout(() => {
        navigate("/Home");
      }, 400);
    } catch (error) {
      console.log(error);
    }
  };

  const goToSignup = () => {
    document.querySelector(".page").classList.add("exit");
    setTimeout(() => {
      navigate("/signup");
    }, 400);
  };

  return (
    <div className="pharaoh-bg page enter">
      <form className="pharaoh-box" onSubmit={handleLogin}>
        <h2>𓂀 Enter the Temple</h2>

        <input
          type="email"
          placeholder="Sacred Email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Secret Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>

        {/* زرار Google */}
        <button
          type="button"
          className="google-btn"
          onClick={handleGoogleLogin}
        >
          Sign in with Google
        </button>

        <p onClick={goToSignup}>
          New soul? <span>Create Account</span>
        </p>
      </form>
    </div>
  );
}
