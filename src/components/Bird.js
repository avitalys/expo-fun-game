import React, { useRef } from 'react';
import Matter from 'matter-js';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';

const Bird = (props) => {
  const widthBody = props.body.bounds.max.x - props.body.bounds.min.x;
  const heightBody = props.body.bounds.max.y - props.body.bounds.min.y;

  const xBody = props.body.position.x - widthBody / 2;
  const yBody = props.body.position.y - heightBody / 2;

  //const color = props.color;
  const animation = useRef(null);

  return (
    <View
      style={{
        width: widthBody,
        height: heightBody,
        position: 'absolute',
        left: xBody,
        top: yBody,
      }}
    >
      <LottieView autoPlay loop ref={animation} source={require('../../assets/lottie/small-bird.json')} />
    </View>
  );
};

export default (world, color, pos, size) => {
  const initialBird = Matter.Bodies.rectangle(pos.x, pos.y, size.width, size.height, { label: 'Bird' });

  Matter.World.add(world, initialBird);

  return {
    body: initialBird,
    color,
    pos,
    renderer: <Bird />,
  };
};
