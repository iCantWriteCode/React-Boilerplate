import React, { Fragment, Component } from 'react'
import Link from 'next/link'

import { Button } from 'antd'

import styleTagWithCss from "./HomeStyles.js";

class Home extends Component {
    render() {
        return (
            <Fragment>
                {styleTagWithCss()}
                Home.js

                <div className='bg-skyblue'>
                    This Div is getting styles from jsx
                </div>
            </Fragment>
        )
    }
}

export default Home