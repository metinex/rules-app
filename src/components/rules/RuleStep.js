import React, { Component } from 'react';
import { Link } from 'react-router';
import Helmet from "react-helmet";
import ProgressWizard from './ProgressWizard'

export default class RuleStep extends Component {
    render() {

      let title = this.props.route.title

      return (
        <div>
          <Helmet title={`${title}`} />
          <h2> {title} </h2>

          <ProgressWizard pathname={this.props.location.pathname} />

          <div>
            <Link to="/rules/deploy" className="btn btn-danger"> Submit </Link>
          </div>
        </div>
      )
    }
}