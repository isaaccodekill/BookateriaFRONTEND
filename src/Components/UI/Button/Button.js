import React from 'react'

const Button  = ({ bigSize, backgroundColor, color, Text, action }) => {
	const style =  {
		fontSize: "13px",
		color: color,
		backgroundColor: backgroundColor,
		borderRadius: '8px',
		textAlign: "center"
	}
	const sizestyling = bigSize ? {
		padding: '10px 35px',
	} : {
		padding: '10px 25px'
	}
	return (
		<div onClick={action} style= {{...style, ...sizestyling}}>
			{Text}
		</div>
	)
}

export default Button