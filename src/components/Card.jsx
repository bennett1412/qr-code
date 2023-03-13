import React from 'react'
import styles from '../styles/card.module.css';
const Card = ({ imgSrc, title, content }) => {
  return (
    <div className={styles.container}>
      <img alt='card-image' className={styles.img} src={imgSrc} />
      <div className={styles.body}>
        <div className={styles.title}>{title}</div>
        <div className={styles.content}>{content}</div>
      </div>
    </div>
  )
}

export default Card