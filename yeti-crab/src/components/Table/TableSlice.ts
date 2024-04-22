import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit/react';
import { API } from '@/API/requests';
import { ITableState } from './table.interface';
import { IColumnsFromServer } from '../../interfaces/columns.interface';

export const fetchingAllApplications = createAsyncThunk(
 'applications/fetchApplicationsStatus',
 () => {
  return API.applications.getApplications();
 },
);

const initialState: ITableState = {
 applications: [],
 filteredApplications: [],
};

const TableSlice = createSlice({
 name: 'table',
 initialState,
 reducers: {
  filterApplications: (state, payload: PayloadAction<IColumnsFromServer[]>) => {
   state.filteredApplications = payload.payload;
  },
 },
 extraReducers: (builder) => {
  builder
   .addCase(fetchingAllApplications.pending, (state) => {
    // state.loading = true;
   })
   .addCase(
    fetchingAllApplications.fulfilled,
    (state, action: PayloadAction<IColumnsFromServer[]>) => {
     state.applications = action.payload;
    },
   )
   .addCase(fetchingAllApplications.rejected, (state, action) => {
    // state.error = action.payload as string;
   });
 },
});

const { reducer, actions } = TableSlice;

export const { filterApplications } = actions;

export default reducer;
