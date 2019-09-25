import React from 'react'
import styles from './Categories.module.css'
import TopHeader from '../../UI/Headers/TopHeader/TopHeader'
import SubHeader from '../../UI/Headers/SubHeader/SubHeader'
import Tag from '../../UI/Tags/Tags'

const Categories = () => {
	return (
		<div className={styles.Categories}>
			<TopHeader/>
			<SubHeader background={true} showButton/>
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
	)
}

export default Categories