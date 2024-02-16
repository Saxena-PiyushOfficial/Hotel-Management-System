import React, { useEffect, useState } from 'react'
// import { toast, ToastContainer } from 'react-toastify';
import TrekAPIService from '../services/TrekAPIService';
import AdminControlNav from './AdminControlNav'

function ModifyGearShop() {

    const [gearshop, setGearShop] = useState([]);

    const [update, setUpdate] = useState(false);

    useEffect(() => {
        TrekAPIService.getAllGearShops()
            .then((result) => {
                setGearShop(result.data);
                console.log(result.data);
            })
            .catch((error) => {
                // toast.error("Server side error");
                console.log(error);
            });
    }, []);

    const deleteItem = (id) => {
        TrekAPIService.deleteGearShop(id)
            .then((result) => {
                console.log("Item deleted.." + id);
                // toast.success("Gear service deleted with Id : " + id);
                updateGearService(id);
            })
            .catch((error) => {
                console.log("Error in delete..");
            })
    }

    const updateGearService = (id) => {
        setGearShop(gearshop.filter((item) => item.gsId != id));
    }

    const renderList = gearshop.length > 0
        ? gearshop.map(data => (
            <tr>
                <td>{data.gsId}</td>
                {/* <td>{data.vacancy}</td>
                <td>{data.starRating}</td> */}
                <td>
                    <button
                        className="btn-outline-success bg-danger text-white font-weight-bold border border-2 rounded m-2 p-1"
                        onClick={() => { deleteItem(data.gsId) }}>
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
        )) : "No Gear service listed..";

    return (
        <div className='container mt-4'>
            <ToastContainer></ToastContainer>
            <div className='row'>
                <div className='col-md-4'>
                    <AdminControlNav />
                </div>
                <div className='col-md-8 border'>
                    <h2>Gear Shops</h2>


                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Gear Service Id</th>
                                {/* <th scope="col">Vacancy</th>
                                <th scope="col">Star Ratings</th> */}
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
                                    <label for="gsId" className="form-label font-weight-bold text-left">Hotel Id</label>
                                    <input type="name" className="form-control" id="gsId" name="name" readOnly />
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

export default ModifyGearShop;
