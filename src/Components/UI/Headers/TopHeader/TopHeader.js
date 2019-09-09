import React from 'react'
import styles from './TopHeader.module.css'
import Logo from '../../Logo/Logo'
import SearchBar from '../../SearchBar/SearchBar'

const TopHeader = () => {
	return (
		<div className={styles.TopHeader}>
			<Logo/>
			<div className={styles.searchBar}>
				<SearchBar/>
			</div>
		</div>
	)
}

export default TopHeader