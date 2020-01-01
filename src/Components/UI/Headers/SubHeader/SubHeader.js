import React, { useContext, Fragment } from 'react'
import styles from './SubHeader.module.css'
import NavItem from '../../../NavItems/NavItems'
import Button from '../../Button/Button'
import SideBar from '../../../SideBar/Sidebar'
import { AuthContext } from '../../../../Contexts/AuthContext'
import { NavLink } from 'react-router-dom'
import LoadingBar from 'react-redux-loading-bar'


const Subheader = ({navOpen, setNavOpen, background, showButton, specialCase}) => {
	const [authed] = useContext(AuthContext)
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
		<Fragment>
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
			<LoadingBar style={{height: '4px', 'background-color':'#00183090'}} className={styles.loaderBar}/>
		</Fragment>
	)
}


export default Subheader