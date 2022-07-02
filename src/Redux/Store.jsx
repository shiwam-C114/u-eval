import { configureStore } from '@reduxjs/toolkit'

const Movies = configureStore({ reducer: counterReducer })

console.log(Movies.getState())
