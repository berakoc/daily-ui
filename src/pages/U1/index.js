import { useState } from 'react';
import Conditional from '../../components/Conditional';
import Layout from '../../components/Layout';
import { PageType } from '../../constants';
import Auth from './components/Auth';
import GetStarted from './components/GetStarted';
import MobileDevice from './components/MobileDevice';

const UI1 = () => {
  const [pageType, setPageType] = useState(PageType.GET_STARTED);
  return (
    <Layout backgroundColor={'#FFECEA'}>
      <MobileDevice shouldRenderFirstChild={pageType === PageType.AUTH}>
        <Conditional
          condition={pageType === PageType.GET_STARTED}
          firstChildren={
            <GetStarted goToLoginPage={() => setPageType(PageType.AUTH)} />
          }
          secondChildren={<Auth />}
        />
      </MobileDevice>
    </Layout>
  );
};

export default UI1;
