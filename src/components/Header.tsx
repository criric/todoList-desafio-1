import mainLogo from '../assets/mainLogo.svg';
import styles from './Header.module.css'
export function Header(){
  return (
    <header className={styles.header}>
      <img src={mainLogo} alt=""/>
    </header>
  )
}