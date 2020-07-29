import React, { Component } from 'react'

class GoogleAuth extends Component {

    state = {
        isSignedIn: null,
    }

    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId:'125936132896-5tpkk63aqch8uv19njjp6km7pf7ihqk2.apps.googleusercontent.com',
                scope: 'openid profile email'
            })
            .then(() => {
                this.auth = window.gapi.auth2.getAuthInstance()
                //this.onAuthChange()
                this.setState({ isSignedIn: this.auth.isSignedIn.get()})
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }

    onAuthChange = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get() })
    }

    onSignInClick = () => {
        this.auth.signIn()
    }

    onSignOutClick = () => {
        this.auth.signOut()
    }

    renderAuthButton = () => {
        if(this.state.isSignedIn === null){
            return (
                <div>not sure if signed in</div>
            )
        } else {
            console.log(this.state.isSignedIn)
            return this.state.isSignedIn ? 
            <button onClick={() => this.onSignOutClick()} >Sign Out</button> : 
            <button onClick={() => this.onSignInClick()} >Sing in</button>
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
