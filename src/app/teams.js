const teams = () => [...new Array(5)].map((_, index) => createTeam(index + 1));

const createTeam = (index) => ({
  number: index,
  cats: [...new Array(Math.ceil(Math.random() * 10))].map(() => ({
    mouses: Math.round(Math.random() * 10),
  })),
});

export { teams, createTeam };
