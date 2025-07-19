import PropTypes from 'prop-types';
import Head from 'next/head';

import styles from './index.module.scss';

const Component = ({ children, title }) => (
  <div className={styles.layout}>
    <Head>
      <link
        rel='stylesheet'
        href='https://fonts.googleapis.com/css2?family=Aguafina+Script&family=Montserrat&display=swap'
      />
      <link rel='shortcut icon' href='/favicon.ico' />
      <title>{title}</title>
    </Head>
    <div id='stars'></div>
    <div id='stars2'></div>
    <div id='stars3'></div>
    {children}
  </div>
);

Component.displayName = 'Layout';

Component.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  title: PropTypes.string,
};

Component.defaultProps = {
  title: 'default title',
};

export default Component;
