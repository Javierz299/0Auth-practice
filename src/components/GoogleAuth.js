import React, { Component } from 'react'

class GoogleAuth extends Component {

    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId:'125936132896-5tpkk63aqch8uv19njjp6km7pf7ihqk2.apps.googleusercontent.com',
                scope: 'profile email'
            })
        })

        
    }


    render() {
        return (
            <div>
                Google Auth
            </div>
        )
    }
}

export default GoogleAuth
