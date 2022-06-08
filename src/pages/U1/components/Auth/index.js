import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../../../components/Button';
import Conditional from '../../../../components/Conditional';
import For from '../../../../components/For';
import Space from '../../../../components/Space';
import {
  authAlternativeMethodIconNames,
  AuthMode,
} from '../../../../constants';
import injectStyle from '../../../../utils/injectStyle';
import Checkbox from '../Checkbox';
import IconBadge from '../IconBadge';
import Input from '../Input';
import S from './style.module.css';

const Separator = ({ text }) => (
  <div className={S.Separator}>
    <div className={S.SeparatorText}>{text}</div>
    <div className={S.SeparatorLine} />
  </div>
);

const Auth = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const [authMode, setAuthMode] = useState(AuthMode.LOGIN);
  return (
    <form
      className={injectStyle(S, 'AuthForm')}
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className={injectStyle(S, 'AuthTitle')}>
        {authMode === AuthMode.LOGIN ? 'Sign In' : 'Sign Up'}
      </h1>
      <Space size={24} />
      <Input
        fieldName='username'
        register={register}
        errors={errors}
        placeholder='Username'
      />
      <Conditional condition={authMode === AuthMode.SIGNUP}>
        <Space size={8} />
        <Input
          fieldName='email'
          register={register}
          errors={errors}
          placeholder='E-mail Address'
        />
      </Conditional>
      <Space size={8} />
      <Input
        fieldName='password'
        register={register}
        errors={errors}
        type='password'
        placeholder='Password'
      />
      <Conditional condition={authMode === AuthMode.LOGIN}>
        <Space size={9} />
        <a
          className={injectStyle(S, 'AuthAnchor', 'ForgotPassword')}
          href='/UI1'
        >
          Forgot Password
        </a>
      </Conditional>
      <Space size={24} />
      <Button type='submit'>
        {authMode === AuthMode.LOGIN ? 'Sign In' : 'Sign Up'}
      </Button>
      <Conditional condition={authMode === AuthMode.SIGNUP}>
        <Space size={12} />
        <Checkbox
          register={register}
          fieldName='isTermsAccepted'
          labelText={
            <>
              I agree to the{' '}
              <span className={injectStyle(S, 'AuthAnchor', 'TermsAnchor')}>
                Terms of Service
              </span>{' '}
              and{' '}
              <span className={injectStyle(S, 'AuthAnchor', 'TermsAnchor')}>
                Privacy Policy
              </span>
            </>
          }
        />
      </Conditional>
      <Space size={24} />
      <Separator text='Or continue with' />
      <Space size={24} />
      <For
        styledClassName={S.Flex}
        list={authAlternativeMethodIconNames}
        Child={({ item: iconName }) => (
          <IconBadge
            customClassName={S.CustomIconBadge}
            iconName={iconName.concat('-icon')}
          />
        )}
      />
      <Space size={36} />
      <Conditional
        condition={authMode === AuthMode.LOGIN}
        firstChildren={
          <div className={injectStyle(S, 'Text')}>
            Not a member?{' '}
            <span
              onClick={() => setAuthMode(AuthMode.SIGNUP)}
              className={injectStyle(S, 'AuthAnchor', 'RedirectAnchor')}
            >
              Sign Up
            </span>
          </div>
        }
        secondChildren={
          <div className={injectStyle(S, 'Text')}>
            I am already a member.{' '}
            <span
              onClick={() => setAuthMode(AuthMode.LOGIN)}
              className={injectStyle(S, 'AuthAnchor', 'RedirectAnchor')}
            >
              Sign In
            </span>
          </div>
        }
      />
    </form>
  );
};

export default Auth;
