import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    username: "",
  });

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/signup",
        userData,
        { withCredentials: true }
      );

      if (data.success) {
        window.location.href = data.redirectUrl; // Redirects to Zerodha Clone
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) =>
          setUserData({ ...userData, username: e.target.value })
        }
      />
      <input
        type="email"
        placeholder="Email"
        onChange={(e) =>
          setUserData({ ...userData, email: e.target.value })
        }
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) =>
          setUserData({ ...userData, password: e.target.value })
        }
      />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;
