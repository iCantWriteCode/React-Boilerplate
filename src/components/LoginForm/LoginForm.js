import React, { Fragment, Component } from 'react'

import { Form, Icon, Input, Button } from 'antd';

const FormItem = Form.Item;

class LoginForm extends Component {

    state = {
        username: "",
        password: ""
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
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

                    <div className='text-right'>
                        <Button size='large' className='mr-3'>Cancel</Button>
                        <Button size='large' htmlType="submit">Log In</Button>
                    </div>
                </Form>
            </Fragment>
        )
    }
}

export default LoginForm