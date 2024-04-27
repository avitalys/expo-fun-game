import { StyleSheet, View } from 'react-native';

import ImageViewer from '../components/ImageViewer';
import Button from '../components/Button';
import Title from '../components/Title';

const PlaceholderImage = require('../../assets/images/background-seaview.png');

export default function () {
  return (
    <>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Title text={"Welcome to FunGame"}/>
        <Button label="Login" theme="primary" iconName="user"/>
        <Button label="Sign Up" theme="secondary" iconName="user-plus"/>
        <Button label="Show me the demo" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 2,
    paddingTop: 46,
  },
  footerContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

