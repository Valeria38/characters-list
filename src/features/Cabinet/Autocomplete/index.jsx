import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { getRouteName } from 'helpers/getRouteName';
import { getCharacterName } from 'helpers/getName.js';

import { getSearchCharacter } from 'features/Cabinet/CharacterProfile/actions';

import './styles.scss';

const Autocomplete = ({ options }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = ({ target: { value } }) => {
    setValue(value);

    const results = options.filter((option) => option.name.toLowerCase().includes(value.toLowerCase()));
    value ? setSuggestions(results) : setSuggestions([]);
  };

  const getCharacter = (suggestion) => dispatch(getSearchCharacter(getCharacterName(suggestion.name).toLowerCase()));

  return (
    <div className="autocomplete">
      <input
        type="search"
        className="autocomplete--input"
        placeholder="Type to search"
        value={value}
        onChange={handleChange}
      />
      <ul className="autocomplete--list">
        {suggestions.map((suggestion) => (
          <NavLink
            onClick={() => getCharacter(suggestion)}
            key={suggestion.name}
            to={`/people/${getRouteName(suggestion.name)}`}
          >
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
