export const ADD_PURCHASE = "ADD_PURCHASE";

export const addPurchase = function (obj1){
    console.log("Purchisedata",obj1)
    return {
        type: ADD_PURCHASE,
        payload:{...obj1}
        
    }
}
