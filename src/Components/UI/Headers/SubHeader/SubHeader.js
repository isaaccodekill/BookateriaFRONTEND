import React, { useContext } from 'react'
import styles from './SubHeader.module.css'
import NavItem from '../../../NavItems/NavItems'
import Button from '../../Button/Button'
import { NavContext } from '../../../../Contexts/NavContext'
import SideBar from '../../../SideBar/Sidebar'
import { AuthContext } from '../../../../Contexts/AuthContext'
import { NavLink } from 'react-router-dom'


const Subheader = ({navOpen, setNavOpen, background, showButton, specialCase}) => {
	console.log()
	const [authed, setAuth] = useContext(AuthContext)
	const backgroundColor = background ? 'linear-gradient(to right, rgb(0, 56, 110 ) 70%,  rgb(102, 180, 225))' :  'transparent'
	let button = null
	let text = specialCase ? "Sign Up" :  authed ? "Logout" : "Sign In"
	let btnLink = specialCase ? "/signup" : authed ? "/logout" : "/login"
	
	if (showButton){
		if (background)
			button = (<Button  backgroundColor="#fff" color="rgb(0, 56, 110)" bigSize={false} Text={text}/>)
		else
			button = (<Button backgroundColor="rgb(0 , 24 , 48)" color="#fff" bigSize={false}  Text={text}/>)
	}

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
			<SideBar open={navOpen} setOpen={setNavOpen}/>
			<div className={styles.NavItems}>
				<NavItem background={background} path="categories" label="Categories"/>
				<NavItem background={background} path="books" label="Top Books"/>
				<NavItem background={background} path="requestbook" label="Request A book"/>
			</div>
			<div className={styles.button}>
				<NavLink to={btnLink}>
		     		{ button }			
				</NavLink>
			</div>
		</div>
	)
}


export default Subheader