import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
	return (
		<div>
			<input 
				className='input-reset b--black bg-lightest-blue pa3 ba br-pill mb2 w-20'
				type='search'
				placeholder='Search Robots'
				onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;