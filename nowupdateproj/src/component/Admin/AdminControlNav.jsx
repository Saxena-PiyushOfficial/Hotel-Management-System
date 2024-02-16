import React from 'react';
import { Link } from 'react-router-dom';
import './AdminControl.css';


function AdminControlNav() {
    return (
        <div>
            <div className='list-group border border-2 admincontrol-bg'>
                <Link className='list-group-item list-group-item-action font-weight-bold active text-white'>Modify</Link>
                <Link to='/admin/packages' className='list-group-item list-group-item-action admincontrol-bg'>Packages</Link>
                <Link to='/admin/customers' className='list-group-item list-group-item-action admincontrol-bg'>Customers</Link>
                <Link to='/admin/hotelservices' className='list-group-item list-group-item-action admincontrol-bg'>Hotel Services</Link>
                
            </div>
        </div>
    )
}

export default AdminControlNav
