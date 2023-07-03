/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FlatCard from './components/FlatCard';
import FancyCard from './components/FancyCard';
import {View, Text, Button} from 'react-native';

function Header() {
  return (
    <View>
      <Text style={{color: 'red'}}>Header</Text>
    </View>
  );
}

function App(): JSX.Element {
  const Stack = createNativeStackNavigator();
  const screenOptions = {
    headerBackTitleVisible: false, // Hide the back button
    headerTitle: () => <Header />,
    headerRight: () => (
      <Button
        title="Info"
        onPress={() => console.log('This is abdulbasit project')}
      />
    ),
  };
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="Home" component={FlatCard} />
        <Stack.Screen
          name="FancyCard"
          component={FancyCard}
          options={{
            headerBackTitleVisible: false, // Hide the back button
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    // <SafeAreaView>
    //   <ScrollView>
    //     <View>
    //       <FlatCard />
    //       <FancyCard />
    //       <FancyCard />
    //       <FancyCard />
    //       <FancyCard />
    //     </View>
    //   </ScrollView>
    // </SafeAreaView>
  );
}

export default App;
