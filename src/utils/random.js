import Consts from '../consts';

export const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const getPipeSizePosPair = (addToPosX = 0) => {
  let yPosTop = -getRandom(200, Consts.SCREEN_HEIGHT - 100);

  const pipeTop = {
    pos: { x: Consts.SCREEN_WIDTH + addToPosX, y: yPosTop },
    size: { height: Consts.SCREEN_HEIGHT * 2, width: 75 },
  };
  const pipeBottom = {
    pos: { x: Consts.SCREEN_WIDTH + addToPosX, y: Consts.SCREEN_HEIGHT * 2 + 250 + yPosTop },
    size: { height: Consts.SCREEN_HEIGHT * 2, width: 75 },
  };

  return { pipeTop, pipeBottom };
};
