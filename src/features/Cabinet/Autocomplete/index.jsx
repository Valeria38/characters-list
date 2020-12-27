import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { getRouteName } from 'helpers/getRouteName';

import './styles.scss';

const Autocomplete = ({ options }) => {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = ({ target: { value } }) => {
    setValue(value);

    const results = options.filter((option) => option.name.toLowerCase().includes(value.toLowerCase()));
    value ? setSuggestions(results) : setSuggestions([]);
  };

  return (
    <div className="autocomplete">
      <input className="autocomplete--input" placeholder="Type to search" value={value} onChange={handleChange} />
      <ul className="autocomplete--list">
        {suggestions.map((suggestion) => (
          <NavLink to={`/people/${getRouteName(suggestion.name)}`}>
            <li className="autocomplete--option" key={suggestion.name}>
              {suggestion.name}
            </li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default Autocomplete;
