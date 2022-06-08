import { omit } from 'lodash';
import injectStyle from '../../utils/injectStyle';
import S from './style.module.css';

const Button = (props) => {
  const updatedProps = omit(props, ['className', 'children']);
  return (
    <button
      className={injectStyle(S, 'Button').concat(' ', props.className)}
      {...updatedProps}
    >
      {props.children}
    </button>
  );
};

export default Button;
