import React from 'react';
import Card from './Card';


const CardList = ({info,blur,countb,gray,countg})=>{
	const list = info.map((image)=>{
		return <Card name= {image.name} id = {image.id} blur = {blur} countb = {countb} gray = {gray} countg = {countg} />
	});
	return (
		<div className='dib'>
		{list}
		</div>
		);
}

export default CardList;
