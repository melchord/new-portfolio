import React from 'react';
import Layout from '../components/Layout';
import ProjectGrid from '../components/ProjectGrid';
import projects from '../data/projects';
import styles from '../styles/Projects.module.scss';

export default function ProjectsPage() {
  return (
    <Layout title='Projects'>
      <main className={styles.container}>
        <h1>Projects</h1>
        <ProjectGrid projects={projects} />
      </main>
    </Layout>
  );
}
