import React, { Component, Fragment } from 'react';
// ANTD
import { Form, Input, Button, Row, Col, message } from 'antd';
import { UserOutlined, UnlockOutlined,   } from '@ant-design/icons';
// 验证
import { valid_passwords, validate_email } from './../../utils/validate';
// 接口
import { Login, get_code } from '../../api/account';

class LoginFrom extends Component {
    constructor(props){
        super(props);
        this.state = {
            username:"",
            code_btn_loading: false,
            code_btn_text: "获取验证码",
            code_btn_disabled: false
        }
    }

    // 登录
    onFinish = values => {
        console.log('Received values of form: ', values);
        Login().then(res => {
            console.log(res)
        }).catch(err => {
            console.log("失败",err)
        })
    };

    // 切换菜单（登录注册）
    toggle_from = () => {
        this.props.switch_from("register")
    }
    
    // 获取验证码
    get_code = () => {
        if(!this.state.username){
            message.warning('请输入用户名！',1);
            return false;
        }
        this.setState({
            code_btn_loading: true,
            code_btn_text: "发送中"
        })
        const data = {
            username: this.state.username,
            module: "login"
        }
        get_code(data).then(res => {
            // 执行倒计时
            this.count_down()
        }).catch(err => {
            this.setState({
                code_btn_loading: false,
                code_btn_text: "重新获取验证码"
            })    
        })
    }

    // username更新
    input_change = (e) => {
        let value = e.target.value
        this.setState({
            username: value
        })
    }

    // 倒计时
    count_down = () => {
        // 定时器
        let timer = null;
        // 倒计时时间
        let sec = 4;
        // 修改状态
        this.setState({
            code_btn_loading: false,
            code_btn_text: `${sec}S`,
            code_btn_disabled: true
        }) 

        timer = setInterval(() => {
            sec--;
            if(sec <= 0){
                this.setState({
                    code_btn_text: `重新获取`,
                    code_btn_disabled: false
                }) 
                clearInterval(timer);
                return false;
            }
            this.setState({
                code_btn_text: `${sec}S`,
            }) 
        },1000)
    }


    render(){
        const { username, code_btn_loading, code_btn_text, code_btn_disabled } = this.state;
        const _this = this;
        return (
            <Fragment>
                <div className="form-header">
                    <h4 className="column">登录</h4>
                    <span onClick={this.toggle_from}>账号注册</span>
                </div>
                <div className="form-content">
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={this.onFinish}
                    >
                        {/* 账号 */}
                        <Form.Item
                        name="username"
                            rules={[
                                { required: true, message: '邮箱不能为空'},
                                { type:"email", message: "邮箱格式不正确" }
                                // ({ getFieldValue }) => ({
                                //     validator(rule, value) {
                                //         if (validate_email(value)) {
                                //             _this.setState({
                                //                 code_btn_disabled:false
                                //             })
                                //             return Promise.resolve();
                                //         }else{
                                //             return Promise.reject('邮箱格式不正确');
                                //         }
                                //     },
                                // }),
                            ]}
                        >
                            <Input value={username} onChange={this.input_change} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        {/* 密码 */}
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                required: true,
                                message: '密码不能为空',
                                },
                                // 自定义验证规则
                                // ({ getFieldValue }) => ({
                                //     validator(rule, value) {
                                //         if (value.length < 6) {
                                //             return Promise.reject('密码长度不小于6位');
                                //         }else{
                                //             return Promise.resolve();
                                //         }
                                //     },
                                // }),
                                { pattern: valid_passwords, message: "请输入6至20位字母加数字组合密码"}
                            ]}
                        >
                            <Input prefix={<UnlockOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>

                        <Form.Item
                            name="code"
                            rules={[
                                { required: true, message: '请输入验证码',},
                                { len: 6, message: '请输入长度为6位的验证码',},
                            ]}
                        >
                            <Row gutter={13}>
                                <Col span={15}>
                                    <Input prefix={<UnlockOutlined className="site-form-item-icon" />} placeholder="Code" />
                                </Col>
                                <Col span={9}>
                                    <Button 
                                        type="danger" 
                                        className="login-form-button" 
                                        onClick={this.get_code} block
                                        loading={code_btn_loading}
                                        disabled={code_btn_disabled}>
                                        {code_btn_text}
                                    </Button>
                                </Col>
                            </Row>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button" block>
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </Fragment>
        );
    }
  }

  export default LoginFrom;