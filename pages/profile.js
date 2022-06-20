import React, { Component } from "react"

import Navigation from "./components/navigation"

class Profile extends Component {

    render() {
        return (
            <main>

                <Navigation />

                <h2>Profile</h2>

                <p>Basically your dashboard with all ways to use your data.</p>
                
            </main>
        )
    }
}

export default Profile