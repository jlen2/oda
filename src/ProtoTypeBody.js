import React, { Component } from 'react'
import cx from 'classnames'
import ProtoTypeTable from './PrototypeTable'
import PrototypeTable from './PrototypeTable';
import { json } from './Samples'

const ProtoSummary = () => (

    <section className="hero page-summary has-text-primary">
        <div className="container">
            <nav className="breadcrumb is-small has-succeeds-separator">
                <ul>
                    <li className="is-active"><a href="#">Securtiy</a></li>
                    <li><a href="#">K34J5H3452</a></li>
                </ul>
            </nav>
            <h6 className="is-size-6">Dell Technologies Inc.</h6>
            <h1 className="is-size-3">K34J5H3452</h1>
            <small className="has-text-weight-light">* as of {new Date().toString()}</small>
        </div>
    </section>

)

const ProtoTabs = () => (

    <div className="security-tabs">
        <div className="tabs is-boxed is-centered">
            <ul>
                <li className="is-active is-uppercase"><a>Secksjhdf Info</a></li>
                <li className="is-uppercase"><a>Oasdasd</a></li>
            </ul>
        </div>
    </div>
)

const ProtoSecurityInfo = () => <pre>{JSON.stringify(json, null, 5)}</pre>

const ProtoOfferQuickView = () => (
    <div>
    <div id="quickviewDefault" class="quickview is-active">
        <header class="quickview-header">
            <p class="title">Quickview title</p>
            <span class="delete" data-dismiss="quickview"></span>
        </header>

        <div class="quickview-body">
            <div class="quickview-block">
                ...
            </div>
        </div>

        <footer class="quickview-footer">

        </footer>
    </div>

    <button class="button is-primary" data-show="quickview" data-target="quickviewDefault">Show quickview</button>
    </div>
)

class ProtoTypeBody extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        return (
            <section>
                <ProtoSummary />
                <ProtoTabs />
                <PrototypeTable />
                <ProtoSecurityInfo />
                <ProtoOfferQuickView />
            </section>
        )

    }

}

export default ProtoTypeBody