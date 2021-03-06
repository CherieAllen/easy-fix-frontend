import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Button, Form, Input } from "antd";
import { useContext } from "react";
import { UserContext } from "../App";
import { Link } from "react-router-dom";
import "../styles/login-signin.css";
import { useNavigate } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyAp1vyAdDQLmvwQnnLgyDqHTtv-HpemU8Q",
  authDomain: "easy-fix-app-ca.firebaseapp.com",
  projectId: "easy-fix-app-ca",
  storageBucket: "easy-fix-app-ca.appspot.com",
  messagingSenderId: "218019848731",
  appId: "1:218019848731:web:563afa4f9bc50a8e38cebe",
};

export function SignUp() {
  let navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const handleSignUp = ({ email, password }) => {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => setUser(res.user))
      .then(navigate("/login"))
      .catch(console.error);
  };

  return (
    <section>
      <Link to="/"> &lt; Back</Link>
      <h1 className="login-text">Sign Up Today!</h1>
      <Form
        className="signUpForm"
        onFinish={handleSignUp}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
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

        <Form.Item
          label="Confirm Password"
          name="confirm"
          dependencies={["password"]}
          hasFeedback
          rules={[
            { required: true, message: "Please confirm you password" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Button className="signinbtn" type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </section>
  );
}
