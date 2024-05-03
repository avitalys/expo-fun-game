import Matter from 'matter-js';
import Bird from '../components/Bird';
import Floor from '../components/Floor';
import { Dimensions } from 'react-native';
import Obstacle from '../components/Obstacle';
import { getPipeSizePosPair } from '../utils/random';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default (restart) => {
  let engine = Matter.Engine.create({ enableSleeping: false });

  let world = engine.world;

  world.gravity.y = 0.7;

  const PipePosSize1 = getPipeSizePosPair();
  const PipePosSize2 = getPipeSizePosPair(windowWidth * 0.9);

  return {
    physics: { engine, world },
    Bird: Bird(world, 'green', { x: 50, y: 200 }, { height: 40, width: 40 }),
    ObstacleTop1: Obstacle(world, 'ObstacleTop1', 'red', PipePosSize1.pipeTop.pos, PipePosSize1.pipeTop.size),
    ObstacleBottom1: Obstacle(
      world,
      'ObstacleBottom1',
      'blue',
      PipePosSize1.pipeBottom.pos,
      PipePosSize1.pipeBottom.size,
    ),
    ObstacleTop2: Obstacle(world, 'ObstacleTop2', 'red', PipePosSize2.pipeTop.pos, PipePosSize2.pipeTop.size),
    ObstacleBottom2: Obstacle(
      world,
      'ObstacleBottom2',
      'blue',
      PipePosSize2.pipeBottom.pos,
      PipePosSize2.pipeBottom.size,
    ),
    Floor: Floor(world, 'green', { x: windowWidth / 2, y: windowHeight }, { height: 100, width: 2 * windowWidth }),
  };
};
