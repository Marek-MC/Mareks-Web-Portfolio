import React, { Component } from "react"

import Navigation from "./components/navigation"

class Home extends Component {

    render() {
        return (
            <main>

                <Navigation />

                <h2>My Home</h2>

                <p>Basically your dashboard with all ways to use your data.</p>
                
            </main>
        )
    }
}

export default Home