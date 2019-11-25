import React from 'react'
import styles from './RequestedBook.module.css'
import TopHeader from '../../UI/Headers/TopHeader/TopHeader'
import SubHeader from '../../UI/Headers/SubHeader/SubHeader'
import BookPreview from '../../BookPreview/BookPreview'
import Button from '../../UI/Button/Button'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Pen } from '../../../assets/images/Union 65.svg'
import { ReactComponent as Grid } from '../../../assets/images/Union 67.svg'
import { ReactComponent as Download } from '../../../assets/images/Union 63.svg'
import PageLayout from '../../PageLayout/PageLayout'


const RequestedBook = () => {
	return (
		<PageLayout background showButton>
			<div className={styles.Allbooks}>
			<div className={styles.BookList}>
				<span className={styles.SectionHeader}>
					Books
				</span>
				<div className={styles.GridContainer}>
					<BookPreview background BookDetails={{
											id: 1,	
											title: "The journey of Isaac Bello",
											author: "Isaac Bello",
											category: "Biography",	
											downloads: 999}} />
					<BookPreview background  BookDetails={{
											id: 1,
											title: "The journey of Isaac Bello",
											author: "Isaac Bello",
											category: "Biography",	
											downloads: 999}} />
					<BookPreview background BookDetails={{
											id: 1,
											title: "The journey of Isaac Bello",
											author: "Isaac Bello",
											category: "Biography",	
											downloads: 999}} />	
					<BookPreview background BookDetails={{
											id: 1,
											title: "The journey of Isaac Bello",
											author: "Isaac Bello",
											category: "Biography",	
											downloads: 999}} />	
					<BookPreview background BookDetails={{
											id: 1,
											title: "The journey of Isaac Bello",
											author: "Isaac Bello",
											category: "Biography",	
											downloads: 999}} />																								
					<BookPreview background BookDetails={{
											id: 1,
											title: "The journey of Isaac Bello",
											author: "Isaac Bello",
											category: "Biography",	
											downloads: 999}} />
					<BookPreview background BookDetails={{
											id: 1,
											title: "The journey of Isaac Bello",
											author: "Isaac Bello",
											category: "Biography",	
											downloads: 999}} />	
					<BookPreview background BookDetails={{
											id: 1,
											title: "The journey of Isaac Bello",
											author: "Isaac Bello",
											category: "Biography",	
											downloads: 999}} />																								
					<BookPreview background BookDetails={{
											id: 1,
											title: "The journey of Isaac Bello",
											author: "Isaac Bello",
											category: "Biography",	
											downloads: 999}} />
					<BookPreview background BookDetails={{
											id: 1,
											title: "The journey of Isaac Bello",
											author: "Isaac Bello",
											category: "Biography",	
											downloads: 999}} />	
					<BookPreview background BookDetails={{
											id: 1,
											title: "The journey of Isaac Bello",
											author: "Isaac Bello",
											category: "Biography",	
											downloads: 999}} />																								
					<BookPreview background BookDetails={{
											title: "The journey of Isaac Bello",
											author: "Isaac Bello",
											category: "Biography",	
											downloads: 999}} />																			
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