import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useInterval } from '../utils';

const Component = ({ value }) => {
  const [mounted, setMounted] = useState(false);
  const dispatch = useDispatch();
  const currentTime = useSelector((state) => state.time);
  const locale = 'en-US';
  const options = {
    timezone: 'America/New_York',
    hour: '2-digit',
    minute: '2-digit',
    second: 'numeric',
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useInterval(() => {
    dispatch({
      type: 'tick',
      time: new Date().toLocaleTimeString(locale, options),
      light: false,
    });
  }, 1000);

  if (!mounted) return null;

  return value || currentTime;
};

Component.displayName = 'Time';
export default Component;
