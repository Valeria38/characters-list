import { memo } from 'react';
import { useSelector } from 'react-redux';

import { getSignInData } from 'features/SignIn/selectors';

import './styles.scss';

const Header = () => {
  const { name, email } = useSelector(getSignInData);
  return (
    <header className="header">
      <div className="header--container">
        <div className="header--userinfo">
          <div>{name}</div>
          <div>{email}</div>
        </div>
      </div>
    </header>
  );
};

export default memo(Header);
