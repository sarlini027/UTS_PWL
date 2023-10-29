import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProductDetail = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./product_image.jpg')} // Ganti dengan path gambar produk Anda
        style={styles.productImage}
      />
      <Text style={styles.productName}>Nama Produk</Text>
      <Text style={styles.productPrice}>Harga: $99.99</Text>
      <Text style={styles.productDescription}>
        Deskripsi produk yang panjang dan menjelaskan fitur-fitur produk.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  productImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 18,
  },
  productDescription: {
    fontSize: 16,
    textAlign: 'center',
    margin: 20,
  },
});

export default ProductDetail;
