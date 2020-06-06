/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import MapView,{Marker} from 'react-native-maps';

// const App= () => {
//   return (
//     <>
//     <MapView> 
//       <View>
 
//       </View>
//   </MapView>
      
//     </>
//   );
// };


// import MapView from "react-native-maps";

const App = () => {

  const [region,setRegion]=useState({
    latitude: 51.5079145,
    longitude: -0.0899163,
    latitudeDelta: 0.09,
    longitudeDelta: 0.09

  })
  return (
    <MapView
      style={{ flex: 1
       }}
       region = {region}
       onRegionChangeComplete={region=>setRegion(region)}
       
      // initialRegion={{
      //   latitude: 37.78825,
      //   longitude: -122.4324,
      //   latitudeDelta: 0.05,
      //   longitudeDelta: 0.05
      // }}
    >
       <Marker coordinate={{ latitude: 51.5078788, longitude: -0.0877321 }} />
    </MapView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
