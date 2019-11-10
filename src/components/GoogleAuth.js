import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '424876389394-cliu35o07umhhtmaf6mr6nn4stmd5nvi.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        })
    }

    onAuthChange = (isSignedIn) => {
        if(isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        };
    };

    onSignInClick = () => {
        this.auth.signIn();
    };

    onSignOutClick = () => {
        this.auth.signOut();
    };

    renderAuthButton() {
        if(this.props.isSignedIn === null) {
            return null;
        } else if(this.props.isSignedIn) {
            return (
                <div className="ui relaxed items">
                    <div className="item" style={{margin: 'auto', width: '50%', marginTop: '30%'}}>
                        <button onClick={this.onSignOutClick} className="ui red google button" >
                            <i className="google icon" />
                            Sign Out
                        </button>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="ui relaxed items">
                    <div className="item" style={{margin: 'auto', width: '50%', marginTop: '30%'}}>
                        <button onClick={this.onSignInClick} className="ui red google button" >
                            <i className="google icon" />
                            Sign In with Google
                        </button>
                    </div>
                </div>
            );
        };
    };

    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn
    };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
