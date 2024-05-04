import Matter from 'matter-js';
import Bird from '../components/Bird';
import Floor from '../components/Floor';
import Obstacle from '../components/Obstacle';
import { getPipeSizePosPair } from '../utils/random';
import Consts from '../consts';

export default (restart) => {
  let engine = Matter.Engine.create({ enableSleeping: false });

  let world = engine.world;

  world.gravity.y = 0.7;

  const PipePosSize1 = getPipeSizePosPair();
  const PipePosSize2 = getPipeSizePosPair(Consts.SCREEN_WIDTH * 0.9);

  return {
    physics: { engine, world },
    Bird: Bird(world, Consts.BIRD_COLOR, { x: 50, y: 200 }, { height: Consts.BIRD_HEIGHT, width: Consts.BIRD_WIDTH }),
    ObstacleTop1: Obstacle(
      world,
      'ObstacleTop1',
      Consts.OBSTACLE_TOP_COLOR,
      PipePosSize1.pipeTop.pos,
      PipePosSize1.pipeTop.size,
    ),
    ObstacleBottom1: Obstacle(
      world,
      'ObstacleBottom1',
      Consts.OBSTACLE_BOTTOM_COLOR,
      PipePosSize1.pipeBottom.pos,
      PipePosSize1.pipeBottom.size,
    ),
    ObstacleTop2: Obstacle(
      world,
      'ObstacleTop2',
      Consts.OBSTACLE_TOP_COLOR,
      PipePosSize2.pipeTop.pos,
      PipePosSize2.pipeTop.size,
    ),
    ObstacleBottom2: Obstacle(
      world,
      'ObstacleBottom2',
      Consts.OBSTACLE_BOTTOM_COLOR,
      PipePosSize2.pipeBottom.pos,
      PipePosSize2.pipeBottom.size,
    ),
    Floor: Floor(
      world,
      Consts.FLOOR_COLOR,
      { x: Consts.SCREEN_WIDTH / 2, y: Consts.SCREEN_HEIGHT },
      { height: 100, width: 2 * Consts.SCREEN_WIDTH },
    ),
  };
};
