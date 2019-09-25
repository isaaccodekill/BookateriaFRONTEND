import React from 'react'
import styles from './BookPreview.module.css'
import DefaultImage from '../UI/DefaultImage/Defaultimage'
import { ReactComponent as Pen } from '../../assets/images/Union 65.svg'
import { ReactComponent as Grid } from '../../assets/images/Union 67.svg'
import { ReactComponent as Download } from '../../assets/images/Union 63.svg'
import { ReactComponent	as DownloadLarge } from '../../assets/images/Path 6.svg'
import { NavLink } from 'react-router-dom'
import Button from '../UI/Button/Button'


const BookPreview = ({ history, imageIncluded, special, clickable, background, imageUrl, BookDetails, button }) => {
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
	const pathname = `/book/${BookDetails.id}`
	const content = ( clickable ? <NavLink to={pathname}>
			<div className={detailClasses.join(' ')}>
				{imageIncluded ? imageUrl ? <div className={styles.image} style={imageStyle}></div> : <div className={styles.image}><DefaultImage/></div> : null  }
				<div className={styles.details} style={detailStyle}>
					<h2 className={styles.header}> {BookDetails.title.length < 30 ? BookDetails.title : BookDetails.title.substring(0, 30) + "..."  } </h2>
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
							 <Button Icon={<DownloadLarge/>	} backgroundColor="#00386E" color="#fff" Text="Download"  bigSize={false} />
						</div> : null }
				</div>
			</div>
		</NavLink> : <div className={detailClasses.join(' ')}>
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
					{ button ?
						<div className={styles.btnContainer}>
							 <Button Icon={<DownloadLarge/>	} backgroundColor="#00386E" color="#fff" Text="Download"  bigSize={true} />
						</div> : null }
				</div>
			</div> )

	return (
		<div>
		{content}
		</div>
	)
}

export default BookPreview