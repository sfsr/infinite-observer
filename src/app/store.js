import { configureStore } from '@reduxjs/toolkit';
import teamMousesSlice from '../components/app-container/teamMousesSlice';
import teamsListSlice from '../features/teams-list-container/TeamsListSlice';

export const store = configureStore({
  reducer: {
    teamsList: teamsListSlice,
    teamMouses: teamMousesSlice,
  },
});
