import React, { Component, PropTypes } from 'react';
import { reduxForm, Field, FieldArray } from 'redux-form';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { createRuleAction } from '../../actions/index';
import CreateRuleConditions from './CreateRuleConditions';
import '../../styles/createRule.css';
import Helmet from "react-helmet";

class CreateRule extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    static contextTypes = {
        router: PropTypes.object
    };

    onSubmit(props) {
        this.props.createRuleAction(props)
        this.context.router.push('/rules')
    };

    render() {
      const { handleSubmit } = this.props;
      return (
        <div>
          <Helmet title="Create Rule" />
          <h2> Create Rule </h2>

          <div className="step-wizard">
            <ul className="progressbar">
                <li>Create Rule</li>
                <li>Evaluate Rule</li>
                <li>Deploy Rule</li>
            </ul>
          </div>

          <div className="form-create">
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <div className="form-group">
                    <label> Rule description </label>
                    <div>
                        <Field name="description" className="form-control" component="input" placeholder="Enter rule description" type="text"/>
                    </div>
                </div>

                <div className="form-group">
                    <label> Conditions </label>
                    <FieldArray name="conditions" component={CreateRuleConditions}/>
                </div>

                <div className="form-group">
                    <label> Actions </label>
                    <div>
                        <Field className="form-control" name="actions" component="select">
                            <option value="Send Email">Send Email</option>
                            <option value="Send SMS">Send SMS</option>
                            <option value="Automated Call">Automated Call</option>
                        </Field>
                    </div>
                </div>

                <div className="form-group">
                    <label> Targets </label>
                    <div>
                        <Field className="form-control" name="targets" component="select">
                            <option value="All Users">All Users</option>
                            <option value="Some Users">Some Users</option>
                            <option value="Admins">Admins</option>
                            <option value="Managers">Managers</option>
                        </Field>
                    </div>
                </div>

                <button type="submit" className="btn btn-danger"> Save </button>
                <Link to="/rules/evaluate" className="btn btn-danger btn-submit"> Submit </Link>
            </form>
          </div>
        </div>
      )
    }
}

CreateRule = reduxForm({
    form: 'CreateNewRule',
    initialValues: {
        identifier: `INF_LE_00X`,
        group: 'Infringements',
        subgroup: 'Level Escalation',
        name: 'Subscriber received a new infringement notification for the first time'
    }
})(CreateRule)
CreateRule = connect(null, {createRuleAction})(CreateRule);

export default CreateRule