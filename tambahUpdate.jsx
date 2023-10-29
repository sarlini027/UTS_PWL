import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const ProductForm = ({ onSaveProduct }) => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');

  const saveProduct = () => {
    const newProduct = {
      name: productName,
      price: parseFloat(productPrice),
    };
    onSaveProduct(newProduct);
    setProductName('');
    setProductPrice('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Product Name"
        value={productName}
        onChangeText={text => setProductName(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Product Price"
        value={productPrice}
        onChangeText={text => setProductPrice(text)}
        style={styles.input}
      />
      <Button title="Save Product" onPress={saveProduct} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    padding: 10,
  },
});

export default ProductForm;
