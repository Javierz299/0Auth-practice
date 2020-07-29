import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as ACTIONS from '../actions/actions'


export class GoogleAuth extends Component {


    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId:'125936132896-5tpkk63aqch8uv19njjp6km7pf7ihqk2.apps.googleusercontent.com',
                scope: 'openid profile email'
            })
            .then(() => {
                this.auth = window.gapi.auth2.getAuthInstance()
                //this.onAuthChange()
                console.log(JSON.stringify(this.auth.currentUser.get().getBasicProfile()))
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
            
        })
    }

    onAuthChange = (isSignedIn) => {
        return isSignedIn ? this.props.signIn(this.auth.currentUser.get().getId()) : this.props.signOut()
        //this.setState({ isSignedIn: this.auth.isSignedIn.get() })
    }

    onSignInClick = () => {
        this.auth.signIn()
    }

    onSignOutClick = () => {
        this.auth.signOut()
    }

    renderAuthButton = () => {
        if(this.props.isSignedIn === null){
            return (
                <div>not sure if signed in</div>
            )
        } else {
            return this.props.isSignedIn ? 
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

function mapStateToProps(state){
    return {
        isSignedIn: state.auth.isSignedIn,
    }
}

function mapDispatchToProps(dispatch){
    return {
        signIn: (id) => dispatch(ACTIONS.signIn(id)),
        signOut: () => dispatch(ACTIONS.signOut())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(GoogleAuth)
