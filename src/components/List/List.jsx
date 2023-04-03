import React from 'react';

const List = ({ route }) => {
    return (
        <li >
            <a className='mr-12 hover:bg-green-600 p-1 rounded' href={route.path}>{route.name}</a>
        </li>
    );
};

export default List;