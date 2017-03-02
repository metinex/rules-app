import React, { Component } from 'react';
import {
    Accordion,
    Panel,
    Glyphicon
} from 'react-bootstrap';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { fetchRules } from '../../actions/index';
import SearchInput, {createFilter} from 'react-search-input';
import Helmet from "react-helmet";
import '../../styles/rules.css';


const KEYS_TO_FILTERS = ['name']

class ListRules extends Component {
  constructor(props) {
      super(props);

      this.state = {
          searchTerm: ''
      }

      this.searchUpdated = this.searchUpdated.bind(this);
  }

  componentWillMount() {
      this.props.fetchRules();
  }

  searchUpdated (term) {
    this.setState({searchTerm: term})
  }

  render() {
    const {rules} = this.props;

    const filteredRules = rules.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))

    return (
      <div> 
        <Helmet title="List of Rules" />

        <SearchInput className="search-input" placeholder="Search Rules (Name or Rule Identifier)" onChange={this.searchUpdated} />

        <div className="add-rule">
            <Link to={'/rules/create'} className="btn btn-danger"><Glyphicon glyph="plus"/>Create Rule</Link>
        </div>

        <div className="list-rule">
            <Accordion>
                {rules && filteredRules.map((result) => {
                    return (
                        <Panel key={result.id} header={result.name} eventKey={result.id + 1}>
                            <div className="rule-accordion">
                                Rule Number {result.id}
                            </div>
                            <div>
                                <label className="label-accordion"> Rule Identifier </label>
                                <p> {result.identifier} </p>

                                <label className="label-accordion"> Rule Group </label>
                                <p> {result.group} </p>

                                <label className="label-accordion"> Sub Group </label>
                                <p> {result.subgroup} </p>

                                <label className="label-accordion"> Rule Name </label>
                                <p> {result.name} </p>

                                <label className="label-accordion"> Rule Description </label>
                                <p> {result.description} </p>

                                <label className="label-accordion"> Functional Area </label>
                                <p> {result.area} </p>
                            </div>
                        </Panel>
                    )
                })}
            </Accordion>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    rules: state.rules.all
  };
}

export default connect(mapStateToProps, {fetchRules})(ListRules);
