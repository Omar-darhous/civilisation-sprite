import "../styles/auth.css";
import "../styles/login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
      // ✅ يعمل exit animation
      document.querySelector(".page").classList.add("exit");

      setTimeout(() => {
        navigate("/Home");
      }, 400);
    } else {
      alert("Invalid email or password");
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

        <p onClick={goToSignup}>
          New soul? <span>Create Account</span>
        </p>
      </form>
    </div>
  );
}
