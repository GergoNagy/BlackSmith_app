import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    state: (state = {}) => state,
    //it is for the about form
    form: formReducer
});

export default rootReducer;
