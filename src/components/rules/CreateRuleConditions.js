import React, {Component} from 'react';
import { Field } from 'redux-form';
import { Button } from 'react-bootstrap'

class CreateRuleConditions extends Component{

  render(){

  return (
    <div>
      {this.props.fields.map((condition, index) =>
        <div key={index}>
          <Field className="form-control" name={`${condition}.condition_value`} component="select">
            <option value="Days">Days</option>
            <option value="Weeks">Weeks</option>
            <option value="Months">Months</option>
          </Field>
          <Field
            name={`${condition}.condition`}
            type="text"
            className="form-control"
            component="input"
            placeholder="Example Type 7, if you select days"/>
        </div>
      )}
      {this.props.fields.error && <li className="error">{this.props.fields.error}</li>}
      <Button ref={(button) => this.addCondition = button} className="btn-add-condition" onClick={() => this.props.fields.push()} bsStyle="danger"> Add Conditions </Button>
    </div>
  )
}
}
export default CreateRuleConditions;