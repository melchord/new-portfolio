import React from 'react';
import ProjectCard from '../ProjectCard';
import styles from './index.module.scss';

export default function ProjectGrid({ projects = [] }) {
  return (
    <section className={styles.grid}>
      {projects.map((p) => (
        <ProjectCard key={p.slug} project={p} />
      ))}
    </section>
  );
}
