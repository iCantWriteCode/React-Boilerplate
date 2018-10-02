import React, { Fragment, Component } from 'react'
import 'antd/dist/antd.css';

import Navbar from '../../components/Layout/Navbar/Navbar'
import Footer from '../../components/Layout/Footer/Footer'


class Layout extends Component {
    render() {
        return (
            <Fragment>
                <Navbar />
                <main>
                    {this.props.children}
                </main>
                <Footer />
            </Fragment>
        )
    }
}

export default Layout