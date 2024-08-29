import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';
import PagerView from 'react-native-pager-view';


const imageTwo = require('./assets/sliderImages/1.png');
const imageThree = require('./assets/sliderImages/2.png');
const imageFour = require('./assets/sliderImages/3.png');

const win = Dimensions.get('window');

export default function MyPager() {
  return (
    <View style={styles.container}>
      <PagerView style={styles.container} initialPage={0}>
        <View style={styles.page} key="1">
          <Image 
            source={imageTwo} 
            style={styles.image} 
          />
          <Text>Browse</Text>
        </View>
        <View style={styles.page} key="2">
          <Image 
            source={imageThree} 
            style={styles.image} />
             <Text>Explore</Text>
        </View>
        <View style={styles.page} key="3">
          <Image 
            source={imageFour} 
            style={styles.image} 
          />
          <Text>Hello</Text>
        </View>
      </PagerView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20
  },
  image: {
     width: win.width,
     height: win.height,
    // height: Dimensions.get('window').width,
    // height: Dimensions.get('window').width,
  }
});
