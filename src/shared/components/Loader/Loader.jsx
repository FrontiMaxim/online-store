import React from 'react';
import { TbLoader } from 'react-icons/tb';

import styles from './Loader.module.scss';
import cn from 'classnames';

const Loader = ({ color='default' }) => {
  return (
    <>
       <TbLoader className={cn(styles.loader, {
        [styles.primary]: color === 'primary',
        [styles.default]: color === 'default',
       })} />
    </>
  )
}

export default Loader;