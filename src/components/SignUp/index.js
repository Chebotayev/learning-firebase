// LIBS
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { userActions } from '../../redux/actions';

const SignUp = () => {
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();

  const onSubmit = ({ email, password }) => dispatch(userActions.signUp.call({ email, password }));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="email" type="email" ref={register({ required: true })} />
      <input
        name="password"
        type="password"
        ref={register({ required: true })}
        autoComplete="off"
      />
      {errors.exampleRequired && <span>This field is required</span>}
      <button type="submit">LET&apos;S GO!</button>
    </form>
  );
};

export default SignUp;
