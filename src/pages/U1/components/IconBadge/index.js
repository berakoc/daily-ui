import S from './style.module.css';

const IconBadge = ({ iconName, customClassName }) => {
  return (
    <div className={[S.IconBadge, customClassName].join(' ')}>
      <img src={`/assets/images/${iconName}.svg`} alt='icon' />
    </div>
  );
};

export default IconBadge;
