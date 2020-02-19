import React, { useState, useEffect } from 'react'
import styles from './SearchBar.module.css'
import { ReactComponent as SearchIcon } from '../../../assets/images/searchIcon.svg'
import { ReactComponent as ClearIcon } from '../../../assets/images/clearIcon.svg'
import { searchActions } from '../../../Actions/'
import { documentActions } from '../../../Actions/'
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader/Loader";
import { withRouter } from 'react-router-dom'

const SearchBar = ({ history }) => {
	const [ searchText, setSearchText ] = useState("")
	const dispatch = useDispatch()
	const searchStore = useSelector(state => state.search)

	const search = (e) => {
		setSearchText(e.target.value)
		if(e.target.value){
			dispatch(searchActions.searchAsync(e.target.value))
		}else{
			dispatch(searchActions.clearResults())
		}
	}

	const redirect = (e) => {

	}

	const bookRedirect = (id) => {
		dispatch(documentActions.clearSelectedDocument())
		dispatch(searchActions.clearResults())
		history.push(`/book/${id}`)
	}



	return (
		<div className={styles.SearchBar}>
			<form className={styles.searchForm}>
				<button className={styles.searchButton} onClick={redirect}>
					<SearchIcon/>
				</button>
				{ searchText ?  searchStore.loading ? <Loader height="15px" className={styles.Loader}/> : <ClearIcon className={styles.clear}/> : null}
				<input type="text" onChange={search} value={searchText} className={styles.searchInput} />
			</form>
			{ searchStore.searchResults.length > 0 ? (<div className={styles.result}>
				<ul className={styles.optionGroup}>
					{
						searchStore.searchResults.slice(0, 11).map((res) => (<li tabIndex={-1} onClick={() => bookRedirect(res.id)} className={styles.option}>
							{ res.title.length > 50 ? res.title.substring(0, 51) + "..." : res.title }
						</li>))
					}
				</ul>
			</div>) : null }
		</div>
	)
}

export default withRouter(SearchBar)