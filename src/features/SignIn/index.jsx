import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FacebookLogin from 'react-facebook-login';

import { getSignInStatus } from 'features/SignIn/selectors';

import { setSignInData } from 'features/SignIn/actions';

const SignIn = ({ history }) => {
  const dispatch = useDispatch();
  const isSignedIn = useSelector(getSignInStatus);

  const responseFacebook = (response) => {
    console.log(response);
    dispatch(setSignInData(response));
  };

  useEffect(() => {
    isSignedIn && history.push('/cabinet');
  }, [isSignedIn]);

  return (
    <div>
      <div>Facebook Authentication</div>
      <FacebookLogin appId="323026485491711" autoLoad={true} fields="name,email,picture" callback={responseFacebook} />
    </div>
  );
};

export default SignIn;
