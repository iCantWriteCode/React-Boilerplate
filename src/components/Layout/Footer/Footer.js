import React, { Fragment, Component } from 'react'
import { Row, Col } from 'antd'


import styleTagWithCss from "./FooterStyles";

class Footer extends Component {
    render() {
        return (
            <Fragment>
                {styleTagWithCss()}
                <div className='footer-wrapper'>
                    <Row className='main-width'>
                        <Col span={8}>
                            <div>Text</div>
                            <div>Text</div>
                            <div>Text</div>
                        </Col>
                        <Col span={8}>
                            <div>Text</div>
                            <div>Text</div>
                            <div>Text</div>
                        </Col>
                        <Col span={8}>
                            <div>Text</div>
                            <div>Text</div>
                            <div>Text</div>
                        </Col>
                    </Row>
                </div>
            </Fragment>
        )
    }
}

export default Footer