export default courseReducer = (state, action) => {
    switch(action){
        case "CREATE_COURSE":
            //logic create course
            return [...state, Object.assign({

            }, action.course)];
            break;

        default :
            return state;


    }
}