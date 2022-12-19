import React,  { useState }  from "react";
import { Link, NavLink } from "react-router-dom";

import Page from "../components/Page";

import styles from "./Welcome.module.scss";

import kpiUri from "../media/kpi.png";
import successUri from "../media/success.svg";
import { Component } from "ag-grid-community";
import Button from "../components/controls/Button";

function ShowHide(props) {
    if (!props.warn) {
      return null;
    }
  
    return (


            <div>
            <div className={styles.Lead}>
                    <h1>
                        <img src={successUri} alt="" />
                        <br />
                        Welcome!
                        <br />
                        Dasceq Strategy Automation Tool is Ready
                    </h1>
                </div>
    
                <p>You currently have no strategies running</p>
                <h3>
                    Follow simple 4 step process to create your Strategy and the dashboard will be created automatically
                </h3>
    
                <ol>
                    <li>
                        <h3>
                            Select your target Population.
                        </h3>
                    </li>
                    <li>
                        <h3>
                            Create Segments of those population.
                        </h3>
                    </li>
                    <li>
                        <h3>
                            Create Options by selecting one or more Segments.
                        </h3>
                    </li>
                    <li>
                        <h3>
                            Run Backtesting to see the Performance of your Options.
                        </h3>
    
    
                    </li>
                    <li>
                        <h3>
                            Choose and Share different Strategies
                        </h3>
                    </li>
    
                    <li>
                        <h3>
                            Send out offers directly to the customers.
                        </h3>
                    </li>
                </ol>
                </div>
    
        );

  }



class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showWarning: true}
        this.handleToggleClick = this.handleToggleClick.bind(this);
      }

      handleToggleClick() {
        this.setState(prevState => ({
          showWarning: !prevState.showWarning
        }));
      }

      render() {
        return (
            <Page>
          <div>
            <ShowHide warn={this.state.showWarning} />


            <h2>


                <a href="/home">
            <Button onClick={this.handleToggleClick}>
              {this.state.showWarning ? 'Get Started ->' : 'Thanks'}

            </Button>
            </a>
            </h2>

          </div>
          </Page>
        );
      }



};

export default Dashboard;
