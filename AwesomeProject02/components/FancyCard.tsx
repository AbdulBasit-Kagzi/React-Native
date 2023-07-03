import {Image, StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';

export default function FancyCard({navigation}) {
  return (
    <View>
      <Text style={styles.heading}>FancyCard</Text>
      <View style={styles.card}>
        <View style={{margin: 8}}>
          <Image
            source={{
              uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
            }}
            style={styles.imageStyle}
          />
        </View>
        <View style={{margin: 8}}>
          <Text style={{color: 'black'}}>Name : Plus Sign</Text>
          <Text style={{color: 'black'}}>Type : Mathematical</Text>
          <Text style={{color: 'black'}}>UseCase:To add numbers</Text>
        </View>
      </View>
      <Button
        title="Go to Fancy Card Again"
        onPress={() => navigation.push('FancyCard')}
      />
      <Button title="Go To Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    margin: 10,
    fontSize: 24,
    fontWeight: '700',
  },
  card: {
    width: 350,
    marginLeft: 10,
    backgroundColor: 'white',
    flex: 1,
    flexGrow: 1,
  },
  imageStyle: {
    width: 180,
    height: 180,
  },
});
