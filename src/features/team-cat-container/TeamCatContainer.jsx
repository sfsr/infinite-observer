import { forwardRef } from 'react';
import { Cat } from '../cat/Cat';
import CatPNG from '../../assets/cat.png'
import styles from './TeamCatContainer.module.scss';

const TeamCatContainer = forwardRef(({ team }, ref) => {
  return (
    <div className={styles["team-cat-container"]} ref={ref} data-id={team.number}>
      <h2>{`Команда котиков ${team.number}`}</h2>
      {
        team.cats.map((cat, index) => <Cat key={index} logo={CatPNG} mouses={cat.mouses} />)
      }
      
    </div>
  )
})

export { TeamCatContainer }