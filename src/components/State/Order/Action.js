import { type } from '@testing-library/user-event/dist/type';
import {api} from '../../config/api';
import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_USER_ORDER_FAILURE,GET_USER_ORDER_REQUEST, GET_USER_ORDER_SUCCESS } from './actionType';

export const createOrder=(reqData)=>{
    return async (dispatch)=>{
        dispatch({type:CREATE_ORDER_REQUEST});
        try {
            const {data} =await api.post(`/api/order`,reqData.order,{
                headers:{
                    Authorization:`Bearer ${reqData.jwt}`,
                },
            });
            if(data.payment_url){
                window.location.href=data.payment_url;
            }
            console.log("created order data ",data);
            dispatch({type:CREATE_ORDER_SUCCESS,payload:data});
        } catch (error) {
            console.log("error",error);
            dispatch({type:CREATE_ORDER_FAILURE,payload:error});
        }
    };
};

export const getUsersOrders=(jwt)=>{
    return async (dispatch)=>{
        dispatch({type:GET_USER_ORDER_REQUEST});
        try {
            const {data} =await api.get(`api/order/user`,{
                headers:{
                    Authorization:`Bearer ${jwt}`,
                },
            });
            console.log("users order ",data);
            dispatch({type:GET_USER_ORDER_SUCCESS,payload:data});
        } catch (error) {
            dispatch({type:GET_USER_ORDER_FAILURE,payload:error});
        }
    };
};