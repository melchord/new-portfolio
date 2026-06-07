import React from 'react';
import styles from './index.module.scss';

export default function CodeBlock({ code = '', language = 'javascript' }) {
  return (
    <pre className={styles.pre}>
      <code>{code}</code>
    </pre>
  );
}
