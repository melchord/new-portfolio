import { useDispatch, useSelector } from 'react-redux';

import { useInterval } from '../utils';

const Component = () => {
  const dispatch = useDispatch();
  const currentTime = useSelector((state) => state.time);
  const locale = 'en-US';
  const options = {
    timezone: 'America/New_York',
    hour: '2-digit',
    minute: '2-digit',
    second: 'numeric',
  };

  useInterval(() => {
    dispatch({
      type: 'tick',
      time: new Date().toLocaleTimeString(locale, options),
      light: false,
    });
  }, 1000);

  return currentTime;
};

Component.displayName = 'Time';
export default Component;
