import React, { useEffect } from 'react'
import styles from './AllBooks.module.css'
import BookPreview from '../../BookPreview/BookPreview'
import Button from '../../UI/Button/Button'
import { ReactComponent as Pen } from '../../../assets/images/Union 65.svg'
import { ReactComponent as Grid } from '../../../assets/images/Union 67.svg'
import { ReactComponent as Download } from '../../../assets/images/Union 63.svg'
import PageLayout from '../../PageLayout/PageLayout'
import { useSpring, animated } from 'react-spring' 
import { useSelector, useDispatch } from 'react-redux'
import { documentActions } from '../../../Actions'
import ReactPaginate from 'react-paginate'
import { ReactComponent as Next } from '../../../assets/images/next.svg'
import BookPreviewLoader from '../../UI/Loaders/BookSkeleton/BookSkeleton'
import Skeleton from 'react-loading-skeleton'



const Allbooks = () => {
	const AnimatedBooks = animated(BookPreview)
	const bookStyleProps = useSpring({
		opacity: 1,
		transform: 'scale(1)',
		from: {
			opacity: 0,
			transform: 'scale(0.2)'
		}
	})
	const dispatch = useDispatch()
	const documentState = useSelector(state => state.documents)
	const loadingState = useSelector(state => state.loadingBar)

	useEffect(() => {
		if(documentState.documents.length === 0){
			dispatch(documentActions.getDocumentsAsync(1))
		}
	}, [])

	
	const fetchRelevantDocs = (param) => {
		console.log(loadingState)
		dispatch(documentActions.getDocumentsAsync(param.selected + 1))
	}


	return (
		<PageLayout background button showButton>
			<div className={styles.Allbooks}>
			<div className={styles.BookList}> 
				<span className={styles.SectionHeader}>
					Books
				</span>
				<div className={styles.GridContainer}>
					{documentState.loading ? ( Array(10).fill().map(doc => (<BookPreviewLoader imageIncluded background />))) 
					: (documentState.documents.map(doc => (
						<BookPreview imageIncluded clickable   BookDetails={{
							id: doc.id,	
							title: doc.title,
							author: doc.author,
							tags: doc.tags,
							downloads: doc.downloads}} />
					))) }
					 
					 {/* <AnimatedBooks style={bookStyleProps} imageIncluded clickable  BookDetails={{
						id: 0,	
						title: "React spring test",
						author: "Isaac Bello",
						category: "Programming",	
						downloads: 1
					}}>
					</AnimatedBooks>
																								  */}
				</div>
				<div className={styles.paginateHolder}>
					<ReactPaginate
						pageCount={Math.ceil(144/ 10)}
						breakLabel={'...'}
						previousLabel={'previous'}
						nextLabel={'next'}
						pageRangeDisplayed={1}
						containerClassName={styles.paginateContainer}
						activeClassName={styles.paginatePageActive}
						disabledClassName={styles.paginateDisabled}
						onPageChange={fetchRelevantDocs}
					></ReactPaginate>
				</div>
			</div>
				<div className={styles.PopularDownloads}>
				<span className={styles.SectionHeader}>
					Popular Downloads
				</span>
					<div className={styles.LargeImage}> { documentState.loading ? <Skeleton height="100%"/> : null } </div>
					<h2 className={styles.Subheading}> { documentState.loading ? <Skeleton/> :  "The popular download" } </h2>
					<div className={styles.smallerDetails}>
					<Pen/>
					<span className={styles.text}> { documentState.loading ? <Skeleton/> : "Isaac Bello" }  </span>
				</div>
				<div className={styles.smallerDetails}>
					<Grid/>
					<span  className={styles.text}>{ documentState.loading ? <Skeleton/> : "Biography" }</span>
				</div><div className={styles.smallerDetails}>
					<Download/>
					<span  className={styles.text}>{ documentState.loading ? <Skeleton/> : "999" }</span>
				</div>
				<div className={styles.btn}>
					{ documentState.loading ? <Skeleton height="45px" width="50%"/> : <Button backgroundColor="#001830" color="#fff" bigSize={false} Text="Download" />}
				</div>
			</div>
		</div>
		</PageLayout>
	)
} 

export default Allbooks