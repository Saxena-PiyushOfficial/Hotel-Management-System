import axios from 'axios';

const base_url="http://localhost:7070/api/";

class TrekAPIService{
        
    // Users
    getAllUsers(){
        return axios.get(base_url+"users/");
    }

    deleteUser(id){
        return axios.delete(base_url+"users/"+id);
    }

    addUser(user){
        return axios.post(base_url+"users/",user,{headers:{
            'content-type':'application/json'}});
    }

     getUserByUnamePassword(logindata){
        return axios.post(base_url+"users/login",logindata,{headers:{
            'content-type':'application/json'}});
     }


    // Packages
    getAllPackages(){
        return axios.get(base_url+"packages/");
    }

    deletePackage(id){
        return axios.delete(base_url+"packages/"+id);
    }


    // updateProduct(prod){
    //     return axios.put(base_url+"products/"+prod.pid,prod,{headers:{
    //         'content-type':'application/json'}});
    // }

    // Hotel Service
    getAllHotelService(){
        return axios.get(base_url+"hotel/");
    }

    deleteHotelService(id){
        return axios.delete(base_url+"hotel/"+id);
    }

      // Gear shops
    getAllGearShops(){
        return axios.get(base_url+"gearshop/");
    }

    deleteGearShop(id){
        return axios.delete(base_url+"gearshop/"+id);
    }

     // Tour Guide
     getAllTourGuide(){
        return axios.get(base_url+"tourguide/");
    }

    deleteTourGuide(id){
        return axios.delete(base_url+"tourguide/"+id);
    }



}

export default new TrekAPIService();