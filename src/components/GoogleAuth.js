import React, { Component } from 'react'

class GoogleAuth extends Component {

    state = {
        isSignedIn: null,
    }

    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId:'125936132896-5tpkk63aqch8uv19njjp6km7pf7ihqk2.apps.googleusercontent.com',
                scope: 'profile email'
            })
            .then(() => {
                this.auth = window.gapi.auth2.getAuthInstance()
                //this.onAuthChange()
                this.setState({ isSignedIn: this.auth.isSignedIn.get()})
                this.auth.isSignedIn.listen(this.onAuthChange)
                console.log(this.state.isSignedIn)
            })
        })
    }

    onAuthChange = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get() })
    }

    renderAuthButton = () =>{
        if(this.state.isSignedIn === null){
            return (
                <div>not sure if signed in</div>
            )
        } else if (this.state.isSignedIn){
            return (
                <div>i am signed in!</div>
            )
        } else {
            return (
                <div>i am NOT signed in</div>
            )
        }
    }


    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        )
    }
}

export default GoogleAuth
