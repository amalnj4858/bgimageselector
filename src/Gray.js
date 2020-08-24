import React from 'react'

const Gray = ({action}) => {
	return (
		<div className ='w-100'>
		<button  value = 'Grayscale' name = 'gray' onClick = {action} > GRAYSCALE </button>
		</div>
		);
}
export default Gray;