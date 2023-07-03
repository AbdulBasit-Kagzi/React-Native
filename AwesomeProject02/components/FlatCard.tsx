import {ScrollView, StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';

export default function FlatCard({navigation}) {
  const boxArr = [
    {id: 1, text: 'Red'},
    {id: 2, text: 'Green'},
    {id: 3, text: 'Blue'},
    {id: 3, text: 'Blue'},
  ];
  return (
    <ScrollView horizontal={true}>
      <View>
        <Text>FlatCard</Text>
        <View>
          <View style={styles.container}>
            {boxArr.map(data => {
              return (
                <>
                  <Text
                    style={[
                      styles.box,
                      data.id === 1
                        ? styles.boxRed
                        : data.id === 2
                        ? styles.boxGreen
                        : styles.boxBlue,
                    ]}>
                    {data.text}
                  </Text>
                </>
              );
            })}
          </View>
        </View>
        <Button
          title="Go to Fancy Card"
          onPress={() => navigation.navigate('FancyCard')}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 5,
  },
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    width: 100,
    height: 100,
    borderRadius: 6,
  },
  boxRed: {
    backgroundColor: 'red',
  },
  boxGreen: {
    backgroundColor: 'green',
  },
  boxBlue: {
    backgroundColor: 'blue',
  },
});
