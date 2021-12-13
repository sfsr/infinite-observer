import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initializeTeams, selectTeams } from '../../features/teams-list-container/TeamsListSlice';
import styles from './AppContainer.module.scss';
import { Header } from '../../features/header/Header';
import { TeamsListContainer } from '../../features/teams-list-container/TeamsListContainer';

const AppContainer = () => {
  const dispatch = useDispatch();
  const teams = useSelector(selectTeams);
  const ref = useRef();

  useEffect(() => {
    dispatch(initializeTeams())
  }, [dispatch]);

  return (
    <div ref={ref} className={styles['app-container']}>
      {
        teams.length ? (
          <>
            <Header />
            <TeamsListContainer />
          </>
        ) : 'Loading...'
      }
    </div>
  )
}

export { AppContainer }