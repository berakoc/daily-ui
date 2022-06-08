import { range } from 'lodash';
import { useState } from 'react';
import Button from '../../../../components/Button';
import Space from '../../../../components/Space';
import { getStartedPageToggleTextList } from '../../../../constants';
import injectStyle from '../../../../utils/injectStyle';
import S from './style.module.css';

const GetStarted = ({ goToLoginPage }) => {
  const [toggleIndex, setToggleIndex] = useState(0);
  return (
    <div className={injectStyle(S, 'GetStarted')}>
      <img
        src='/assets/images/getStartedHero.svg'
        className={injectStyle(S, 'GetStartedImage')}
        alt={'Get Started'}
      />
      <Space size={20} />
      <h3 className={injectStyle(S, 'GetStartedTitle')}>Let's Meditate</h3>
      <div className={injectStyle(S, 'GetStartedText')}>
        {getStartedPageToggleTextList[toggleIndex]}
      </div>
      <Space size={32} />
      <div className={injectStyle(S, 'GetStartedToggle')}>
        {range(0, 3).map((index) => (
          <div
            key={index}
            onClick={() => setToggleIndex(index)}
            className={injectStyle(
              S,
              'GetStartedToggleItem',
              index === toggleIndex
                ? 'GetStartedToggleItemActive'
                : 'GetStartedToggleItemPassive'
            )}
          />
        ))}
      </div>
      <Space size={64} />
      <Button onClick={goToLoginPage}>Get Started</Button>
    </div>
  );
};

export default GetStarted;
