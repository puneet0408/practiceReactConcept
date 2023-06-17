



import { configureStore } from '@reduxjs/toolkit';
import accountReducer from '../slices/accountSlice';
import bonusReducer from '../slices/bonusSlice';
import rewardReducer from '../reducers/reward';
import { AdminApi } from '../api/adminSlice';







const store = configureStore({
    reducer: {
      account: accountReducer,
      bonus: bonusReducer,
      reward: rewardReducer,
      [AdminApi.reducerPath] : AdminApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(AdminApi.middleware),
  });

  export default store;