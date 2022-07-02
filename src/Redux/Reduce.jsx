function MovieReducer(state = [], action) {
    if (action.type ="book") {
        return [...state, action.data]
    }
}
export default MovieReducer;