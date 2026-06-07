import React from 'react';
import styles from './index.module.scss';

export default function CodePreview({ embed }) {
  if (!embed) return null;

  return (
    <div className={styles.preview}>
      <iframe
        src={embed}
        title='Live preview'
        className={styles.iframe}
        allow='accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; microphone; midi; clipboard-read; clipboard-write'
      />
    </div>
  );
}
