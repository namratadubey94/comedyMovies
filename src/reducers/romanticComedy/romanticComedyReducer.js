import { createAction, handleActions } from 'redux-actions';
import update from 'immutability-helper';


/*********************************************************************************/
export const fetchRComedyRequest = createAction('FETCH_RCOMEDY_REQUEST');
export const fetchRComedySuccess = createAction('FETCH_RCOMEDY_SUCCESS');
export const fetchRComedyFailure = createAction('FETCH_RCOMEDY_FAILURE');


const initialState = {
    comedies: [],
    error: null
};

export default handleActions({
    [fetchRComedyRequest]: state => state,
    [fetchRComedySuccess]: (state, { payload }) => {
        const comedies = state.comedies;
        const newComedies = comedies.concat(payload);
        return update(state, {
            comedies: { $set: newComedies }
        })
    },
    [fetchRComedyFailure]: (state, { payload }) =>
        update(state, {
            error: { $set: payload },

        })
},
    initialState
);


