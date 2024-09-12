import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { addData, deleteData, fetchData, updateData } from './carAPI';
import { Car } from '../../models/Car';

export interface CounterState {
  cars: Car[]
}

const initialState: CounterState = {
  cars:[]
};

//get
export const getDataAsync = createAsyncThunk(
  'cars/fetchData',
  async () => {
    console.log("test");
  
    const response = await fetchData();
    return response.data;
  }
);

//add
export const addDataAsync = createAsyncThunk(
  'cars/addData',
  async (car:Car) => {
    console.log("add");
    
    const response = await addData(car);
    return response.data;
  }
);

//delete
export const deleteDataAsync = createAsyncThunk(
  'cars/deleteData',
  async (id:String) => {
    console.log({id});
    
    const response = await deleteData(id);
    return response.data;
  }
);

//update
export const updateDataAsync = createAsyncThunk(
  'cars/updateData',
  async (car:Car) => {
    console.log({car});
    
    const response = await updateData(car);
    return response.data;
  }
);

export const carSlice = createSlice({
  name: 'cars',
  initialState,

  reducers: {
    showData: (state,action) => {
      console.log(action.payload)
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(getDataAsync.fulfilled, (state, action) => {
        state.cars = action.payload;
        console.log(action.payload)
      })
      .addCase(addDataAsync.fulfilled, (state, action) => {
        state.cars.push(action.payload)
        console.log(action.payload)
      })
      .addCase(deleteDataAsync.fulfilled, (state, action) => {
        state.cars=state.cars.filter(item=> action.payload.id !== item.id)
        console.log(action.payload)
      })
      .addCase(updateDataAsync.fulfilled, (state, action) => {
        state.cars = state.cars.map(car => 
          car.id === action.payload.id ? action.payload : car
        );
      });
  },
});

export const { showData } = carSlice.actions;
export const selectCars = (state: RootState) => state.car.cars;
export default carSlice.reducer;
