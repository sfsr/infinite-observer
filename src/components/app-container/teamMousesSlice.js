import { createSlice, createSelector } from '@reduxjs/toolkit';
import { selectTeams } from '../../features/teams-list-container/TeamsListSlice';

const initialState = {
  teamNumber: null,
  mouses: null,
};

export const teamMousesSlice = createSlice({
  name: 'teamMouses',
  initialState,
  reducers: {
    currentTeam: (state, action) => {
      state.teamNumber = action.payload;
    },
  },
});

export const { currentTeam } = teamMousesSlice.actions;

export const selectTeamNumber = (state) => state.teamMouses.teamNumber;

export const getCaughtMouses = createSelector(
  selectTeamNumber,
  selectTeams,
  (number, teams) => {
    return teams
      .find((team) => team.number === number)
      ?.cats.reduce((sum, cat) => {
        return (sum += cat.mouses);
      }, 0);
  }
);

export default teamMousesSlice.reducer;
