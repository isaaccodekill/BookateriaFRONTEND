import React from 'react'
import Navitem from '../NavItems/NavItems'
import SearchBar from '../UI/SearchBar/SearchBar'
import styles from './Sidebar.module.css'

const SideBar  = (open, setOpen) => {
	let classList = [styles.Sidebar]
	let backList = [styles.background]
	classList =  (open.open === true) ? [ styles.Sidebar , styles.show ] : [styles.Sidebar]
	backList =    (open.open === true) ? [ styles.background , styles.backgroundOpen ] : [styles.background]
	return (
		<React.Fragment>
			<div className={backList.join(' ')} onClick={() => open.setOpen(false)}></div>
			<div  className={classList.join(' ')}>
				<Navitem background path="categories" label="Categories/Tags"/>
				<Navitem background path="books" label="Top Books"/>
				<Navitem background path="requestbook" label="Request A Document"/>
				<Navitem background path="uploadbook" label="Upload A Document"/>
				<Navitem background path="requests" label="Requested Documents"/>
				<div className={styles.SearchBarDiv}>
					<SearchBar/>
				</div>
	
			</div>
		</React.Fragment>

	)
}


export default SideBar