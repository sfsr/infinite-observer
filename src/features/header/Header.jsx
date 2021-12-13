import { useSelector } from 'react-redux';
import { getCaughtMouses, selectTeamNumber } from '../../components/app-container/teamMousesSlice';
import styles from './Header.module.scss';

const Header = () => {
  const teamNumber = useSelector(selectTeamNumber);
  const mousesSum = useSelector(getCaughtMouses);
  return (
    <header className={styles.header}>
      {`Количество мышей, пойманных командой котиков ${teamNumber}: ${mousesSum}`}
    </header>
  )
}

export { Header };