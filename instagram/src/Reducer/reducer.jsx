import { useReducer } from 'react';

export const initialState = { email: 'Taylor', age: 42 };
function reducer(state, action) {
    
    switch (action.type) {
        case 'incremented_age': {
            return {
                name: state.name,
                age: state.age + 1
            };
        }
        case 'changed_name': {
            return {
                name: action.nextName,
                age: state.age
            };
        }
        case 'decremented_age':{
            return {
                name: state.email,
                age: state.age - 1
            };
        }
    }
    throw Error('Unknown action: ' + action.type);
}



export default  reducer;