import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAge, useInterval } from '../utils';

const Component = () => {
  const [mounted, setMounted] = useState(false);
  const dispatch = useDispatch();
  const currentDate = useSelector((state) => state.lastUpdate);

  useEffect(() => {
    setMounted(true);
  }, []);

  useInterval(() => {
    dispatch({
      type: 'tick',
      lastUpdate: new Date(),
      light: false,
    });
  }, 1000);

  if (!mounted) return null;

  return getAge(currentDate);
};

Component.displayName = 'Age';

export default Component;
