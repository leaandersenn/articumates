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
  name: 'Thea Halvorsen',
  age: 8,
  goals: [
    'Reduce lisp',
    'Eradicate stutter',
    'Improve overall pronunciation of other sounds'
  ],
  impairments: [
    { description: 'Lisp ("s", "z")', skillLevel: 2 },
    { description: 'Stutter', skillLevel: 3 },
    { description: 'Other sounds ("r", "l", "th"...)', skillLevel: 1 }
  ],
  chosenImpairments: [{description: "'r' sound", focus: "Medium" }],

  exercises: [
    {title: "hh", description: "hsia", ingress: "asdad"},
    {title: "hh", description: "hsia", ingress: "asdad"},
    {title: "hh", description: "hsia", ingress: "asdad"}
  ]
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
    removeChosenImpairment: (state, action: PayloadAction<string>) => {
        state.chosenImpairments = state.chosenImpairments.filter(
            (impairment) => impairment.description !== action.payload
        );
    },
    updateChosenImpairmentFocus: (state, action: PayloadAction<{ description: string; focus: ChosenImpairment['focus'] }>) => {
        const { description, focus } = action.payload;
        const impairment = state.chosenImpairments.find((imp) => imp.description === description);
        if (impairment) {
            impairment.focus = focus;
        }
    },
  },
});

export const { updateProfile, updateId, updateName, updateAge, updateGoals, addChosenImpairment, addImpairment, addGoal, updateChosenImpairmentFocus, updateImpairments, removeChosenImpairment, updateChosenImpairments} = userProfileSlice.actions;

export default userProfileSlice.reducer;
