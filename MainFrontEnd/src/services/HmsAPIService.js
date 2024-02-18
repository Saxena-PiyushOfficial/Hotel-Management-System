import axios from 'axios';

const base_url = "http://localhost:7070/hms";

class TrekAPIService {

    // Users
    // getAllUsers() {
    //     return axios.get(base_url + "api/guests");
    // }
    
    // deleteUser(id) {
    //     return axios.delete(base_url + "guests/" + id);
    // }

    addStaff(staffForm){
        return axios.post(base_url + "/staff/", staffForm, {
            headers: {
                'content-type': 'application/json'
            }
        })
    }


    addBooking(booking){
    
        return axios.post(base_url + "/booking/", booking, {
            headers: {
                'content-type': 'application/json'
            }
        })
    }


    addUser(guest) {
        return axios.post(base_url + "/api/guests/", guest, {
            headers: {
                'content-type': 'application/json'
            }
        });
    }

    getUserByUnamePassword(logindata, selectedOption) {
        if (selectedOption === 'manager' || selectedOption === 'owner') {
            if (selectedOption === 'manager') {
                return axios.post(base_url + "/managers/authenticate", logindata, {
                    headers: {
                        'content-type': 'application/json'
                    }
                });
            }
            else {
                return axios.post(base_url + "/owners/authenticate", logindata, {
                    headers: {
                        'content-type': 'application/json'
                    }
                });
            }

        }
        else {
            console.log(selectedOption);
            return axios.post(base_url + "/guests/authenticate", logindata, {
                headers: {
                    'content-type': 'application/json'
                }
            });
        }
    }


    // Packages
    // getAllPackages() {
    //     return axios.get(base_url + "packages/");
    // }

    // deletePackage(id) {
    //     return axios.delete(base_url + "packages/" + id);
    // }


    // updateProduct(prod){
    //     return axios.put(base_url+"products/"+prod.pid,prod,{headers:{
    //         'content-type':'application/json'}});
    // }

    // Hotel Service
    // getAllHotelService() {
    //     return axios.get(base_url + "hotel/");
    // }

    // deleteHotelService(id) {
    //     return axios.delete(base_url + "hotel/" + id);
    // }

    // // Gear shops
    // getAllGearShops() {
    //     return axios.get(base_url + "gearshop/");
    // }

    // deleteGearShop(id) {
    //     return axios.delete(base_url + "gearshop/" + id);
    // }

    // Tour Guide
    // getAllTourGuide() {
    //     return axios.get(base_url + "tourguide/");
    // }

    // deleteTourGuide(id) {
    //     return axios.delete(base_url + "tourguide/" + id);
    // }



}

export default new TrekAPIService();