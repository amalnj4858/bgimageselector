import React from 'react'

const Blur = ({action}) => {
	return (
		<div className ='w-100'>
		<button  value = 'Blur' name = 'Blur' onClick = {action} > BLUR </button>
		</div>
		);
}
export default Blur;