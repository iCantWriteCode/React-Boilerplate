import React, { Fragment, Component } from 'react'
// import Link from 'next/link'
import LoginForm from '../../components/LoginForm/LoginForm'
import RegisterForm from '../../components/RegisterForm/RegisterForm';

import { Button, Modal } from 'antd'

import homeCss from "./HomeStyles.js";

class Home extends Component {
    state = {
        visible: false,
        modalType: ''
    }
    showModal = e => {
        this.setState({
            visible: true,
            modalType: e.target.value
        });
    }

    handleOk = (e) => {
        this.setState({
            visible: false,
        });
    }

    handleCancel = (e) => {
        this.setState({
            visible: false,
        });
    }
    render() {
        return (
            <Fragment>
                {homeCss()}
                <div className="f-center f-content-center full-height homepage">
                    <Button value='login' size='large' className='mr-3' onClick={this.showModal}>Login</Button>
                    <Button value='register' size='large' onClick={this.showModal}>Register</Button>
                </div>
                <Modal
                    className="no-title-modal"
                    // title=" "
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={null}
                >
                    {this.state.modalType === 'login' ?
                        <LoginForm /> :
                        <RegisterForm />
                    }

                </Modal>
            </Fragment>
        )
    }
}

export default Home