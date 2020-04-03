import React, { useContext } from 'react';
import { Form, Input, Button } from 'antd';
import { useHistory } from 'react-router-dom';
import { Context } from '@/Store';
import './Login.scss';

const FormItem = Form.Item;

const Login = () => {
  const { dispatch } = useContext(Context);
  const [ form ] = Form.useForm();
  const history = useHistory();

  const onSubmit = () => {
    form.validateFields()
      .then(values => {
        console.log(values);
        dispatch({
          type: 'CHANGE_USERNAME',
          payload: values.username
        });
        history.push('/');
      })
      .catch(() => {});
  }

  return (
    <div className="t_login">
      <div className="t_login_wrap">
        <div className="t_login_wel">
          <div className="t_login_wel_circle"></div>
          <h2 className="t_login_wel_hd">welcome</h2>
        </div>

        <div className="t_login_content">
          <h2 className="t_login_hd">登&nbsp;&nbsp;录</h2>

          <Form 
            className="t_login_form"
            form={form}
            onFinish={onSubmit}
          >
            <FormItem
              // label="用户名"
              name="username"
              rules={[
                {
                  required: true,
                  message: '请输入用户名'
                }
              ]}
            >
              <Input placeholder="请输入用户名" />
            </FormItem>
            <FormItem
              // label="密码"
              name="password"
              rules={[
                {
                  required: true,
                  message: '请输入密码'
                }
              ]}
              style={{
                paddingTop: 40
              }}
            >
              <Input.Password 
                placeholder="请输入密码" 
                onKeyUp={(e) => {
                  if (e.nativeEvent.keyCode === 13) {
                    onSubmit();
                  }
                }}
              />
            </FormItem>
          </Form>

          <div className="t_login_btn_wrap">
            <Button type="primary" onClick={onSubmit}>登录</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;
