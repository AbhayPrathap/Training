export const ADD_PURCHASE = "ADD_PURCHASE";

export const addPurchase = function (data) {
    return (dispatch) => {
        
        fetch('http://localhost:3000/api/medicalshop/purchase', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        }).then(res => res.json()).then(res => {

           
        })
    };
}



// export const addTutorial=function(data){
//     return{
//         type:ADD_PURCHASE,
//         payload:data
//     }
// }
export const getPurchase = function () {
    return (dispatch) => {

        fetch('http://localhost:3000/api/medicalshop/purchase').then(res => res.json()).then(res => {
            dispatch({
                type: ADD_PURCHASE,
                payload: res
            });

        })
    }
}