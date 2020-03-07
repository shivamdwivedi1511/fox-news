const sourcesNews = (state = [], action) => {
    switch (action.type) {
        case "GET_ALL_NEWS":
            return {
                news: action.payload
            };
        case "EMPTY_ALL_NEWS":
            return {
                news: undefined
            }
        default:
            return state;
    }
};

export default sourcesNews