import React, { Component } from 'react'
import cx from 'classnames'
import ProtoTypeHeader from './ProtoTypeHeader'
import ProtoTypeBody from './ProtoTypeBody'

class ProtoType extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div>
                <ProtoTypeHeader />
                <ProtoTypeBody />
            </div>
        )

    }

}

export default ProtoType