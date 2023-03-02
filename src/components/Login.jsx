import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import GoogleLogo from "../assets/icons/google.png";
import Background from "../assets/images/back.jpg";

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        localStorage.setItem("user", JSON.stringify(user));
        console.log(user);
        navigate("/home");
      })
      .catch((error) => {
        alert("Something went wrong!");
      });
  };

  return (
    <main className="login_page">
      <h1 className="app_name">
        Laundry On <span>Time</span>
      </h1>

      <section className="sign_in">
        <button className="login-with-google-btn" onClick={handleLogin}>
          <img src={GoogleLogo} width="25" height="25" alt="google" />
          Sign in with Google
        </button>
        <img src={Background} className="login_img" alt="background" />
      </section>
    </main>
  );
};

export default Login;
