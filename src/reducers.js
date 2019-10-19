import { CHANGE_SEARCH_FIELD } from './constants.js';

const initialState = {
    searchField: ''
}


export const SearchRobots = (state=InitialState, action={}) => {
    switch(action.type){
        case: CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, searchField: action.payload)
        default state;
    }
};