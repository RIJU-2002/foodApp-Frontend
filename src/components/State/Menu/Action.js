import { CREATE_MENU_ITEM_FAILURE, CREATE_MENU_ITEM_REQUEST, CREATE_MENU_ITEM_SUCCESS, DELETE_MENU_ITEM_FAILURE, DELETE_MENU_ITEM_REQUEST, DELETE_MENU_ITEM_SUCCESS, GET_ALL_MENU_ITEM_FALIURE, GET_ALL_MENU_ITEM_REQUEST, GET_ALL_MENU_ITEM_SUCCESS, GET_MENU_ITEM_BY_RESTURANT_ID_FAILURE, GET_MENU_ITEM_BY_RESTURANT_ID_REQUEST, GET_MENU_ITEM_BY_RESTURANT_ID_SUCCESS, SEARCH_MENU_ITEM_FAILURE, SEARCH_MENU_ITEM_REQUEST, SEARCH_MENU_ITEM_SUCCESS, UPDATE_MENU_ITEM_AVAILABILITY_FAILURE, UPDATE_MENU_ITEM_AVAILABILITY_REQUEST, UPDATE_MENU_ITEM_AVAILABILITY_SUCCESS } from "./actionType"
import {api} from '../../config/api'
import { type } from "@testing-library/user-event/dist/type";

export const createMenuItem=({menu,jwt})=>{
    return async (dispatch)=>{
        dispatch({type:CREATE_MENU_ITEM_REQUEST});
        try {
            const {data} =await api.post(`/api/admin/food`,menu,{
                headers:{
                    Authorization:`Bearer ${jwt}`,
                },
            });
            console.log("created menu ",data);
            dispatch({type:CREATE_MENU_ITEM_SUCCESS,payload:data});
        } catch (error) {
            console.log("catch error ",error);
            dispatch({type:CREATE_MENU_ITEM_FAILURE,payload:error});
        }
    };
};

export const getMenuItemByResturantId =(reqData)=>{
    return async (dispatch)=>{
        dispatch({type:GET_MENU_ITEM_BY_RESTURANT_ID_REQUEST});
        try {
            // if(reqData.vegetarian===undefined && reqData.seasonal===undefined && reqData.nonveg===undefined && reqData.foodCategory===undefined){
            //     const {data} =await api.get(`/api/food/resturant/${reqData.resturantId}`,{
            //         headers:{
            //             Authorization:`Bearer ${reqData.jwt}`,
            //         },
            //     });
            //     console.log("menu item by resturant ",data);
            // dispatch({type:GET_MENU_ITEM_BY_RESTURANT_ID_SUCCESS,payload:data});
            // }
            // else{
                const {data} =await api.get(`/api/food/resturant/${reqData.resturantId}?vegetarian=${reqData.vegetarian}
            &nonveg=${reqData.nonveg}&seasonal=${reqData.seasonal}&foodCategory=${reqData.foodCategory}`,{
                headers:{
                    Authorization:`Bearer ${reqData.jwt}`,
                },
            });
            console.log("menu item by resturant ",data);
            dispatch({type:GET_MENU_ITEM_BY_RESTURANT_ID_SUCCESS,payload:data});
            // }
            
        } catch (error) {
            console.log("catch error ",error);
            dispatch({type:GET_MENU_ITEM_BY_RESTURANT_ID_FAILURE,payload:error});
        }
    };
};

export const searchMenuItem =({keyword,jwt})=>{
    return async(dispatch)=>{
        dispatch({type:SEARCH_MENU_ITEM_REQUEST});
        try {
            const {data}=await api.get(`api/food/search?name=${keyword}`,{
                headers:{
                    Authorization:`Bearer ${jwt}`,
                },
            });
            console.log("data-----",data);
            dispatch({type:SEARCH_MENU_ITEM_SUCCESS,payload:data});
        } catch (error) {
            dispatch({type:SEARCH_MENU_ITEM_FAILURE,payload:error});
        }
    };
};

// export const getAllIngredientsOfMenuItem =(reqData)=>{
//     return async (dispatch)=>{
//         dispatch({type:GET_})
//     }
// }

export const updateMenuItemsAvailability=({foodId,jwt})=>{
    return async (dispatch)=>{
        dispatch({type:UPDATE_MENU_ITEM_AVAILABILITY_REQUEST});
        try {
            const {data}=await api.put(`/api/admin/food/${foodId}`,
        {},
        {
            headers:{
                Authorization:`Bearer ${jwt}`,
            },
        });
        console.log("update menuitems Availabilty ",data);
        dispatch({type:UPDATE_MENU_ITEM_AVAILABILITY_SUCCESS,payload:data});
        } catch (error) {
            console.log("error ",error);
            dispatch({type:UPDATE_MENU_ITEM_AVAILABILITY_FAILURE,payload:error});
        }
    };
};

export const deleteFoodAction=({foodId,jwt})=>{
    return async (dispatch)=>{
        dispatch({type:DELETE_MENU_ITEM_REQUEST});
        try {
            const {data}=await api.delete(`/api/admin/food/${foodId}`,{
                headers:{
                    Authorization:`Bearer ${jwt}`,
                },
            });
            console.log("delete food ",data);
            dispatch({type:DELETE_MENU_ITEM_SUCCESS,payload:foodId});
        } catch (error) {
            dispatch({type:DELETE_MENU_ITEM_FAILURE,payload:error});
        }
    };
};

export const allFoodAction=({jwt})=>{
    return async (dispatch)=>{
        dispatch({type:GET_ALL_MENU_ITEM_REQUEST});
        try {
            const {data}=await api.get(`/api/food/search/all`,{
                headers:{
                    Authorization:`Bearer ${jwt}`,
                },
            });
            console.log("all food ",data);
            dispatch({type:GET_ALL_MENU_ITEM_SUCCESS,payload:data});
        } catch (error) {
            dispatch({type:GET_ALL_MENU_ITEM_FALIURE,payload:error});
        }
    }
}