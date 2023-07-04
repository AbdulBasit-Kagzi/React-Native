/* eslint-disable prettier/prettier */
import {Text, View, StyleSheet, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Product} from '../types/product.types';

export default function IndividualProduct({route}) {
  const {productId} = route.params;
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    (async function () {
      let data = await axios(`https://dummyjson.com/products/${productId}`);
      setProduct(data.data);
    })();
  }, [productId]);
  return (
    <View style={styles.container}>
      <Image source={{uri: product?.images[0]}} style={styles.image} />
      <View style={styles.detail}>
        <Text style={styles.text}>Id:{product?.id}</Text>
        <Text style={styles.text}>Title:{product?.title}</Text>
        <Text style={styles.text}>Brand:{product?.brand}</Text>
        <Text style={styles.text}>Gender:{product?.category}</Text>
        <Text style={styles.text}>Price:${product?.price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {padding: 50, border: 2, borderColor: 'red'},
  image: {
    width: '100%',
    height: '50%',
    objectFit: 'contain',
  },
  text: {
    fontSize: 16,
    marginTop: 5,
    color: 'red',
  },
  detail: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
});
