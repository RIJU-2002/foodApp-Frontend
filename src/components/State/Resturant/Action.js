import { type } from "@testing-library/user-event/dist/type";
import { api } from "../../config/api";
import { CREATE_CATEGORY_FALIURE, CREATE_CATEGORY_REQUEST, CREATE_CATEGORY_SUCCESS, CREATE_EVENTS_FALIURE, CREATE_EVENTS_REQUEST, CREATE_EVENTS_SUCCESS, CREATE_RESTURANT_FALIURE, CREATE_RESTURANT_REQUEST, CREATE_RESTURANT_SUCCESS, DELETE_EVENTS_FALIURE, DELETE_EVENTS_REQUEST, DELETE_EVENTS_SUCCESS, DELETE_RESTURANT_FALIURE, DELETE_RESTURANT_REQUEST, DELETE_RESTURANT_SUCCESS, GET_ALL_EVENTS_FALIURE, GET_ALL_EVENTS_REQUEST, GET_ALL_EVENTS_SUCCESS, GET_ALL_RESTURANT_FALIURE, GET_ALL_RESTURANT_REQUEST, GET_ALL_RESTURANT_SUCCESS, GET_RESTURANTS_CATEGORY_FALIURE, GET_RESTURANTS_CATEGORY_REQUEST, GET_RESTURANTS_CATEGORY_SUCCESS, GET_RESTURANTS_EVENTS_FALIURE, GET_RESTURANTS_EVENTS_REQUEST, GET_RESTURANTS_EVENTS_SUCCESS, GET_RESTURANT_BY_ID_FALIURE, GET_RESTURANT_BY_ID_REQUEST, GET_RESTURANT_BY_ID_SUCCESS, GET_RESTURANT_BY_USER_ID_FALIURE, GET_RESTURANT_BY_USER_ID_REQUEST, GET_RESTURANT_BY_USER_ID_SUCCESS, UPDATE_RESTURANT_FALIURE, UPDATE_RESTURANT_REQUEST, UPDATE_RESTURANT_STATUS_FALIURE, UPDATE_RESTURANT_STATUS_REQUEST, UPDATE_RESTURANT_STATUS_SUCCESS, UPDATE_RESTURANT_SUCCESS } from "./actionType";

export const getAllResturantsAction=(token)=>{
    return async (dispatch)=>{
        dispatch({type:GET_ALL_RESTURANT_REQUEST});
        try{
            const {data}=await api.get(`/api/resturants`,{
                headers:{
                    Authorization:`Bearer ${token}`,
                },
            });
            dispatch({type:GET_ALL_RESTURANT_SUCCESS,payload:data});
            console.log("all resturant-",data);
        }
        catch(error){
            console.log("catch error-",error)
            dispatch({type:GET_ALL_RESTURANT_FALIURE,payload:error})
        }
    };
};

export const getResturantsById=(reqData)=>{
    return async (dispatch)=>{
        dispatch({type:GET_RESTURANT_BY_ID_REQUEST});
        try{
            const response=await api.get(`/api/resturants/${reqData.resturantId}`,{
                headers:{
                    Authorization:`Bearer ${reqData.jwt}`,
                },
            });
            dispatch({type:GET_RESTURANT_BY_ID_SUCCESS,payload:response.data});
        }
        catch(error){
            console.log("catch error-",error)
            dispatch({type:GET_RESTURANT_BY_ID_FALIURE,payload:error})
        }
    };
};

export const getResturantsByUserId=(jwt)=>{
    return async (dispatch)=>{
        dispatch({type:GET_RESTURANT_BY_USER_ID_REQUEST});
        try{
            const {data}=await api.get(`/api/admin/resturants/user`,{
                headers:{
                    Authorization:`Bearer ${jwt}`,
                },
            });
            console.log("get resturant by user id",data);
            dispatch({type:GET_RESTURANT_BY_USER_ID_SUCCESS,payload:data});
        }
        catch(error){
            console.log("catch error-",error)
            dispatch({type:GET_RESTURANT_BY_USER_ID_FALIURE,payload:error.message});
        }
    };
};

export const createResturant=(reqData)=>{
    console.log("token-------",reqData.token);
    return async (dispatch)=>{
        dispatch({type:CREATE_RESTURANT_REQUEST});
        try {
            const {data}=await api.post(`/api/admin/resturants`,reqData.data,{
                headers:{
                    Authorization:`Bearer ${reqData.token}`,
                },
            });
            dispatch({type:CREATE_RESTURANT_SUCCESS,payload:data});
            console.log("created resturant ",data);
        } catch (error) {
            console.log("catch error-",error);
            dispatch({type:CREATE_RESTURANT_FALIURE,payload:error});
        }
    }
}

export const updateResturant=({resturantId,resturantData,jwt})=>{
    return async (dispatch)=>{
        dispatch({type:UPDATE_RESTURANT_REQUEST});
        try {
            const res=await api.put(`/api/admin/resturants/${resturantId}`,resturantData,{
                headers:{
                    Authorization:`Bearer ${jwt}`,
                },
            });
            dispatch({type:UPDATE_RESTURANT_SUCCESS,payload:res.data});
        } catch (error) {
            dispatch({type:UPDATE_RESTURANT_FALIURE,payload:error});
        }
    };
};

