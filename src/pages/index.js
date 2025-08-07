import { Age, Layout, Time } from '../components';

import styles from '../styles/Home.module.scss';

const Component = () => {
  const githubLink = <a href='https://github.com/melchord'>Github</a>;
  return (
    <Layout title='Melchor Dominguez'>
      <div className={styles.title}>Melchor Dominguez</div>
      <h2>
        <Age /> year-old Software Engineer with a strong foundation in Applied Mathematics and
        Computer Science. Proven experience in scaling applications and proficient across diverse
        programming languages, including Python, Javascript, Java, and C/C++. Interested in building
        scalable systems and exploring new technologies.
      </h2>
      <br />
      <h2>
        {' '}
        My current time is: <Time />{' '}
      </h2>
      <h2> Check out my {githubLink}</h2>
      <img src='/owl.gif' />
      <br />;
    </Layout>
  );
};

Component.displayName = 'Home';

export default Component;
