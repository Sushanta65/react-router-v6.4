import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const {name, email, phone, username,website} = useLoaderData()
    
    return (
        <div className='text-center py-5'>
               <div className='border w-2/5 mx-auto py-2'>
                <h2 className='text-3xl font-bold py-2' >{name}</h2>
                <p>{email}</p>
                <p>{username}</p>
                <p>{phone}</p>
                <p>{website}</p>
                <Link to={-1}><button type="button" class="py-2 px-3 border bg-gray-200 rounded-md hover:bg-gray-300 my-2">Go Back</button></Link>
               </div>
        </div>
    );
};

export default UserDetails;