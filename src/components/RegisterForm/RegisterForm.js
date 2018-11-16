import React, { Fragment, Component } from 'react'

import { Form, Icon, Input, Button } from 'antd';
const FormItem = Form.Item;

class RegisterForm extends Component {
    state = {
        username: "",
        password: "",
        confirmPassword: "",
        email: "",
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    matchPasswords = (password, confirmPassword) => {
        return password.localeCompare(confirmPassword)
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // this.matchPasswords(this.state.password, this.state.confirmPassword)
        if (!this.matchPasswords(this.state.password, this.state.confirmPassword)) {
            console.log("true")
        } else console.warn("false")
        console.warn(this.state)
    }

    render() {
        return (
            <Fragment>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem>
                        <Input
                            name="username"
                            value={this.state.username}
                            onChange={this.handleInputChange}
                            size='large'
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username" />
                    </FormItem>
                    <FormItem>
                        <Input
                            name="password"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                            size='large'
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password" placeholder="Password" />
                    </FormItem>
                    <FormItem>
                        <Input
                            name="confirmPassword"
                            value={this.state.confirmPassword}
                            onChange={this.handleInputChange}
                            size='large'
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password" placeholder="Confirm Password" />
                    </FormItem>
                    <FormItem>
                        <Input
                            name="email"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                            size='large'
                            prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="email" placeholder="Email" />
                    </FormItem>
                    <div className='text-right'>
                        <Button size='large' className='mr-3'>Cancel</Button>
                        <Button size='large' htmlType="submit">Register</Button>
                    </div>
                </Form>
            </Fragment>
        )
    }
}

export default RegisterForm