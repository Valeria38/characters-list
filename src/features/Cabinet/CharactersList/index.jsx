import { memo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { statuses } from 'Constants';

import { getCharacters } from 'features/Cabinet/actions';

import { getCharacters as getCharactersSelector, getCharactersStatus, getTotal } from 'features/Cabinet/selectors';

import Character from 'features/Cabinet/CharactersList/components/Character';
import Pagination from 'features/Cabinet/CharactersList/components/Pagination';

import './styles.scss';

const usePagination = (defaultPage) => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(defaultPage);

  const handleChange = (newPage) => {
    console.log('new page', newPage);
    setPage(newPage);
    dispatch(getCharacters(newPage));
  };

  return {
    page,
    handleChange,
  };
};

const CharactersList = () => {
  const characters = useSelector(getCharactersSelector);
  const total = useSelector(getTotal);
  const status = useSelector(getCharactersStatus);

  const { page, handleChange } = usePagination(1);

  return (
    <>
      <div className="characters">
        {status === statuses.loading
          ? 'loading...'
          : characters.map((character) => <Character key={character.name} {...character} />)}
      </div>{' '}
      <Pagination onChange={handleChange} page={page} total={total} />
    </>
  );
};

export default memo(CharactersList);
