export const API_URL={
    ALL_SOURCES:{
        url:`http://newsapi.org/v2/sources?apiKey=${process.env.REACT_APP_NEWS_API}`,
        type:'GET'
    },
    SOURCE_NEWS_LIST:{
        url:`http://newsapi.org/v2/everything?apiKey=${process.env.REACT_APP_NEWS_API}`,
        type:'GET'
    }
}