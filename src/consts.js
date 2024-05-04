import { Dimensions } from 'react-native';

export default Consts = {
  SCREEN_WIDTH: Dimensions.get('screen').width,
  SCREEN_HEIGHT: Dimensions.get('screen').height,
  GAP_SIZE: 320,
  OBSTACLE_WIDTH: 100,
  BIRD_WIDTH: 40,
  BIRD_HEIGHT: 40,
  BIRD_COLOR: 'green',
  FLOOR_HEIGHT: 100,
  FLOOR_COLOR: 'green',
  OBSTACLE_TOP_COLOR: 'red',
  OBSTACLE_BOTTOM_COLOR: 'blue',
};
