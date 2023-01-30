import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getStudents, addStudents, delStudent } from './sampAPI';


const initialState = {
  value: 0,
  status: 'idle',
  students: [],
  update: false,
  subject: [],
  grade: 0
};

export const getStudentsAsync = createAsyncThunk(
  'samp/getStudents',
  async () => {
    const response = await getStudents();
    return response;
  }
);
export const delStudentsAsync = createAsyncThunk(
  'samp/delStudent',
  async (id) => {
    console.log(id)
    const response = await delStudent(id);
    return response;
  }
);

export const addStudentsAsync = createAsyncThunk(
  'samp/addStudents',
  async (student) => {
    const { email, name, grade,subject } = student;
    const response = await addStudents(email, name,grade,subject);
    return response;
  }
);
export const sampSlice = createSlice({
  name: 'samp',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(getStudentsAsync.fulfilled, (state, action) => {
        // console.log(action.payload)
        state.students = action.payload.data;
      })
      .addCase(addStudentsAsync.fulfilled, (state, action) => {
        console.log(action.payload.data)
        state.students.push(action.payload.data);
        //  console.log(state.students)
      })
      .addCase(delStudentsAsync.fulfilled, (state, action) => {
        console.log(action.payload.data)
        state.students = state.students.filter(stu => stu.id !== action.payload.data.message);
        //  console.log(state.students)
        // }).addCase(UpdStudentsAsync.fulfilled, (state, action) => {
        //   console.log(action.payload.data)
        //   state.update =! state.update
        // state.students=state.students.filter (stu =>  stu.id !== action.payload.data.message);
        //  console.log(state.students)
      });
  },
});
export const { } = sampSlice.actions;
export const selectStudents = (state) => state.samp.students;
export const selectUpdate = (state) => state.samp.update;
export default sampSlice.reducer;
