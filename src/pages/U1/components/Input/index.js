import S from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import injectStyle from '../../../../utils/injectStyle';
import Space from '../../../../components/Space';

const Input = ({ register, errors, fieldName, rules, ...props }) => {
  const error = errors[fieldName];
  const [isPasswordHidden, setPasswordHidden] = useState(
    props.type === 'password'
  );
  const findType = () => {
    if (props.type === 'password') {
      return isPasswordHidden ? 'password' : 'text';
    }
    return props.type;
  };
  return (
    <div className={S.Input}>
      <div className={S.Mask}>
        <input
          className={injectStyle(
            S,
            'InputField',
            error ? 'InputFieldError' : ':null'
          )}
          {...props}
          {...register(fieldName, rules)}
          type={findType()}
        />
        {props.type === 'password' && (
          <FontAwesomeIcon
            className={injectStyle(
              S,
              'PasswordInputIcon',
              isPasswordHidden ? 'hidden' : 'notHidden'
            )}
            color={isPasswordHidden ? '#BABFC6' : '#E14C20'}
            icon={isPasswordHidden ? faEyeSlash : faEye}
            onClick={() => setPasswordHidden(!isPasswordHidden)}
          />
        )}
      </div>
      <Space size={4} />
      {error && <span className={S.InputError}>{error.message}</span>}
    </div>
  );
};

Input.defaultProps = {
  type: 'text',
  rules: {
    required: 'This field is required',
  },
};

export default Input;
