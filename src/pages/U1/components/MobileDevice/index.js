import withStyleWrapper from '../../../../utils/withStyleWrapper';
import S from './style.module.css';

const MobileDevice = withStyleWrapper(S, 'MobileDevice', {
  firstChild: (
    <img
      src='/assets/images/leaves.svg'
      className={S.LeavesImage}
      alt={'Leaves'}
    />
  ),
});

export default MobileDevice;
