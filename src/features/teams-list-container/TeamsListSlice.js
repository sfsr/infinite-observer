import { createSlice } from '@reduxjs/toolkit';
import { createTeam, teams } from '../../app/teams';

const initialState = {
  teams: [],
};

export const teamsListSlice = createSlice({
  name: 'teamsListSlice',
  initialState,
  reducers: {
    initializeTeams: (state) => {
      state.teams = teams();
    },
    addNewTeam: (state) => {
      state.teams.push(createTeam(state.teams.length + 1));
    },
  },
});

export const { addNewTeam, initializeTeams } = teamsListSlice.actions;

export const selectTeams = (state) => state.teamsList.teams;

export default teamsListSlice.reducer;
