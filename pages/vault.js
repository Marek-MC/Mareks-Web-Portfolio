import React, { Component } from "react"

import Navigation from "./components/navigation"

class Vault extends Component {

    render() {
        return (
            <main>

                <Navigation />

                <h2>Vault</h2>

                <p>A web UI that stores large file sizes inside a database.</p>

                <p>Notes: Certain roles can access certain batches of files.</p>

            </main>
        )
    }
}

export default Vault