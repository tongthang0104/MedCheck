import React, {Component} from 'react';
import Home from './home';
import HowItWorks from './howItWorks';
import Bloodtest from './bloodtest';
import FAQs from './Faqs';
import SeeADoctor from './seeADoctor';
export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      home: false,
      howItWorks: false,
      bloodtest: false,
      seeADoctor: false,
      FAQs: false
    };

    this.homeRender = this.homeRender.bind(this);
    this.howItWorks = this.howItWorks.bind(this);
    this.bloodtest = this.bloodtest.bind(this);
    this.seeADoctor = this.seeADoctor.bind(this);
    this.FAQs = this.FAQs.bind(this);
  }

  homeRender() {
    this.setState({
      home: true,
      howItWorks: false,
      bloodtest: false,
      seeADoctor: false,
      FAQs: false
    });
  }

  howItWorks() {
    this.setState({
      home: false,
      howItWorks: true,
      bloodtest: false,
      seeADoctor: false,
      FAQs: false
    });
  }

  bloodtest() {
    this.setState({
      home: false,
      howItWorks: false,
      bloodtest: true,
      seeADoctor: false,
      FAQs: false
    });
  }

  seeADoctor() {
    this.setState({
      home: false,
      howItWorks: false,
      bloodtest: false,
      seeADoctor: true,
      FAQs: false
    });
  }

  FAQs() {
    this.setState({
      home: false,
      howItWorks: false,
      bloodtest: false,
      seeADoctor: false,
      FAQs: true
    });
  }

  render() {
    return (
      <div>
        <div>
          <h1 className="container">MedCheck</h1>
        </div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <ul className="nav navbar-nav">
              <li className="li-header" onClick={this.homeRender}><a>Home</a></li>
              <li className="li-header" onClick={this.howItWorks}><a>How it works</a></li>
              <li className="li-header" onClick={this.bloodtest}><a>Blood Test</a></li>
              <li className="li-header" onClick={this.seeADoctor}><a>See a Doctor</a></li>
              <li className="li-header" onClick={this.FAQs}><a>FAQs</a></li>
            </ul>
          </div>
        </nav>

        {this.state.home ? <Home /> : null}
        {this.state.howItWorks ? <HowItWorks /> : null}
        {this.state.bloodtest ? <Bloodtest /> : null}
        {this.state.seeADoctor ? <SeeADoctor /> : null}
        {this.state.FAQs ? <FAQs /> : null}
      </div>
    );
  }
}
