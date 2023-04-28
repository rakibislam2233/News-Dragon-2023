import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [data,setData] = useState();
    useEffect(()=>{
        fetch('http://localhost:5000/catelogories')
        .then(res => res.json())
        .then(data => setData(data))
    },[])
    return (
        <div>
            <h3>All Caterogy</h3>
           {
            data?.map(dt=> <p key={dt.id}>
                <Link className='text-decoration-none text-black fs-5' to={`/catelogories/${dt.id}`}>{dt.name}</Link>
            </p>)
           }
        </div>
    );
};

export default LeftNav;