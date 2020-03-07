import { getAllNewsSources, getNewsFromSource } from "../api";

export const getAllNewsSourceAction = () => dispatch => {
    return getAllNewsSources()
        .then(response => {
            dispatch({ type: 'GET_ALL_SOURCE', payload: response.data.sources });
        })
};

export const getAllNewsFromSourceAction =(s)=> dispatch =>{
    return getNewsFromSource(s)
            .then((response)=>{
                dispatch({
                    type:'GET_ALL_NEWS', 
                    payload: response.data.articles
                })
            })
}
export const clearAllNewsData=()=>dispatch=>{
    dispatch({
        type:'EMPTY_ALL_NEWS'
    })
}