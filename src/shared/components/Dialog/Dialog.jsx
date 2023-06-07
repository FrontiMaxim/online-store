import React, { useState } from 'react';
import styles from './Dialog.module.scss';

import { RxCrossCircled } from 'react-icons/rx';

const Dialog = ({ open, children, onClose }) => {

    const [isClose, setIsClose] = useState(false);

    return (
        <>
        {
            open && !isClose &&
            <div className={styles.dialog}>
                <RxCrossCircled 
                    className={styles.dialog_close} 
                    onClick={() => {
                        setIsClose(true);
                        onClose && onClose();
                    }}
                />
                {
                    children
                }
            </div>
        }
        </>
    )
}

export default Dialog;