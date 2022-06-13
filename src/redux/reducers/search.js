import { get } from 'lodash'
import { SEARCH_MOVIE_COMPLETE, SEARCH_MOVIE_ERROR, SEARCH_MOVIE_START } from '../../consts/actionTypes'

const initialState = {};

export default function (state = initialState, action) {
    switch (action.type) {
        case SEARCH_MOVIE_START:
            return {...state}

        case SEARCH_MOVIE_ERROR:
            return {...state}

        case SEARCH_MOVIE_COMPLETE:
            return {...state}
    
        default:
            return {...state}
            break;
    }
}