import { useEffect, useState } from 'react';
import { Layout, Time } from '../components';

import styles from '../styles/Home.module.scss';

const Component = () => {
  const githubLink = <a href='https://github.com/melchord'>Github</a>;
  const [countdown, setCountdown] = useState(getCountdown());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountdown(getCountdown());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Layout title='Melchor Dominguez'>
      <div className={styles.title}>Melchor Dominguez</div>
      <h2>
        Software Engineer with a strong foundation in Applied Mathematics and Computer Science.
        Proven experience in scaling applications and proficient across diverse programming
        languages, including Python, Javascript, Java, and C/C++. Interested in building scalable
        systems and exploring new technologies.
      </h2>
      <br />
      <h2>
        {' '}
        My current time is: <Time />{' '}
      </h2>
      <h2>
        Next Birthday is in: {countdown.days} days, {countdown.hours} hours, {countdown.minutes}{' '}
        minutes, {countdown.seconds} seconds!
      </h2>
      <h2> Check out my {githubLink}</h2>
      <img src='/owl.gif' />
      <br />;
    </Layout>
  );
};

function getNextBirthdayDate(now = new Date()) {
  const currentYear = now.getFullYear();
  const nextBirthdayDate = new Date(currentYear, 3, 4, 0, 0, 0, 0); // April 4

  if (now > nextBirthdayDate) {
    nextBirthdayDate.setFullYear(currentYear + 1);
  }

  return nextBirthdayDate;
}

function getCountdown() {
  const now = new Date();
  const nextBirthdayDate = getNextBirthdayDate(now);
  const diff = nextBirthdayDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return {
    days,
    hours,
    minutes,
    seconds,
  };
}

Component.displayName = 'Home';

export default Component;
