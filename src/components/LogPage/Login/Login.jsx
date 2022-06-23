import { useContext } from "react";
import { UserContext } from "../../../context/UserContext/UserState";
import { Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
import './Login.scss'


const Login = () => {
  const { login } = useContext(UserContext);

  const navigate = useNavigate()

  const onFinish = (values) => {
    login(values);
    setTimeout(() => {
      navigate("/")
    }, 3000);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="form__container">
      <h2 className="form__title">-LOGIN-</h2>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
