import React from "react"
import { uid } from '../../Util/Util'

export default class NavBar extends React.Component {
    render() {
        return (
            <nav className="navbar">
                <div className="navbar-brand">
                    <a className="navbar-item" href="localhost:3000">
                        Notes With Tags
                    </a>
                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item">
                            Home
                        </a>

                        <a className="navbar-item">
                            Documentation
                        </a>
                    </div>
                    <div className="navbar-end">

                    </div>
                </div>
            </nav>
        );
    };
}
