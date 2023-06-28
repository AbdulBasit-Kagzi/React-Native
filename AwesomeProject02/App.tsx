/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, View} from 'react-native';
import FlatCard from './components/FlatCard';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <View>
        <FlatCard />
      </View>
    </SafeAreaView>
  );
}

export default App;
