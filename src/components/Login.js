import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { Button, Form, Input } from "antd";
import { useContext } from "react";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";
import '../styles/login-signin.css'
import GoogleButton from "react-google-button";
import { Link } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyAp1vyAdDQLmvwQnnLgyDqHTtv-HpemU8Q",
  authDomain: "easy-fix-app-ca.firebaseapp.com",
  projectId: "easy-fix-app-ca",
  storageBucket: "easy-fix-app-ca.appspot.com",
  messagingSenderId: "218019848731",
  appId: "1:218019848731:web:563afa4f9bc50a8e38cebe",
};

export function Login() {
  const { user,setUser } = useContext(UserContext);
  let navigate = useNavigate();
  
  const handleLogin = ({ email, password }) => {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => setUser(res.user))
      .then(navigate( !user ? "/login" : "/repaircard"))
      .catch(console.error);
  };

  const handleGoogleLogin = () => {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => setUser(res.user))
      .catch(console.error);
  };
  
  return (
    <section>
      <Link to="/"> &lt; Back</Link>
      <h1 className="login-text">Login</h1>
      <Form
        className="loginForm"
        onFinish={handleLogin}
        labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please enter your email" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, maessage: "Please enter a password" }]}
        >
          <Input.Password />
        </Form.Item>
        <Button className="login-btn" type="primary" htmlType="submit">
          Login
        </Button>
        <Form.Item
        // wrapperCol={{ span: 16, offset: 8 }}
        >
          <GoogleButton className="google-login" onClick={handleGoogleLogin} type="primary" htmltype="submit">
            Google
          </GoogleButton>
        </Form.Item>
      </Form>
    </section>
  );
}
