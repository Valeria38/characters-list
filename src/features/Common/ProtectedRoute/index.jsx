import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import { getSignInStatus } from 'features/SignIn/selectors';

const ProtectedRoute = ({ component: Component, ...props }) => {
  const isSignedIn = useSelector(getSignInStatus);

  return <Route {...props} render={(props) => (isSignedIn ? <Component {...props} /> : <Redirect to="/sign-in" />)} />;
};

export default ProtectedRoute;
