import React from 'react'
import styles from './Categories.module.css'
import TopHeader from '../../UI/Headers/TopHeader/TopHeader'
import SubHeader from '../../UI/Headers/SubHeader/SubHeader'
import Tag from '../../UI/Tags/Tags'
import PageLayout from '../../PageLayout/PageLayout'

const Categories = () => {
	return (
		<PageLayout background showButton>
			<div className={styles.Categories}>
			<div className={styles.Box}>
				<div className={styles.SectionBox}>
				<span className={styles.sectionHeader}>
					Categories
				</span>
				<div className={styles.categoryContainer}>
					<Tag name="Mathematics"/>
					<Tag name="Science"/>
					<Tag name="Art"/>
					<Tag name="Accounting"/>
					<Tag name="Languages"/>
					<Tag name="Literature"/>
				</div>
			</div>
			<div className={styles.SectionBox}>
				<span className={[styles.sectionHeader, styles.two].join(' ')}>
					Tags
				</span>
				<div className={styles.categoryContainer}>
					<Tag name="numbers"/>
					<Tag name="spellings"/>
					<Tag name="Computing"/>
					<Tag name="space and human exploration"/>
				</div>
			</div>
			</div>
		</div>
		</PageLayout>
	)
}

export default Categories