import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet,Dimensions, Text, View } from 'react-native';
import Home from './app/Home';
import { BottomNavigation } from 'react-native-paper';
import Grocery from './app/Grocery';

export default function App() {
  const {width,height} = Dimensions.get("screen");
  console.log(width,height);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Maincontainer}  >
     {/* <Home/> */}
     <Grocery/>
     </View>
     {/* <View>
     <BottomNavigation/>
     </View> */}
   
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  Maincontainer:{
    padding:20
  }
});
