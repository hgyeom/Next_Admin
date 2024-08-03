import Image from 'next/image'
import styles from './transactions.module.css'

const Transactions = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>최근 거래</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>이름</td>
            <td>상태</td>
            <td>날짜</td>
            <td>가격</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                깡통
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pending
              </span>
            </td>
            <td>2024.05.02</td>
            <td>128,000 &#x20a9;</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                깡통
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>Done</span>
            </td>
            <td>2024.05.02</td>
            <td>128,000 &#x20a9;</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                깡통
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancel}`}>
                Cancel
              </span>
            </td>
            <td>2024.05.02</td>
            <td>128,000 &#x20a9;</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Transactions
