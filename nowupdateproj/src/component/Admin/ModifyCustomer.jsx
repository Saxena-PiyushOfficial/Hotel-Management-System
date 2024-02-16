import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import TrekAPIService from '../services/TrekAPIService';
import AdminControlNav from './AdminControlNav'

function ModifyCustomer() {

    const [customers, setCustomer] = useState([]);

    const [update, setUpdate] = useState(false);

    useEffect(() => {
        TrekAPIService.getAllUsers()
            .then((result) => {
                setCustomer(result.data);
                console.log(result.data);
            })
            .catch((error) => {
                toast.error("Server side error");
                console.log(error);
            });
    }, []);

    const deleteItem = (id) => {
        TrekAPIService.deleteUser(id)
            .then((result) => {
                console.log("Item deleted.." + id);
                toast.success("Custmer deleted with Cust Id : " + id);
                updateCustomer(id);
            })
            .catch((error) => {
                console.log("Error in delete..");
            })
    }

    const updateCustomer = (id) => {
        setCustomer(customers.filter((item) => item.userId != id));
    }


    const renderList = customers.length > 0
        ? customers.map(data => (
            <tr>
                <td>{data.userId}</td>
                <td>{data.name}</td>
                <td>{data.address}</td>
                <td>{data.role}</td>
                <td>
                    <button
                        className="btn-outline-success bg-danger text-white font-weight-bold border border-2 rounded m-2 p-1"
                        onClick={() => { deleteItem(data.userId) }}>
                        Delete
                    </button>
                </td>
                <td> <button

                    className="btn-outline-success bg-warning text-white font-weight-bold border border-2 rounded m-2 p-1"
                    onClick={() => { setUpdate(!update) }} >
                    Update
                </button>
                </td>
            </tr>
        )) : "No customer listed..";

    return (
        <div className='container mt-4'>
            <ToastContainer></ToastContainer>
            <div className='row'>
                <div className='col-md-4'>
                    <AdminControlNav />
                </div>
                <div className='col-md-8 border'>
                    <h2>Customers</h2>


                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Customer Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Address</th>
                                <th scope="col">Role</th>
                                <th scope="col" colSpan={2}>Modify</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderList}
                        </tbody>
                    </table>
                </div>
                {
                    update == true ?
                        <div>
                            <form>
                                <div className="mb-2 mt-5">
                                    <label for="hsId" className="form-label font-weight-bold text-left">Hotel Id</label>
                                    <input type="name" className="form-control" id="hsId" name="name" readOnly />
                                </div>

                                <div className="mb-2 mt-2">
                                    <label for="vacancy" className="form-label font-weight-bold text-left">Vacancy</label>
                                    <input type="text" className="form-control" id="vacancy" placeholder="Enter vacancy" name="vacancy" />
                                </div>

                                <div className="mb-2 mt-2">
                                    <label for="starRating" className="form-label font-weight-bold text-left">starRating</label>
                                    <input type="text" className="form-control" id="username" placeholder="Enter starRating" name="starRating" />
                                </div>
                            </form>
                        </div> : ""
                }
            </div>

        </div>
    )
}

export default ModifyCustomer;
