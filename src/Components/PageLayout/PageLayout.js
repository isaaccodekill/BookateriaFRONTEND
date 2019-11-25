import React, {Fragment, useState} from 'react'
import styles from './PageLayout.css'
import TopHeader from '../UI/Headers/TopHeader/TopHeader'
import SubHeader from '../UI/Headers/SubHeader/SubHeader'


const PageLayout = ({children, button, showButton, background, specialCase}) => {
    const [open, setOpen] = useState(null)
    return (
        <Fragment>
            <TopHeader/>
            <SubHeader navOpen={open} specialCase={specialCase} setNavOpen={setOpen} background={background} button={button} showButton={showButton}/>
            <div className={styles.main}>
                {children}
            </div>
        </Fragment>
        
    )
}

export default PageLayout
