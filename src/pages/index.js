import { Age, Layout } from '../components';

import styles from '../styles/Home.module.scss';

const Component = () => {
  const githubLink = <a href='https://github.com/melchord>'>Github</a>;
  return (
    <Layout title='Melchor Dominguez'>
      <div className={styles.title}>Melchor Dominguez</div>
      <h2>
        I'm a <Age /> year-old Software Engineer.
      </h2>
      <br />
      <h2> Check out my {githubLink}</h2>
      <img src='/owl.gif' />
      <br />;
    </Layout>
  );
};

Component.displayName = 'Home';

export default Component;
