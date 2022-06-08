import injectStyle from '../../utils/injectStyle';
import S from './style.module.css';

export const SpaceDirection = {
  VERTICAL: 0,
  HORIZONTAL: 1,
};

const Space = ({ direction, size }) => {
  const targetProperty =
    direction === SpaceDirection.VERTICAL ? 'height' : 'width';
  return (
    <div
      className={injectStyle(S, 'Space')}
      style={{
        [targetProperty]: `${size}px`,
      }}
    />
  );
};

Space.defaultProps = {
  direction: SpaceDirection.VERTICAL,
  size: 4,
};

export default Space;
