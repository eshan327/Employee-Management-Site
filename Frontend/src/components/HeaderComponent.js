import React, { Component } from 'react';

class HeaderComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // State can be used for future enhancements
        };
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div>
                            <a href="https://google.com" className="navbar-brand">
                                Manager
                            </a>
                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;
