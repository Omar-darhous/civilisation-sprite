import "../styles/auth.css";
import "../styles/signup.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("The sacred words do not match ⚠️");
      return;
    }

    const user = {
      fullName,
      email,
      password,
    };

    localStorage.setItem("user", JSON.stringify(user));
    alert("Your soul has been registered ✨");

    navigate("/");
  };

  return (
    <div className="pharaoh-bg page enter">
      <form className="pharaoh-box" onSubmit={handleSignup}>
        <h2>𓂀 Create Your Legacy</h2>

        <input
          type="text"
          placeholder="Full Name"
          required
          onChange={(e) => setFullName(e.target.value)}
        />

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

        <input
          type="password"
          placeholder="Confirm Password"
          required
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button>Create Account</button>

        <p onClick={() => navigate("/")}>
          Already chosen? <span>Enter the Temple</span>
        </p>
      </form>
    </div>
  );
}
