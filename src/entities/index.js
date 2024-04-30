import Matter from 'matter-js';
import Bird from '../components/Bird';
import Floor from '../components/Floor';
import { Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default (restart) => {
  let engine = Matter.Engine.create({ enableSleeping: false });

  let world = engine.world;

  world.gravity.y = 0.3;

  return {
    physics: { engine, world },
    Bird: Bird(world, 'green', { x: 50, y: 200 }, { height: 40, width: 40 }),
    Floor: Floor(
      world,
      'green',
      { x: windowWidth / 2, y: windowHeight },
      { height: 100, width: 2 * windowWidth },
    ),
  };
};
