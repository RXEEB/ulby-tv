import React from 'react'
import styles from './MyModal.module.css'

export const MyModal = ({ children, visible, setModal }) => {

    const rootClasses = [styles.myModal]
    if (visible) {
        rootClasses.push(styles.active)
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setModal(false)}>
            <div className={styles.myModalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>

        </div>

    )
}
