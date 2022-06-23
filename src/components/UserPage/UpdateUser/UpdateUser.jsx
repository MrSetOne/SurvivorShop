import { useContext, useEffect } from "react";
import { UserContext } from "../../../context/UserContext/UserState";
import { Form, Input, Button } from "antd";
import '../UpdateUser/UpdateUser.scss';



const UpdateUser = () => {
    const {user, updateUser} = useContext(UserContext)
    const onFinish = (values) => {
      updateUser(values)
    }
    
    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };

  return (
    <div className="UpdateUser">
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
          initialValue={user.username}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="email"
          name="email"
          initialValue={user.email}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="adress"
          name="adress"
          initialValue={user.adress}
        >
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button className="button-update" type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default UpdateUser