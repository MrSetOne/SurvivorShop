import { useContext } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";




const SignIn = () => {

    const { signIn } = useContext(UserContext);

    const navigate = useNavigate()


    const onFinish = (values) => {
        signIn(values);
        setTimeout(() => {
          navigate("/")
        }, 3000);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
      };


  return (
    <div className="SignIn">
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
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>
        <Form.Item
          label="email"
          name="email"
          rules={[{
            required: true,
            message: "Please input your email!",
            type:"email" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
        label="adress"
        name="adress"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
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
  )
}

export default SignIn