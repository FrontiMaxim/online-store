import React from 'react';
import { TbLoader } from 'react-icons/tb';

import styles from './Loader.module.scss';

const Loader = () => {
  return (
    <>
       <TbLoader className={styles.loader} />
    </>
  )
}

export default Loader;