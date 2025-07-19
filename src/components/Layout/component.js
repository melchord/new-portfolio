import PropTypes from 'prop-types';
import Head from 'next/head';

import styles from './index.module.scss';

const Component = ({ children, title }) => (
  <div className={styles.layout}>
    <Head>
      <link rel='shortcut icon' href='/favicon.ico' />
      <title>{title}</title>
    </Head>
    <div id='stars' />
    <div id='stars2' />
    <div id='stars3' />
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
