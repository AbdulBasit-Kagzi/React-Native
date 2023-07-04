/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Card} from '@rneui/themed';
import axios from 'axios';

import {Product} from '../types/product.types';

interface productCard {
  navigation: any;
}

export default function UserCard({navigation}: productCard) {
  const [products, setproducts] = useState<Product[]>([]);

  useEffect(() => {
    (async function () {
      let products = await axios.get('https://dummyjson.com/products');
      setproducts(products.data.products);
    })();
  }, []);
  const colorScheme = useColorScheme();
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Users</Text>
      <Card>
        <Card.Title>CARD WITH DIVIDER</Card.Title>
        <Text style={{color: 'red'}}>useColorScheme: {colorScheme}</Text>
        <Card.Divider />
        <ScrollView>
          {products.length > 0 ? (
            products.map((u: Product, i: number) => {
              return (
                <View key={i} style={styles.user}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('Product', {productId: u.id})
                    }>
                    <Card>
                      <View style={styles.imageView}>
                        <Image
                          source={{uri: u.images[0]}}
                          style={{
                            width: '100%',
                            height: 100,
                            objectFit: 'contain',
                          }}
                        />
                      </View>
                      <Text style={styles.text}>Id:{u.id}</Text>
                      <Text style={styles.text}>Title:{u.title}</Text>
                      <Text style={styles.text}>Brand:{u.brand}</Text>
                      <Text style={styles.text}>Gender:{u.category}</Text>
                      <Text style={styles.text}>Price:${u.price}</Text>
                    </Card>
                  </TouchableOpacity>
                </View>
              );
            })
          ) : (
            <Text style={styles.errorText}>No users</Text>
          )}
        </ScrollView>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  imageView: {
    alignItems: 'center',
  },
  card: {
    height: 100,
  },
  heading: {
    color: '#343434',
    fontWeight: '500',
    fontSize: 22,
  },
  fonts: {
    marginBottom: 8,
  },
  user: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  text: {
    fontSize: 16,
    marginTop: 5,
    color: 'red',
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    fontWeight: '500',
  },
});
