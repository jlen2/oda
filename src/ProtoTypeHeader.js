import React, { Component } from 'react'
import cx from 'classnames'

class ProtoTypeHeader extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showMenu: false
        }
        this.toggleNavMenu = this.toggleNavMenu.bind(this)
    }

    toggleNavMenu() {
        this.setState(prevState => ({
            showMenu: !prevState.showMenu
        }))
    }


    render() {

        return (
            <nav className="navbar is-fixed-top is-transparent has-shadow">
                <div className="container">
                    <div className="navbar-brand">
                        <a className="navbar-item is-uppercase has-text-weight-semibold has-text-dark" href="/">Osdldfhue</a>
                        <button className={cx("button navbar-burger", { "is-active": this.state.showMenu })} onClick={this.toggleNavMenu}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                    <div className={cx("navbar-menu", { "is-active": this.state.showMenu })}>
                        <div className="navbar-start">
                            {/* TBD */}
                        </div>
                        <div className="navbar-end">
                            <div className="navbar-item">
                                <form>
                                    <div className="field is-grouped">
                                        <div className="select is-small is-grouped">
                                            <select>
                                                <option>Odsfjslkjdf</option>
                                                <option>Osdlfkjshdf</option>
                                                <option>Cccsldkjfh</option>
                                            </select>
                                        </div>
                                        <p className="control is-expanded">
                                            <input className="input is-small" type="text" placeholder="Search..." />
                                        </p>
                                        <p className="control">
                                            <button type="submit" className="button is-light is-small is-outlined">Search</button>
                                        </p>
                                        <div className="control">
                                            <span className="icon">
                                                <i className="fas fa-history"></i>
                                            </span>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        )

    }

}

export default ProtoTypeHeader