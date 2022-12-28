import styles from './Header.module.css';

import toDoImg from '../assets/logo.svg';

export function Header() {
  return (
    <div className={styles.header}>
      <img src={toDoImg} alt='Logotipo do ToDo List' />
    </div>
  );
}
