import React from 'react';

const ProgressWizard = ({pathname}) => {
    let createRule = pathname !== '/rules/create' ? 'active' : '';
    let evaluateRule = pathname === '/rules/deploy'? 'active' : '';

    return (
      <div className="step-wizard">
        <ul className="progressbar">
          <li className={`${createRule}`}>Create Rule</li>
          <li className={`${evaluateRule}`}>Evaluate Rule</li>
          <li>Deploy Rule</li>
        </ul>
      </div>
    )
  }

export default ProgressWizard