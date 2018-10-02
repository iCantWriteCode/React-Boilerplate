import React, { Fragment, Component } from 'react'
import Link from 'next/link'
import { Row, Col, Icon, Drawer } from 'antd'
import styleTagWithCss from "./NavbarStyles";

class Navbar extends Component {
    state = { visible: false, placement: 'right' };
    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };
    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    onChange = (e) => {
        this.setState({
            placement: e.target.value,
        });
    }
    render() {
        return (
            <Fragment>
                {styleTagWithCss()}
                {/* <div className='navbar'>
                    Navbar2.js
                </div> */}
                <Row type="flex" align="middle" gutter={8} className='navbar'>
                    <Col>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </Col>
                    <Col><Link href="/contact"><a >Contact</a></Link></Col>
                    <Icon className="ml-auto" type="user" theme="outlined" style={{ fontSize: '32px', color: '#ccc', lineHeight: 1 }} onClick={this.showDrawer} />
                </Row>

                <Drawer
                    title="User Drawer"
                    placement={this.state.placement}
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                    width='350'
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Drawer>
            </Fragment>
        )
    }
}

export default Navbar