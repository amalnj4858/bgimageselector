import React from 'react'
import 'tachyons';

const Card = ({name,id,blur,countb,gray,countg})=> {
	if(blur === 'yes' && gray === 'yes' && countb%2 === 0 && countg%2 === 0)
	return(
		<div className= 'bg-light-yellow dib grow pa3 tc' >
			<div>
			<img src = {`https://picsum.photos/id/${id}/200/300?grayscale&blur`}  />
			</div>
			{name}
		</div>
		);
	else if(blur === 'yes' && countb%2 === 0)
	return(
		<div className= 'bg-light-yellow dib grow pa3 tc' >
			<div>
			<img src = {`https://picsum.photos/id/${id}/200/300?blur`}  />
			</div>
			{name}
		</div>
		);
	else if(gray === 'yes' && countg%2 === 0)
	return(
		<div className= 'bg-light-yellow dib grow pa3 tc' >
			<div>
			<img src = {`https://picsum.photos/id/${id}/200/300?grayscale`}  />
			</div>
			{name}
		</div>
		);
	else
	return(
		<div className= 'bg-light-yellow dib grow pa3 tc' >
			<div>
			<img src = {`https://picsum.photos/id/${id}/200/300`}  />
			</div>
			{name}
		</div>
		);
		
	
}

export default Card; 