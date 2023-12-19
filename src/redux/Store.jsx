import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { userAuthApi } from '../redux/serviceApi/userAuthApi'
import  cartSlice  from '../CartSlice'

export const store = configureStore({
  reducer: {
   
    [userAuthApi.reducerPath]: userAuthApi.reducer,
    cart:cartSlice
    
  },
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userAuthApi.middleware),
})


setupListeners(store.dispatch)