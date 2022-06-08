import React, { Component } from "react"
import { Route } from "react-router-dom"

class Origin extends Component {

    render() {
        return (
            <div>

                <Route path="/" component={Home} />
                <Route path="/projects" component={Projects} />
                <Route path="/extras" component={Extra} />

            </div>
        )
    }
}

export default Origin