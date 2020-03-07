const sourcesReducer = (state=[], action) => {
    switch (action.type) {
        case "GET_ALL_SOURCE":
            return {
                sources: action.payload
            };
        default:
            return state;
    }
};

export default sourcesReducer