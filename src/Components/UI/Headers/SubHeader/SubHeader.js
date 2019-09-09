import React, { useContext } from 'react'
import styles from './SubHeader.module.css'
import NavItem from '../../../NavItems/NavItems'
import Button from '../../Button/Button'
import { NavContext } from '../../../../Contexts/NavContext'
import SideBar from '../../../SideBar/Sidebar'

const Subheader = ({ background, showButton }) => {
	const backgroundColor = background ? 'linear-gradient(to right, rgb(0, 56, 100 ), rgb(0, 24, 48), rgb(168, 123, 41))' :  '#fff'
	let button = null
	let text = "Sign in"
	let calcColor = background ? '#fff' : 'rgb(0, 24, 48)' 
	if (showButton){
		if (background)
			button = (<Button  backgroundColor="#fff" color="rgb(168, 123, 41)" bigSize={false} Text={text}/>)
		else
			button = (<Button backgroundColor="#fff" color="rgb(168, 123, 41)" bigSize={false}  Text={text}/>)
	}

	const {navOpen, setNavOpen} = useContext(NavContext)
	let menuClassList = [] 	
	if (navOpen === true){
			menuClassList = [ styles.bar, styles.active ]
	} else if (navOpen === false){
			menuClassList = [styles.bar, styles.inactive]
	} else 	{ 
			menuClassList = [ styles.bar ]}
	return (
		<div className={styles.Subheader} style={{background: backgroundColor}}>
			<div onClick={() => setNavOpen(!navOpen)} className={styles.menu} style={{color: calcColor}}>
			  <div className={menuClassList.join(' ')}></div>
			</div>
			<SideBar/>
			<div className={styles.NavItems}>
				<NavItem background path="categories" label="Categories"/>
				<NavItem background path="topBooks" label="Top Books"/>
				<NavItem background path="bookRequest" label="Request A book"/>
			</div>
			<div className={styles.button}>
	     		{ button }			
			</div>
		</div>
	)
}


export default Subheader