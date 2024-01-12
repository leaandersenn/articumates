import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Impairment, ChosenImpairment, Exercise } from '../types';


// Defining the type for user profile state
type UserProfileState = {
  id: number;
  name: string;
  age: number;
  goals: string[];
  impairments: Impairment[];
  chosenImpairments: ChosenImpairment[];
  exercises: Exercise[];
};

//Initial state
const initialState: UserProfileState = {
  id: 1,
  name: '',
  age: 8,
  goals: [
  ],
  impairments: [],
  chosenImpairments: [],

  exercises: [
  ],
};


export const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {
    updateProfile: (state, action: PayloadAction<UserProfileState>) => {
      return action.payload;
    },
    updateId: (state, action: PayloadAction<number>) => {
      state.id = action.payload;
    },
    updateName: (state, action: PayloadAction<string>) => {
        state.name = action.payload;
    },
    updateAge: (state, action: PayloadAction<number>) => {
        state.age = action.payload;
    },
    updateGoals: (state, action: PayloadAction<string[]>) => {
        state.goals = action.payload;
    },
    addGoal: (state, action: PayloadAction<string>) => {
        state.goals.push(action.payload);
    },
    updateImpairments: (state, action: PayloadAction<Impairment[]>) => {
        state.impairments = action.payload;
    },
    addImpairment: (state, action: PayloadAction<Impairment>) => {
        state.impairments.push(action.payload);
    },
    updateChosenImpairments: (state, action: PayloadAction<ChosenImpairment[]>) => {
        state.chosenImpairments = action.payload;
    },
    addChosenImpairment: (state, action: PayloadAction<ChosenImpairment>) => {
        const exists = state.chosenImpairments.some(impairment => impairment.description === action.payload.description);
        if (!exists) {
          state.chosenImpairments.push(action.payload);
        }
      },

    addExercises: (state, action: PayloadAction<Exercise[]>) => {
        state.exercises = action.payload;
    },
    
    deleteAllExercises: (state) => {
        state.exercises = [];
    },
    
    removeChosenImpairment: (state, action: PayloadAction<string>) => {
        state.chosenImpairments = state.chosenImpairments.filter(
            (impairment) => impairment.description !== action.payload
        );
    },
  },
});

export const { updateProfile, updateId, updateName, updateAge, updateGoals, addChosenImpairment, addImpairment, addGoal, updateImpairments, removeChosenImpairment, updateChosenImpairments, addExercises, 
  deleteAllExercises } = userProfileSlice.actions;

export default userProfileSlice.reducer;
