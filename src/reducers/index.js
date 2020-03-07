import sourcesReducer from './sources.reducer';
import {combineReducers} from 'redux';
import sourcesNews from './sourceNews.reducer';

const reducer=combineReducers({
    sources:sourcesReducer,
    news:sourcesNews
});

export default reducer;