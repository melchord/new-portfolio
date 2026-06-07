import React from 'react';
import Layout from '../../components/Layout';
import CodePreview from '../../components/CodePreview';
import CodeBlock from '../../components/CodeBlock';
import projects from '../../data/projects';
import Link from 'next/link';
import styles from '../../styles/Projects.module.scss';

export async function getStaticPaths() {
  const paths = projects.map((p) => ({ params: { slug: p.slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const project = projects.find((p) => p.slug === params.slug) || null;
  return { props: { project } };
}

export default function ProjectPage({ project }) {
  if (!project) return null;

  return (
    <Layout title={project.title}>
      <main className={styles.container}>
        <h1>{project.title}</h1>
        <p>{project.description}</p>

        <CodePreview embed={project.demoEmbed} />

        <h2>Code</h2>
        <CodeBlock code={project.code} />

        <p>
          <Link href='/projects'>← Back to projects</Link>
        </p>
      </main>
    </Layout>
  );
}
