import { memo } from 'react';
import { useSelector } from 'react-redux';

import { statuses } from 'Constants';

import { getCharacters, getCharactersStatus } from 'features/Cabinet/selectors';

import Character from 'features/Cabinet/CharactersList/components/Character';

import './styles.scss';

const CharactersList = () => {
  const characters = useSelector(getCharacters);
  const status = useSelector(getCharactersStatus);

  return (
    <div className="characters">
      {status === statuses.loading
        ? 'loading...'
        : characters.map((character) => <Character key={character.name} {...character} />)}
    </div>
  );
};

export default memo(CharactersList);
