import React, { useEffect, useState } from 'react'
import styles from './RequestedBook.module.css'
import TopHeader from '../../UI/Headers/TopHeader/TopHeader'
import SubHeader from '../../UI/Headers/SubHeader/SubHeader'
import BookPreview from '../../BookPreview/BookPreview'
import Button from '../../UI/Button/Button'
import { NavLink } from 'react-router-dom'
import PageLayout from '../../PageLayout/PageLayout'
import { useSelector, useDispatch } from 'react-redux'
import { requestActions } from '../../../Actions'



const RequestedBook = () => {
	const dispatch = useDispatch()
	const { requests } = useSelector(state => state.request)

	// const [ requestedBooks, setRequestedBooks ] = useState([])

	useEffect(() => {
		dispatch(requestActions.getBooksAsync())
	}, [])


	return (
		<PageLayout background showButton>
			<div className={styles.Allbooks}>
			<div className={styles.BookList}>
				<span className={styles.SectionHeader}>
					Requested Books
				</span>
				<div className={styles.GridContainer}>
					{requests.map(doc => (<BookPreview background BookDetails={{
											id: doc.id,	
											title: doc.title,
											author: doc.author,
											category: doc.category,	
											downloads: 999}} />))}
				</div>
			</div>
			<div className={styles.PopularDownloads}>
				<div className="bySectionInner">
					<p>Want to upload a requested book ?</p>
					<div className={styles.btn}>
						<NavLink to="/uploadbook">
							<Button backgroundColor="#001830" color="#fff" bigSize={false} Text="upload" />
						</NavLink>
					</div>
				</div>
			</div>
		</div>
		</PageLayout>
	)
}

export default RequestedBook