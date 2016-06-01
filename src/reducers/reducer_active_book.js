/**
 * Created by Christianson on 5/31/2016.
 */

//State arguement is not application state, only the state
    //this reducer is responsible for
export default function(state = null, action = null){

    switch(action.type){
        case 'BOOK_SELECTED':
            return action.payload;
    }
    return state
}