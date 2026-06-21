import { useState } from 'react';
import Link from 'next/link';

import styles from './index.module.scss';

const Component = () => {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <>
      <button
        className={styles.hamburger}
        aria-label='Toggle menu'
        onClick={() => setOpen((s) => !s)}
      >
        <span className={styles.bar} />
        <span className={styles.bar} />
        <span className={styles.bar} />
      </button>

      <nav className={`${styles.sidebar} ${open ? styles.open : ''}`}>
        <ul className={styles.links}>
          <li>
            <Link href='/' legacyBehavior>
              <a onClick={close}>Home</a>
            </Link>
          </li>
          <li>
            <Link href='/projects' legacyBehavior>
              <a onClick={close}>Projects</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

Component.displayName = 'Sidebar';

export default Component;
