import React from 'react'
import styles from './AllBooks.module.css'
import TopHeader from '../../UI/Headers/TopHeader/TopHeader'
import SubHeader from '../../UI/Headers/SubHeader/SubHeader'
import BookPreview from '../../BookPreview/BookPreview'
import Button from '../../UI/Button/Button'
import { ReactComponent as Pen } from '../../../assets/images/Union 65.svg'
import { ReactComponent as Grid } from '../../../assets/images/Union 67.svg'
import { ReactComponent as Download } from '../../../assets/images/Union 63.svg'



const Allbooks = () => {
	return (
		<div className={styles.Allbooks}>
			<TopHeader/>
			<SubHeader background={true} showButton/>
			<div className={styles.BookList}>
				<span className={styles.SectionHeader}>
					Books
				</span>
				<div className={styles.GridContainer}>
					<BookPreview imageIncluded  BookDetails={{
											title: "The journey of Isaac Bello",
											author: "Isaac Bello",
											category: "Biography",	
											downloads: 999}} />
					<BookPreview imageIncluded  BookDetails={{
											title: "The journey of Isaac Bello",
											author: "Isaac Bello",
											category: "Biography",	
											downloads: 999}} />
					<BookPreview imageIncluded  BookDetails={{
											title: "The journey of Isaac Bello",
											author: "Isaac Bello",
											category: "Biography",	
											downloads: 999}} />	
					<BookPreview imageIncluded  BookDetails={{
											title: "The journey of Isaac Bello",
											author: "Isaac Bello",
											category: "Biography",	
											downloads: 999}} />	
					<BookPreview imageIncluded  BookDetails={{
											title: "The journey of Isaac Bello",
											author: "Isaac Bello",
											category: "Biography",	
											downloads: 999}} />																								
					<BookPreview imageIncluded  BookDetails={{
											title: "The journey of Isaac Bello",
											author: "Isaac Bello",
											category: "Biography",	
											downloads: 999}} />
					<BookPreview imageIncluded  BookDetails={{
											title: "The journey of Isaac Bello",
											author: "Isaac Bello",
											category: "Biography",	
											downloads: 999}} />	
					<BookPreview imageIncluded  BookDetails={{
											title: "The journey of Isaac Bello",
											author: "Isaac Bello",
											category: "Biography",	
											downloads: 999}} />																								
					<BookPreview imageIncluded  BookDetails={{
											title: "The journey of Isaac Bello",
											author: "Isaac Bello",
											category: "Biography",	
											downloads: 999}} />
					<BookPreview imageIncluded  BookDetails={{
											title: "The journey of Isaac Bello",
											author: "Isaac Bello",
											category: "Biography",	
											downloads: 999}} />	
					<BookPreview imageIncluded  BookDetails={{
											title: "The journey of Isaac Bello",
											author: "Isaac Bello",
											category: "Biography",	
											downloads: 999}} />																								
					<BookPreview imageIncluded  BookDetails={{
											title: "The journey of Isaac Bello",
											author: "Isaac Bello",
											category: "Biography",	
											downloads: 999}} />																			
				</div>
			</div>
			<div className={styles.PopularDownloads}>
				<span className={styles.SectionHeader}>
					Popular Downloads
				</span>
					<div className={styles.LargeImage}></div>
					<h2 className={styles.Subheading}> The popular download </h2>
					<div className={styles.smallerDetails}>
					<Pen/>
					<span className={styles.text}>author</span>
				</div>
				<div className={styles.smallerDetails}>
					<Grid/>
					<span  className={styles.text}>Biography</span>
				</div><div className={styles.smallerDetails}>
					<Download/>
					<span  className={styles.text}>999</span>
				</div>
				<div className={styles.btn}>
					<Button backgroundColor="#001830" color="#fff" bigSize={false} Text="Download" />
				</div>
			</div>
		</div>
	)
} 

export default Allbooks