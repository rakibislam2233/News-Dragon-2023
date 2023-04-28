import React from 'react';
import img1 from '../../../../../public/images/qZone1.png'
import img2 from '../../../../../public/images/qZone2.png'
import img3 from '../../../../../public/images/qZone3.png'
const QZone = () => {
    return (
        <div className='bg-secondary p-3 rounded'> 
            <h2>Q-Zone</h2>
            <div className='d-flex flex-column'>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
            </div>
        </div>
    );
};

export default QZone;