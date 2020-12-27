import { useSelector } from 'react-redux';

import { statuses } from 'Constants';

import { getCharacters, getCharactersStatus } from 'features/Cabinet/selectors';

import Character from 'features/Cabinet/CharactersList/components/Character';

const CharactersList = () => {
  const characters = useSelector(getCharacters);
  const status = useSelector(getCharactersStatus);
  return (
    <div>
      {status === statuses.loading
        ? 'loading...'
        : characters.map((character) => <Character key={character.name} {...character} />)}
    </div>
  );
};

export default CharactersList;
