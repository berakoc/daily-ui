import { useNavigate } from 'react-router-dom';
import injectStyle from '../../utils/injectStyle';
import S from './style.module.css';

const Layout = ({ backgroundColor, children, shouldDisableHomeButton }) => {
  const navigate = useNavigate();
  return (
    <div className={S.Layout} style={{ backgroundColor }}>
      {!shouldDisableHomeButton && (
        <div
          style={{
            color: '#302f41',
          }}
          className={injectStyle(S, 'goBack')}
          onClick={() => navigate('/')}
        >
          Go back
        </div>
      )}
      {children}
    </div>
  );
};

Layout.defaultProps = {
  shouldDisableHomeButton: false,
};

export default Layout;
