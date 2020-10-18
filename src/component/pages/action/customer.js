import axios from 'axios';

const baseUrl = "http://localhost:5000/api/"

export default {
  cusOrderDetails(url = baseUrl = 'CusDetails/'){
   return {
    fetchAll : () => axios.get(url),
    fetchById : id => axios.get(url + id),
    create : newRecord => axios.post(url,newRecord),
    update : (id,UpdateRecord) => axios.put(url+id,UpdateRecord),
    delete : id => axios.delete(url + id)
   }
  }
}