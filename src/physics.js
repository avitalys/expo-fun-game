import Matter from 'matter-js';
import { getPipeSizePosPair, windowWidth } from './utils/random';

const Physics = (entities, { touches, time, dispatch }) => {
  let engine = entities.physics.engine;

  touches
    .filter((t) => t.type === 'press')
    .forEach((t) => {
      Matter.Body.setVelocity(entities.Bird.body, { x: 0, y: -8 });
    });

  Matter.Engine.update(engine, time.delta);

  for (let index = 1; index <= 2; index++) {
    if (entities[`ObstacleTop${index}`].body.bounds.max.x < 0) {
      const newPipeSizePos = getPipeSizePosPair(windowWidth * 0.9);

      Matter.Body.setPosition(entities[`ObstacleTop${index}`].body, newPipeSizePos.pipeTop.pos);
      Matter.Body.setPosition(entities[`ObstacleBottom${index}`].body, newPipeSizePos.pipeBottom.pos);
    }

    Matter.Body.translate(entities[`ObstacleTop${index}`].body, {
      x: -2,
      y: 0,
    });
    Matter.Body.translate(entities[`ObstacleBottom${index}`].body, {
      x: -2,
      y: 0,
    });
  }

  return entities;
};

export default Physics;
