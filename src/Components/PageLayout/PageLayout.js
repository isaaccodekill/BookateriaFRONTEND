import React, {Fragment, useState} from 'react'
import styles from './PageLayout.module.css'
import TopHeader from '../UI/Headers/TopHeader/TopHeader'
import SubHeader from '../UI/Headers/SubHeader/SubHeader'
import Notification from '../UI/Notication/Notification'


const PageLayout = ({children, button, showButton, background, specialCase}) => {
    const [open, setOpen] = useState(null)
    return (
        <Fragment>
            <TopHeader/>
            <SubHeader navOpen={open} specialCase={specialCase} setNavOpen={setOpen} background={background} button={button} showButton={showButton}/>
            <div className={styles.main}>
                {children}
            </div>
            <Notification/>
        </Fragment>
        
    )
}

export default PageLayout
