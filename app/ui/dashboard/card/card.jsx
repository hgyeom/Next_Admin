import { MdSupervisedUserCircle } from 'react-icons/md'
import styles from './card.module.css'

const Card = () => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>총 사용자 수</span>
        <span className={styles.number}>10.224</span>
        <span className={styles.detail}>
          저번 주 보다 <span className={styles.positive}>8%</span>
          증가했습니다.
        </span>
      </div>
    </div>
  )
}

export default Card
