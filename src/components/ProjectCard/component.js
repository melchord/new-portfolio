import React from 'react';
import Link from 'next/link';
import styles from './index.module.scss';

export default function ProjectCard({ project }) {
  return (
    <article className={styles.card}>
      <div className={styles.content}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.desc}>{project.description}</p>
        <ul className={styles.tags}>
          {project.tags.map((t) => (
            <li key={t} className={styles.tag}>
              {t}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.actions}>
        <Link href={`/projects/${project.slug}`} className={styles.link}>
          View
        </Link>
      </div>
    </article>
  );
}
