import React, { useEffect } from 'react'
import styles from './ViewBook.module.css'
import BookPreview from '../../BookPreview/BookPreview'
import PageLayout from '../../PageLayout/PageLayout'
import { withRouter } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { documentActions } from '../../../Actions'

const ViewBook = ({ match }) => {
	const dispatch = useDispatch()
	const documentState = useSelector(state => state.documents)
	let {  params } = match
	let { id } = params

	useEffect(() => {
		if (!documentState.selectedDocument){
			dispatch(documentActions.selectedDocumentAsync(id))
		}
	}, [])
	

	return (
		<PageLayout background showButton>
			<div className={styles.ViewBook}>
					<div className={styles.BookDetails}>
						<span className={styles.SectionHeader}>
							Download 
						</span>
						{/* <BookPreview imageIncluded button={true} special clickable={false} BookDetails={documentState.selectedDocument} */}
						 {/* /> */}
						<h3 className={styles.headerSmall}>Preview</h3> 
						<p className={styles.bookdecription}>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio magnam nemo ipsa! Vitae alias fugiat eligendi. Nesciunt eius laboriosam esse, illum ratione. Placeat omnis minus nihil, quos dolorum possimus suscipit!
						</p>
					</div>
				<div className={styles.similarBooks}>
					<span className={[styles.SectionHeader, styles.SectionHeaderSecond].join(' ')}>
						Similar Books
					</span>
					<BookPreview imageIncluded clickable BookDetails={{
						id: 1,
						title: "The journey of Isaac Bello",
						author: "Isaac Bello",
						category: "Biography",	
						downloads: 999}}
					 />
					 <BookPreview imageIncluded clickable BookDetails={{
					 	id: 1,
						title: "The journey of Isaac Bello",
						author: "Isaac Bello",
						category: "Biography",	
						downloads: 999}}
					 />
					 <BookPreview imageIncluded clickable BookDetails={{
					 	id: 1,
						title: "The journey of Isaac Bello",
						author: "Isaac Bello",
						category: "Biography",	
						downloads: 999}}
					 />
				</div>
			</div>
		</PageLayout>
	)
}

export default withRouter(ViewBook)