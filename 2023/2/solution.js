const readTextFile = require("../../readTextFile");

const input = readTextFile("2023/2/input.txt");

const cubesAvailableColorMap = {
  red: 12,
  green: 13,
  blue: 14,
};

const getMaxCubesCountInGame = (game, cubicleColor) => {
  const regexPattern = `\\d+ ${cubicleColor}`;
  const regex = new RegExp(regexPattern, "g");
  const matches = game?.match(regex);
  const arrayOfCubicles = matches.map((match) =>
    parseInt(match.replace(` ${cubicleColor}`, ""))
  );
  return Math.max(...arrayOfCubicles);
};

const checkIsGamePlayable = (game) => {
  const colors = Object.keys(cubesAvailableColorMap);
  let result = true;
  for (let i = 0; i < colors.length; i++) {
    const color = colors[i];
    const cubesAvailable = cubesAvailableColorMap[color];
    const maxCubesCountInGame = getMaxCubesCountInGame(game, color);

    if (maxCubesCountInGame > cubesAvailable) {
      result = false;
      break;
    }
  }
  return result;
};

const getPowerOfCubesInGame = (game) => {
  const colors = Object.keys(cubesAvailableColorMap);
  let result = 0;
  for (let i = 0; i < colors.length; i++) {
    const color = colors[i];
    const maxCubesCountInGame = getMaxCubesCountInGame(game, color);
    result = !result ? maxCubesCountInGame : result * maxCubesCountInGame;
  }
  return result;
};

const getGameId = (gameString) => {
  const gameId = parseInt(gameString?.replace("Game ", ""));
  return gameId;
};

const solutions1 = (games) => {
  let idsSum = 0;

  for (let i = 0; i < games.length; i++) {
    const game = games[i];
    const gameInfo = game.split(":");
    const [gameIdInfo, gameContentInfo] = gameInfo;
    const gameId = getGameId(gameIdInfo);
    const isGamePlayable = checkIsGamePlayable(gameContentInfo);
    if (isGamePlayable) {
      idsSum += gameId;
    }
  }

  return idsSum;
};

const solution22 = (games) => {
  let sumOfMultipliedCubesPerGame = 0;

  for (let i = 0; i < games.length; i++) {
    const game = games[i];
    const gameInfo = game.split(":");
    const powerOfCubes = getPowerOfCubesInGame(gameInfo[1]);
    sumOfMultipliedCubesPerGame += powerOfCubes;
  }

  return sumOfMultipliedCubesPerGame;
};

console.log(solutions1(input)); // Solution 1: 2265
console.log(solution22(input)); // Solution 2: 64097
