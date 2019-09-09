import React from 'react'
import styles from './SearchBar.module.css'
import { ReactComponent as SearchIcon } from '../../../assets/images/Union 40.svg'

const SearchBar = () => {
	return (
		<div className={styles.SearchBar}>
			<form>
				<button className={styles.searchButton}>
					<SearchIcon/>
				</button>
				<input type="text" className={styles.searchInput}/>
			</form>
		</div>
	)
}

export default SearchBar