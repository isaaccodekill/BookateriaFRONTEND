import React, { useContext } from 'react'
import styles from './SubHeader.module.css'
import NavItem from '../../../NavItems/NavItems'
import Button from '../../Button/Button'
import { NavContext } from '../../../../Contexts/NavContext'
import SideBar from '../../../SideBar/Sidebar'


const Subheader = ({ background, showButton }) => {
	const backgroundColor = background ? 'linear-gradient(to right, rgb(0, 56, 110 ) 70%,  rgb(102, 180, 225))' :  'transparent'
	let button = null
	let text = "Sign in"
	
	if (showButton){
		if (background)
			button = (<Button  backgroundColor="#fff" color="rgb(0, 56, 110)" bigSize={false} Text={text}/>)
		else
			button = (<Button backgroundColor="rgb(0 , 24 , 48)" color="#fff" bigSize={false}  Text={text}/>)
	}

	const {navOpen, setNavOpen} = useContext(NavContext)
	let menuClassList = [] 	
	if (navOpen === true){
			menuClassList = [ styles.bar, styles.active ]
	}  else { 
			menuClassList = [ styles.bar ]
	}
	if (!background){
			let newMenuClassList = [ ...menuClassList , styles.colorBar ]
			menuClassList = newMenuClassList}

	return (
		<div className={styles.Subheader} style={{background: backgroundColor}}>
			<div onClick={() => setNavOpen(!navOpen)} className={styles.menu}>
			  <div className={menuClassList.join(' ')}></div>
			</div>
			<SideBar/>
			<div className={styles.NavItems}>
				<NavItem background={background} path="categories" label="Categories"/>
				<NavItem background={background} path="topBooks" label="Top Books"/>
				<NavItem background={background} path="bookRequest" label="Request A book"/>
			</div>
			<div className={styles.button}>
	     		{ button }			
			</div>
		</div>
	)
}


export default Subheader