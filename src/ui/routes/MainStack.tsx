import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import ProductsScreen from '../screens/FinancialProductsScreen';
import ProductDetailScreen from '../screens/FinancialProductDetailScreen';
import AddEditProductScreen from '../screens/AddEditFinancialProductScreen';
import { IProduct } from '../../data/entities/ProductModel';

const Stack = createNativeStackNavigator();

export type MainStackParamList = {
  Products: undefined;
  ProductDetail: { id: string };
  AddEditProduct: { product?: IProduct };
}

function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, animation: 'slide_from_right' }}>
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
      <Stack.Screen name="AddEditProduct" component={AddEditProductScreen} />
    </Stack.Navigator>
  );
}

export default MainStack;