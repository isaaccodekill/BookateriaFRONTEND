import React, { useState, useEffect } from 'react'
import styles from './ViewBook.module.css'
import BookPreview from '../../BookPreview/BookPreview'
import PageLayout from '../../PageLayout/PageLayout'
import { withRouter } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { documentActions } from '../../../Actions'
import BookPreviewLoader from '../../UI/Loaders/BookSkeleton/BookSkeleton'
import Skeleton from 'react-loading-skeleton'

const ViewBook = ({ match }) => {
	const dispatch = useDispatch()
	const documentState = useSelector(state => state.documents)
	let {  params } = match
	let { id } = params

	const [ loading, setLoading ] = useState(true) 


	useEffect(() => {
		console.log("new id")
		if (documentState.selectedDocument === null){
			dispatch(documentActions.selectedDocumentAsync(id))
		}
	}, [id])

	// useEffect(() => {
	// 	if (documentState.selectedDocument === null){
	// 		dispatch(documentActions.selectedDocumentAsync(id))
	// 	}
	// }, [])
	//

	return (
		<PageLayout background showButton>
			<div className={styles.ViewBook}>
					<div className={styles.BookDetails}>
						<span className={styles.SectionHeader}>
							Download 
						</span>
						{ documentState.loading ? <BookPreviewLoader imageIncluded 	special button /> : (documentState.selectedDocument === null) ?  null : <BookPreview imageUrl={documentState.selectedDocument.image} imageIncluded button={true} special clickable={false} BookDetails={documentState.selectedDocument}/>  }
						<h3 className={styles.headerSmall}>Preview</h3> 
						<p className={styles.bookdecription}>
							{ documentState.loading ? <Skeleton count={5}/> : (documentState.selectedDocument === null) ? null : documentState.selectedDocument.description }
						</p>
					</div>
				<div className={styles.similarBooks}>
					<span className={[styles.SectionHeader, styles.SectionHeaderSecond].join(' ')}>
						Similar Books
					</span>
					{
						loading ? Array(3).fill().map(() =>(<BookPreviewLoader imageIncluded background />)) : null
					}
				</div>
			</div>
		</PageLayout>
	)
}

export default withRouter(ViewBook)