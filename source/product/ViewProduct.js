
import React, { useState, useEffect } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import { useRoute } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Styles from '../asset/Styles'
import Colors from '../asset/Colors';


const ViewProduct = ({ navigation }) => {

  const [dataArray, setDataArray] = useState('')

 
  onRatingFunction = () =>{
    navigation.navigate('ProductRating')
  }

  useEffect(() => {

    let dataSource = AsyncStorage.getItem('data')
    console.log(dataArray)
    setDataArray(dataSource)
    console.log("data source", dataArray)

  }, [])

  fetchProductData = () => {
    const stringify = JSON.stringify(dataArray);
    const dataParse = JSON.parse(stringify);
    console.log("data source array", dataParse);
    useEffect
  }


  deleteFunction = () => {
    AsyncStorage.removeItem('data')
    console.log("Done")
    useEffect
  }

  const route = useRoute()
  const passToAddProduct = () => {
    navigation.navigate('AddProduct')
  }

  return (
    <SafeAreaView style={[Styles.container, { alignSelf: "center", justifyContent: "center", alignContent: "center", alignItems: "center" }]}>

      <ScrollView>
        <View style={Styles.container}>
          <TouchableOpacity onPress={() => fetchProductData()}>
            <Text style={{ fontSize: 22, fontWeight: "bold", color: Colors.fontDark }}>PRODUCT DETAILS</Text>
          </TouchableOpacity>
          {/** 
          <TouchableOpacity onPress={() => deleteFunction()}>
            <Text>Delete all</Text>
          </TouchableOpacity> */}
        </View>
        <TouchableOpacity>
          <View style={Styles.viewProduct}>
            <Image style={Styles.viewProductImage} />
            <View style={Styles.productLebel}>
              <Text style={[Styles.productDetails, { fontSize: 18, fontWeight: "bold" }]}>
                {'Samsung S45 Ultra pro'}
              </Text>
              <Text style={[Styles.productDetails, { fontSize: 16, fontWeight: "bold" }]}>
                ${'2899'}
              </Text>
              <Text style={[Styles.productDetails, { width: 200 }]} numberOfLines={3}>
                {'Affortable price and best in the market at this price range just go for it'}
              </Text>
              <Text style={[Styles.productDetails, { fontSize: 16, fontWeight: "bold" }]}>
                Rating - {'3.8'}
              </Text>
              <TouchableOpacity onPress={() => onRatingFunction()} style={[Styles.primaryButton, { width: "40%", backgroundColor: Colors.primaryColour,height:30,alignSelf:"flex-end" }]}>
                <Text style={[Styles.primaryButtonText,{fontSize:14}]}>RATING</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default ViewProduct;
