import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import ProductForm from './ProductForm';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  
  const saveProduct = newProduct => {
    // Handle saving the product, either by adding to the list or updating an existing one
    // For simplicity, we're just adding it to the list here
    setProducts([...products, newProduct]);
  };

  return (
    <ScrollView>
      <Text style={styles.header}>Product Sales Page</Text>
      
      <ProductForm onSaveProduct={saveProduct} />
      
      <Text style={styles.subheader}>Product List</Text>
      <FlatList
        data={products}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            <Text>Name: {item.name}</Text>
            <Text>Price: ${item.price.toFixed(2)}</Text>
          </View>
        )}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    textAlign: 'center',
    margin: 20,
  },
  subheader: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 20,
  },
  productItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    margin: 5,
  },
});

export default ProductPage;
