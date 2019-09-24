import React from 'react'
import styles from './Homepage.module.css'
import TopHeader from '../../UI/Headers/TopHeader/TopHeader'
import SubHeader from '../../UI/Headers/SubHeader/SubHeader'
import Button from '../../UI/Button/Button'
import { ReactComponent as BookImage } from "../../../assets/images/undraw_books_6rhq.svg"


const Homepage = () => {
	return (
		<div className={styles.Homepage}>
		<TopHeader/>
		<SubHeader button={true}/>
		<div className={styles.content}>
			<div className={styles.textSection}>
				<h1>Welcome To Bookateria</h1>
				<p>Books you crave, Documents you need,<span className={styles.block}>All on the menu</span></p>
				<Button bigSize color="#fff" backgroundColor="#005BB3" Text="View all books" />
			</div>
			<div className={styles.imageBox}>
				<BookImage/>
			</div>
		</div>

		{/*backgroud gradient angled at about 30 degs*/}
		{/*the text section*/}
		{/*button*/}
		{/*the image section */}

		</div>
	)
}

export default Homepage