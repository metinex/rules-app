import React from 'react';
import { Link } from 'react-router';
import { Glyphicon } from 'react-bootstrap';

const Sidebar = (props) =>{
  return (
    <div className="col-sm-3 col-md-2 sidebar">
      <ul className="nav nav-sidebar">
        <li className={props.route === "/rules" ? "active" : ""}><Link to={'/rules'}><Glyphicon glyph="edit"/> Manage Rules</Link></li>
        <li className={props.route === "/apis" ? "active" : ""}><Link to={'/apis'}><Glyphicon glyph="edit"/> Manage APIs</Link></li>
        <li className={props.route === "/infrastructure" ? "active" : ""}><Link to={'/infrastructure'}><Glyphicon glyph="edit"/> Manage Infrastructure</Link></li>
      </ul>
    </div>
  )
}

export default Sidebar