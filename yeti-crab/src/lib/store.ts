import { Store, ThunkDispatch, UnknownAction, configureStore } from '@reduxjs/toolkit';
import table from '@/components/Table/TableSlice';

export const makeStore = (): {
 dispatch: ThunkDispatch<any, undefined, UnknownAction>;
} & Store<any, UnknownAction, unknown> => {
 return configureStore({
  reducer: { table },
 });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
