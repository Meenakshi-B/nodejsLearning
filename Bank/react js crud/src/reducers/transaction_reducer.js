export default (state = [], action) => {
    
      switch (action.type) {
        case 'CREATE_transaction_SUCCESS':
          return {
            ...state,
            createSuccess: action.createtransaction.data,
            error: null
          }
        case 'CREATE_transaction_REJECTED':
    
        return {
            ...state,
            createRejected: action.createtransaction,
            error: null
          }
        case 'RECEIVE_ALL_transaction':
          
        return {
            ...state,
            gettransactionuccess: action.payload.data,
            error: null
          }

        case 'DELETE_transaction_SUCCESS':
          
        return {
            ...state,
            deletetransactionuccess: action.deleteAsserts.data,
            error: null
          }
        
        case 'DELETE_transaction_REJECTED':
          
        return {
            ...state,
            deleteAssetReject: action.deleteAsserts.data,
            error: null
          }

        default:
          return state;
      }
    };