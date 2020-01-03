import React, { Fragment } from 'react'
import styles from './BookSkeleton.module.css'
import { ReactComponent as Pen } from '../../../../assets/images/Union 65.svg'
import { ReactComponent as Grid } from '../../../../assets/images/Union 67.svg'
import { ReactComponent as Download } from '../../../../assets/images/Union 63.svg'
import Skeleton from 'react-loading-skeleton'


const BookPreviewLoader = ({ imageIncluded, special, background,  button }) => {
	

	
    const detailStyle = imageIncluded ? { width: '55%' } : {width: '100%'}
    
	let detailClasses = [styles.BookDetail]
	if (background){
		detailClasses.push(styles.clickable2)
	}
	if (special){
		detailClasses.push(styles.specialClass)
	}

	const content =  <div className={detailClasses.join(' ')} >
				{imageIncluded ? <div className={styles.image} style={styles.imageStyle}> <Skeleton height='98%' /> </div>  : null  }
				<div className={styles.details} style={detailStyle}>
					<h2 className={styles.header}> <Skeleton/> </h2>
					<div className={styles.smallerDetails}>
						<Pen/>
							<span className={styles.text}> <Skeleton /> </span>
					</div>
					<div className={styles.smallerDetails}>
							<Grid/>
							<span className={styles.text}> <Skeleton/> </span>
					</div>
					<div className={styles.smallerDetails}>						
						<Download/>
						<span  className={styles.text}> <Skeleton/> </span>
					</div>
					{ button ?
						<div className={styles.btnContainer}>
                            <Skeleton/>
						</div> : null }
				</div>
			</div> 

	return (
		<div>
		{content}
		</div>
	)
}

export default BookPreviewLoader