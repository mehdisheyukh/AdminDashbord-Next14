
import Image from 'next/image'
import styles from './rightbar.module.css'
import { MdPlayCircleFilled, MdReadMore } from 'react-icons/md'

const Rightbar = () => {
  return (
    <div className={styles.container}>

      {/* Start Section One in the item */}

       <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image className={styles.bg} src="/astronaut.png" alt="" fill />
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}>🔥 Available Now</span>
          <h3 className={styles.title}>How to use the new version of the admin dashboard?</h3>
          <span className={styles.subtitle}>Takes 4 minutes to learn</span>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled/>
            Watch
          </button>
        </div>
       </div>

       {/* End of Section One in the item */}

       {/* Start Section Two in the item */}

       <div className={styles.item}>
        <div className={styles.texts}>
          <span className={styles.notification}>🚀 Coming Soon</span>
          <h3 className={styles.title}>
            New server actions are available, partial pre-rendering is coming
            up!
          </h3>
          <span className={styles.subtitle}>Boost your productivity</span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.
          </p>
          <button className={styles.button}>
            <MdReadMore />
            Learn
          </button>
        </div>
      </div>

      {/* End of Section Two in the item */}

    </div>
  )
}

export default Rightbar