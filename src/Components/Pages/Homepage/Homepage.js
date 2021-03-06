import React from 'react'
import styles from './Homepage.module.css'
import TopHeader from '../../UI/Headers/TopHeader/TopHeader'
import SubHeader from '../../UI/Headers/SubHeader/SubHeader'
import Button from '../../UI/Button/Button'
import { ReactComponent as BookImage } from "../../../assets/images/undraw_books_6rhq.svg"
import SearchBarButton from '../../UI/SearchBarButton/SearchBarButton'
import { NavLink } from 'react-router-dom'
import PageLayout from '../../PageLayout/PageLayout'


const Homepage = () => {
	return (
		<PageLayout button={true} showButton={true}>
			<div className={styles.Homepage}>
			<div className={styles.content}>
				<div className={styles.textSection}>
					<h1>Welcome To Bookateria</h1>
					<p>Books you crave, Documents you need,<span className={styles.block}>All on the menu.</span></p>
					<NavLink to="/books">
						<Button bigSize color="#fff" backgroundColor="#005BB3" Text="View all books" />
					</NavLink>
					<div className={styles.extraSection}>
						<p>Know exactly what you're looking for ?</p>
						<SearchBarButton/>
					</div>
				</div>
				<div className={styles.imageBox}>
					<BookImage/>
				</div>
			</div>
			</div>
		</PageLayout>
	)
}

export default Homepage