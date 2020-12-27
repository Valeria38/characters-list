import { useState } from 'react';

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
      <input className="autocomplete--input" placeholder="Type to search" onChange={handleChange} />
      <ul className="autocomplete--list">
        {suggestions.map((suggestion) => (
          <li className="autocomplete--option" key={suggestion.name}>
            {suggestion.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Autocomplete;
