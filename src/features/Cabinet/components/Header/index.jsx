import { useDispatch } from 'react-redux';

import { logOut } from 'features/SignIn/actions';

import './styles.scss';

const Header = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <header className="header">
      Header
      <span className="header--logout" onClick={handleLogOut}>
        Log out
      </span>
    </header>
  );
};

export default Header;
