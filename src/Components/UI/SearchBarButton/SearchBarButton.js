import React from 'react'
import styles from './SearchBarButton.module.css'
import { ReactComponent as SearchIcon } from '../../../assets/images/Union 40.svg'

const SearchBarButton = ({searchAction}) => {
	return (
		<div className={styles.specialSearch}>
			<div className={styles.SearchArea}>
				<SearchIcon/>
				<input type="text" className={styles.specialInput}/>
			</div>
			<div className={styles.rightBtn} onClick={searchAction}>Search</div>	
		</div>
	)
}
export default SearchBarButton