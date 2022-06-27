import { useContext } from "react";
import { UserContext } from "../../../context/UserContext/UserState";
import { Form, Input, Button, notification } from "antd";
import { useNavigate } from "react-router-dom";

import './SignUp.scss'

const SignUp = () => {
  const { signUp } = useContext(UserContext);

  const navigate = useNavigate();

  const onFinish = (values) => {
    signUp(values);
    openNotification()
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

const openNotification = () => {
  notification.open({
    message: "Congratulations, you have signed up correctly",
    description:
      "Now you will be redirected to the home page.",
    onClick: () => {
      console.log("Notification Clicked!");
    },
  });
};

  return (
    <div className="form__container">
      <h2 className="form__title">-SIGN UP-</h2>
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
          label="username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
              type: "email",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="adress"
          name="adress"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="password"
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

export default SignUp;
