import React from 'react'
import styles from './BookPreview.module.css'
import DefaultImage from '../UI/DefaultImage/Defaultimage'
import { ReactComponent as Pen } from '../../assets/images/Union 65.svg'
import { ReactComponent as Grid } from '../../assets/images/Union 67.svg'
import { ReactComponent as Download } from '../../assets/images/Union 63.svg'


const BookPreview = ({ imageIncluded, imageUrl, BookDetails }) => {
	const imageStyle = {
		backgroundImage : `Url(${imageUrl})`
	}
	const detailStyle = imageIncluded ? { width: '55%' } : {width: '100%'}
	return (
		<div className={styles.BookDetail}>
		{imageIncluded ? imageUrl ? <div className={styles.image} style={imageStyle}></div> : <div className={styles.image}><DefaultImage/></div> : null  }
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
			</div>
		</div>
	)
}

export default BookPreview