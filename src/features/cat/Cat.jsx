import styles from './Cat.module.scss';

const Cat = ({logo, mouses}) => (
  <div className={styles.cat}>
    <img className={styles.image} src={logo} alt="котик" />
    <span>МЫШЕЙ ПОЙМАЛ: {mouses}</span>
  </div>
)

export { Cat }