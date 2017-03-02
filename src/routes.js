import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import ListRules from './components/rules/ListRules';
import CreateRule from './components/rules/CreateRule';
import RuleStep from './components/rules/RuleStep';
import EmptyPage from './components/EmptyPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={EmptyPage} />
    <Route path="/apis" component={EmptyPage} />
    <Route path="/infrastructure" component={EmptyPage} />
    <Route path="/rules" component={App}>
      <IndexRoute component={ListRules} />
      <Route path="create" component={CreateRule} />
      <Route path="evaluate" component={RuleStep} title="Evaluate Rule" />
      <Route path="deploy" component={RuleStep} title="Deploy Rule" />
    </Route>
  </Route>
);
