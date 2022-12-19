import React, {Component} from 'react';
import './splash-screen.css';
import logo from '../media/logo.png';
import person from '../media/person.png';

function LoadingMessage() {
  return (


<div className="splash-screen">
    <img src={person} alt="" aria-hidden />
    <img src={logo} alt="" aria-hidden />






      <b>Welcome to Dasceq Automated Collection Strategy Tool.</b>
      <div className="loading-dot">.</div>
    </div>


  );
}

function SplashScreen(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
      };
    }

    async componentDidMount() {
      try {
        // await auth0Client.loadSession();
        setTimeout(() => {
          this.setState({
            loading: false,
          });
        }, 1500)
      } catch (err) {
        console.log(err);
        this.setState({
          loading: false,
        });
      }
    }

    render() {
      // while checking user session, show "loading" message
      if (this.state.loading) return LoadingMessage();

      // otherwise, show the desired route
      return <WrappedComponent {...this.props} />;
    }
  };
}

export default SplashScreen;