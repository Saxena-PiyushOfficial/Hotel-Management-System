import axios from 'axios';

const base_url = "http://localhost:7070/hms";

class HmsAPIService {

   
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



}

export default new HmsAPIService();