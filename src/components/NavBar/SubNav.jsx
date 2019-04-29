import React from 'react';
import { Link } from 'react-router-dom';

const SubNav = () => (
  <div id="sub-nav">
    <div className="nav-links">
      <ul className="links">
        {[
          'Economic',
          'Culture',
          'Tech',
          'Politics',
          'Health',
          'Science',
          'Art',
        ].map((text, index) => (
          <li key={`${index + 1}-${text.slice(1, 3)}`}>
            <Link to="/">{text}</Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default SubNav;
