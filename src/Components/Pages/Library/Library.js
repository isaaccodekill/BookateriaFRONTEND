import React, {useState} from 'react'
import styles from './Library.module.css'
import TopHeader from '../../UI/Headers/TopHeader/TopHeader'
import SubHeader from '../../UI/Headers/SubHeader/SubHeader'
import Button from '../../UI/Button/Button'
import { ReactComponent as ShelfImage } from "../../../assets/images/Group 45.svg"
import SearchBarButton from '../../UI/SearchBarButton/SearchBarButton'
import { NavLink } from 'react-router-dom'
import PageLayout from '../../PageLayout/PageLayout'

const Library = () => {
	// somehow we are to get books bases on the catgories we picked from the db
	const [booksExist, setBookExist] = useState(false)
	const divreturned = ""
	return (
		<PageLayout background button showButton>
			<div className={styles.Homepage}>
		<div className={styles.content}>
			<div className={styles.textSection}>
				<h1>No books found</h1>
				<p>it's empty in here, <span className={styles.block}>but you can add something</span></p>
				<NavLink to="/uploadbook">
					<Button bigSize color="#fff" backgroundColor="#4BCE61" Text="Uplaod a book" />
				</NavLink>
			</div>
			<div className={styles.imageBox}>
				<ShelfImage/>
			</div>
		</div>
		</div>

		</PageLayout>
	)
}

export default Library