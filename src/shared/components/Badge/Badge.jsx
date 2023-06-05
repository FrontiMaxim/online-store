import React from 'react';

import styles from './Badge.module.scss';

const Badge = ({children, value}) => {
  return (
    <div className={styles.badge}>
        <span className={styles.badge_value}>{value}</span>
        {
            children
        }
    </div>
  )
}

export default Badge;