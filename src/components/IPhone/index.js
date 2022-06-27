import { faBattery3, faSignal, faWifi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import { useEffect, useState } from 'react'
import injectStyle from '../../utils/injectStyle'
import S from './style.module.css'

const IPhone = ({ children }) => {
  const [currentTime, setCurrentTime] = useState(moment().format('HH:mm'));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment().format('HH:mm'));
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className={injectStyle(S, 'IPhone')}>
      <div className={injectStyle(S, 'topPart')}>
        <div className={injectStyle(S, 'time')}>
          {currentTime}
        </div>
        <div className={injectStyle(S, 'camera')}>
          Camera
        </div>
        <div className={injectStyle(S, 'status')}>
          {[<FontAwesomeIcon icon={faSignal} />, <FontAwesomeIcon icon={faWifi} />, <FontAwesomeIcon icon={faBattery3} />].map((icon, index) => <div className={injectStyle(S, 'statusIcon')} key={index}>
            {icon}
          </div>)}
        </div>
      </div>
      { children }
    </div>
  )
}

export default IPhone;