export const deleteResturant=({resturantId,jwt})=>{
    return async (dispatch)=>{
        dispatch({type:DELETE_RESTURANT_REQUEST});
        try {
            const res=await api.delete(`/api/admin/resturants/${resturantId}`,{
                headers:{
                    Authorization:`Bearer ${jwt}`,
                },
            });
            console.log("delete resturant ",res.data);
            dispatch({type:DELETE_RESTURANT_SUCCESS,payload:resturantId});
        } catch (error) {
            console.log("catch error ",error);
            dispatch({type:DELETE_RESTURANT_FALIURE,payload:error});
        }
    };
};

export const updateResturantStatus=({resturantId,jwt})=>{
    return async (dispatch)=>{
        dispatch({type:UPDATE_RESTURANT_STATUS_REQUEST});
        try {
            const res=await api.put(`/api/admin/resturants/${resturantId}/status`,{},{
                headers:{
                    Authorization:`Bearer ${jwt}`,
                },
            });
            console.log("ressss ",res.data);
            dispatch({type:UPDATE_RESTURANT_STATUS_SUCCESS,payload:res.data});
        } catch (error) {
            console.log("error ",error);
            dispatch({type:UPDATE_RESTURANT_STATUS_FALIURE,payload:error});
        }
    };
};

export const createEventAction=({data,jwt,resturantId})=>{
    return async(dispatch)=>{
        dispatch({type:CREATE_EVENTS_REQUEST});
        try {
            const res=await api.post(`/api/admin/events/resturants/${resturantId}`,data,{
                headers:{
                    Authorization:`Bearer ${jwt}`,
                },
            });
            console.log("created events ",res.data);
            dispatch({type:CREATE_EVENTS_SUCCESS,payload:res.data});
        } catch (error) {
            console.log("catch -",error);
            dispatch({type:CREATE_EVENTS_FALIURE,payload:error});
        }
    };
};

export const getAllEvents=({jwt})=>{
    return async (dispatch)=>{
        dispatch({type:GET_ALL_EVENTS_REQUEST});
        try {
            const res=await api.get(`/api/admin/events`,{
                headers:{
                    Authorization:`Bearer ${jwt}`,
                },
            });
            console.log("get all events ",res.data);
            dispatch({type:GET_ALL_EVENTS_SUCCESS,payload:res.data});
        } catch (error) {
            dispatch({type:GET_ALL_EVENTS_FALIURE,payload:error});
        }
    };
};

export const deleteEventAction=({eventId,jwt})=>{
    return async (dispatch)=>{
        dispatch({type:DELETE_EVENTS_REQUEST});
        try {
            const res=await api.delete(`/api/admin/events/resturants/${eventId}`,{
                headers:{
                    Authorization:`Bearer ${jwt}`,
                },
            });
            console.log("DELETE event ",res.data);
            dispatch({type:DELETE_EVENTS_SUCCESS,payload:eventId})
        } catch (error) {
            console.log("catch -",error);
            dispatch({type:DELETE_EVENTS_FALIURE,payload:error});
        }
    };
};

export const getResturantsEvents=({resturantId,jwt})=>{
    return async (dispatch)=>{
        dispatch({type:GET_RESTURANTS_EVENTS_REQUEST});
        try {
            const res=await api.get(`/api/admin/events/resturants/${resturantId}`,{
                headers:{
                    Authorization:`Bearer ${jwt}`,
                },
            });
            console.log("get resturant event ",res.data);
            dispatch({type:GET_RESTURANTS_EVENTS_SUCCESS,payload:res.data});
        } catch (error) {
            dispatch({type:GET_RESTURANTS_EVENTS_FALIURE,payload:error});
        }
    };
};

export const createCategoryAction=({reqData,jwt})=>{
    return async (dispatch)=>{
        dispatch({type:CREATE_CATEGORY_REQUEST});
        try {
            const res=await api.post(`/api/admin/category`,reqData,{
                headers:{
                    Authorization:`Bearer ${jwt}`,
                },
            });
            console.log("create category ",res.data);
            dispatch({type:CREATE_CATEGORY_SUCCESS,payload:res.data});
        } catch (error) {
            console.log("catch -",error);
            dispatch({type:CREATE_CATEGORY_FALIURE,payload:error});
        }
    };
};

export const getResturantCategory=({jwt,resturantId})=>{
    return async (dispatch)=>{
        dispatch({type:GET_RESTURANTS_CATEGORY_REQUEST});
        try {
            const res=await api.get(`/api/category/resturant/${resturantId}`,{
                headers:{
                    Authorization:`Bearer ${jwt}`,
                },
            });
            console.log("get resturants category ",res.data);
            dispatch({type:GET_RESTURANTS_CATEGORY_SUCCESS,payload:res.data});
        } catch (error) {
            console.log("error cat",error)
            dispatch({type:GET_RESTURANTS_CATEGORY_FALIURE,payload:error});
        }
    };
};


