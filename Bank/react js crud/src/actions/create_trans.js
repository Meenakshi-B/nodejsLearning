import axios from 'axios';
import { BaseUrl } from '../../_constants/baseurl';

export default (form,callback) => {
  return dispatch => {
    axios({
      method: 'post',
      url: BaseUrl.RestUrl + "api/create_transaction",
      data: form,
      headers: {
        'Content-Type': "application/json",
        'Authorization': "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFjaHUxMEBsaXZlLmluIiwiX2lkIjoiNWEwOTMzMzQ2YWQxZTAzMmRiMDNjMzU2IiwiaWF0IjoxNTEwNjkyMzI0fQ.4naEBnqupx0EIWZkyZKAasfNIbxvaNksL84sJfuw1ks"
      }

    })
      .then(response => {
        var data = response;
        callback(data)
        console.log("response while updating -- > ", data);
        dispatch({
          type: "CREATE_transaction_SUCCESS",
          createtransactions: data
        });
      }).catch(error => {
        callback(error)
        console.log("got error while updating---> ", error);
        dispatch({ type: "CREATE_transaction_REJECTED", createtransaction: error.response.data });
      });
  }


}