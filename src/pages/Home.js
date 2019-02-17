import React, { Component } from "react";
import { FormattedMessage } from "react-intl";

class Home extends Component {
    render() {
        return (
            <div>
                <h1>
                    <FormattedMessage
                        id="Home.header"
                        defaultmessage="Hello, world!"
                    />
                </h1>
                <p>
                    <FormattedMessage
                        id="Home.dayMessage"
                        defaultMessage="It's a beautiful day outside."
                    />
                </p>
                <p>
                    <FormattedMessage
                        id="Home.dayLink"
                        defaultMessage="Click here to find out why!"
                    />
                </p>
            </div>
        );
    }
}

export default Home;
