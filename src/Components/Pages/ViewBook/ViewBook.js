import React from 'react'
import styles from './ViewBook.module.css'
import BookPreview from '../../BookPreview/BookPreview'
import TopHeader from '../../UI/Headers/TopHeader/TopHeader'
import SubHeader from '../../UI/Headers/SubHeader/SubHeader'

const ViewBook = () => {
	return (
			<div className={styles.ViewBook}>
					<TopHeader/>
					<SubHeader background showButton/>
					<div className={styles.BookDetails}>
						<span className={styles.SectionHeader}>
							Download
						</span>
						<BookPreview imageIncluded button={true} clickable={false} BookDetails={{
								title: "The journey of Isaac Bello",
								author: "Isaac Bello",
								category: "Biography",	
								downloads: 999}}
						 />
						<h3 className={styles.headerSmall}>Preview</h3> 
						<p className={styles.bookdecription}>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio magnam nemo ipsa! Vitae alias fugiat eligendi. Nesciunt eius laboriosam esse, illum ratione. Placeat omnis minus nihil, quos dolorum possimus suscipit!
						</p>
					</div>
				<div className={styles.similarBooks}>
					<span className={styles.SectionHeader}>
						Similar Books
					</span>
					<BookPreview imageIncluded clickable BookDetails={{
						title: "The journey of Isaac Bello",
						author: "Isaac Bello",
						category: "Biography",	
						downloads: 999}}
					 />
					 <BookPreview imageIncluded clickable BookDetails={{
						title: "The journey of Isaac Bello",
						author: "Isaac Bello",
						category: "Biography",	
						downloads: 999}}
					 />
					 <BookPreview imageIncluded clickable BookDetails={{
						title: "The journey of Isaac Bello",
						author: "Isaac Bello",
						category: "Biography",	
						downloads: 999}}
					 />
				</div>
			</div>
	)
}

export default ViewBook