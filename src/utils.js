export const extractDirections = legs => {
  const turnByTurn = {};
  console.log(legs);
  for (let i = 0; i < legs.length; i++) {
    console.log(legs[i]);
    turnByTurn[i] = [];
    for (let j = 0; j < legs[i].maneuvers.length; j++) {
      turnByTurn[i].push(legs[i].maneuvers[j].narrative);
    }
  }
  return turnByTurn;
};
