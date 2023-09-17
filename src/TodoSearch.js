import './TodoSearch.css';
import React from 'react';

function TodoSearch() {
    const[searchValue, setSearchValue] = React.useState('')

    console.log('User looking for ' + searchValue);

    return (
        <input
            placeholder="Search to do"
            className="TodoSearch" 
            onChange={(event) => {
                setSearchValue(event.target.value);
            }}/>
    )
}

export { TodoSearch }