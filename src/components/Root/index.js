import React from 'react';
import { useHistory } from 'react-router';
import { routes } from '../../routes';

const Root = () => {
  const history = useHistory();

  return (
    <div>
      <div>Root Component</div>
      <button onClick={() => history.push(routes.signUp)}>SIGN UP</button>
      <button onClick={() => history.push(routes.signIn)}>SIGN IN</button>
    </div>
  );
};

export default Root;
