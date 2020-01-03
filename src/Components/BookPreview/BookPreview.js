import React from 'react'
import styles from './BookPreview.module.css'
import DefaultImage from '../UI/DefaultImage/Defaultimage'
import { ReactComponent as Pen } from '../../assets/images/Union 65.svg'
import { ReactComponent as Grid } from '../../assets/images/Union 67.svg'
import { ReactComponent as Download } from '../../assets/images/Union 63.svg'
import { ReactComponent	as DownloadLarge } from '../../assets/images/Path 6.svg'
import { withRouter } from 'react-router-dom'
import Button from '../UI/Button/Button'
import { useDispatch } from 'react-redux'
import { documentActions } from '../../Actions'


const BookPreview = ({ history, imageIncluded, special, clickable, background, imageUrl, BookDetails, button }) => {
	
	const dispatch = useDispatch()

	function getBook(){
		console.log("the selected document has been set")
		dispatch(documentActions.selectDocument(BookDetails))
		history.push(`/book/${BookDetails.id}`)
	}

	const imageStyle = { 
		backgroundImage : `Url(${imageUrl})`
	}
	const detailStyle = imageIncluded ? { width: '55%' } : {width: '100%'}
	let detailClasses = clickable ? [styles.BookDetail, styles.clickable] : [styles.BookDetail]
	if (background){
		detailClasses.push(styles.clickable2)
	}
	if (special){
		detailClasses.push(styles.specialClass)
	}

	function placeHolder(){

	}

	const action = clickable ? getBook : placeHolder
	const content =  <div className={detailClasses.join(' ')} onClick={action}>
				{imageIncluded ? imageUrl ? <div className={styles.image} style={styles.imageStyle}></div> : <div className={styles.image}><DefaultImage/></div> : null  }
				<div className={styles.details} style={detailStyle}>
					<h2 className={styles.header}> {BookDetails.title} </h2>
					<div className={styles.smallerDetails}>
						<Pen/>
						<span className={styles.text}>{BookDetails.author}</span>
					</div>
					<div className={styles.smallerDetails}>
						<Grid/>
						<span  className={styles.text}>{BookDetails.category}</span>
					</div><div className={styles.smallerDetails}>
						<Download/>
						<span  className={styles.text}>{BookDetails.downloads}</span>
					</div>
					{ button ?
						<div className={styles.btnContainer}>
							 <Button Icon={<DownloadLarge/>	} backgroundColor="#00386E" color="#fff" Text="Download"  bigSize={true} />
						</div> : null }
				</div>
			</div> 

	return (
		<div>
		{content}
		</div>
	)
}

export default withRouter(BookPreview)