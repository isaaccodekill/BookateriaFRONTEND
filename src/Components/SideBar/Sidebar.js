import React, { useContext } from 'react'
import Navitem from '../NavItems/NavItems'
import SearchBar from '../UI/SearchBar/SearchBar'
import styles from './Sidebar.module.css'
import { NavContext } from '../../Contexts/NavContext'

const SideBar  = () => {
	const { navOpen , setNavOpen } = useContext(NavContext)
	let classList = [styles.Sidebar]
	classList =  navOpen ? [ styles.Sidebar , styles.show ] : [styles.Sidebar]   
	return (
		<div  className={classList.join(' ')} onClick={() => setNavOpen(false)}>
			<Navitem background path="categories" label="Categories/Tags"/>
			<Navitem background path="books" label="Top Books"/>
			<Navitem background path="requestbook" label="Request A Document"/>
			<Navitem background path="uploadbook" label="Upload A Document"/>
			<Navitem background path="requests" label="Requested Documents"/>
			<div className={styles.SearchBarDiv}>
				<SearchBar/>
			</div>
	
		</div>

	)
}

export default SideBar