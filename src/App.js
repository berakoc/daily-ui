import { useState } from 'react';
import { Link } from 'react-router-dom';
import S from './App.module.css';
import Layout from './components/Layout';
import { mainMenuModelList } from './constants';
import injectStyle from './utils/injectStyle';

const ModelDisplay = ({models}) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className={injectStyle(S, 'ModelDisplay')}>
      <div onClick={() => setShowMenu(!showMenu)} className={injectStyle(S, 'Button')}>Templates</div>
      <div style={{
        opacity: showMenu ? 1 : 0,
        transform: showMenu ? 'translateY(0)' : 'translateY(-20%)',
        visibility: showMenu ? 'visible' : 'hidden',
      }} className={injectStyle(S, 'Menu')}>
        {models.map((model, index) => (
          <div key={index} className={injectStyle(S, 'MenuItem')}>
            <Link to={model.href}>{model.name}</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

function App() {
  return (
    <Layout shouldDisableHomeButton backgroundColor={'#ececfb'}>
      <ModelDisplay models={mainMenuModelList} />
    </Layout>
  );
}

export default App;
