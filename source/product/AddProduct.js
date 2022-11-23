
import React, { useEffect, useState } from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Modal,
  Image,
  ToastAndroid
} from 'react-native';

import { useRoute } from '@react-navigation/native'
import ImagePicker from 'react-native-image-picker'

import Styles from '../asset/Styles';
import Colors from '../asset/Colors';
import Font from '../asset/Font';
import AsyncStorage from '@react-native-async-storage/async-storage';


const AddProduct = ({ navigation }) => {
  const route = useRoute()

  const [cameraModal, setCameraModal] = useState(false);
  const [imageSource, setImageSource] = useState('')
  const [imageUri, setImageUri] = useState('')
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productRating, setProductRating] = useState(0);
  const [previousData, setPreviousData] = useState([])


  useEffect(() => {
    let dataSource = AsyncStorage.getItem('data')
    setPreviousData(dataSource)
  }, [])
  const passToProductDetails = (hi) => {
    console.log("Function called")
    navigation.navigate('ViewProduct', {
      hi: hi
    })
  }


  const openGaleryFunction = async () => {
    let options = {
      title: 'Select Image',
      customButtons: [
        {
          name: 'customOptionKey',
          title: 'Choose Photo from Custom Option',
        },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },

    };
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log(
          'User tapped custom button: ',
          response.customButton
        );
        alert(response.customButton);
      } else {
        let source = response;
        // You can also display the image using data:
        // let source = {
        //   uri: 'data:image/jpeg;base64,' + response.data
        // };
        setImageSource(source);
        setImageUri(response.uri);

      }
    });
    setCameraModal(!cameraModal)
  }

  const dataSubmitFunction = async () => {
    if (imageSource === '') {
      ToastAndroid.show('Please select an image', ToastAndroid.LONG)
    }
    else if (productName === '') {
      ToastAndroid.show('Please enter product name', ToastAndroid.LONG)
    }
    else if (productDescription === '') {
      ToastAndroid.show('Please enter product description', ToastAndroid.LONG)
    }
    else if (productPrice === '') {
      ToastAndroid.show('Please ender product price', ToastAndroid.LONG)
    }
    else {
      /* let data = new FormData();
       data.append('productName', productName);
       data.append('productDescription', productDescription);
       data.append('productPrice', productPrice);
       data.append('productRating', productRating);
       data.append('imageSource', { type: 'image/jpg', uri: imageUri, name: 'profile_image.jpg' });*/
      const dataArray = {
        'productName': productName,
        'productDescription': productDescription,
        'productPrice': productPrice,
        'productRating': productRating,
        'imageSource': imageUri
      }
      const existingProducts = await AsyncStorage.getItem('data')
      let newProduct = JSON.parse(existingProducts);
      if (!newProduct) {
        newProduct = []
      }
      newProduct.push(dataArray)
      //await AsyncStorage.setItem('data',dataArray)
      await AsyncStorage.setItem('data', JSON.stringify(newProduct))
        .then(() => {
          console.log("Saved sucessfully");
        })
        .catch(() => {
          console.log("Some error occured")
        })

      ToastAndroid.show('Product added successfully', ToastAndroid.LONG)
      useEffect

    }
  }

  return (
    <SafeAreaView style={Styles.container}>

      <ScrollView>

        <View style={Styles.container}>

          {/** 
          <View>
            <Modal
              style={Styles.modalContainer}
              animationType='slide'
              transparent={true}
              visible={cameraModal}
              onRequestClose={() => {
                setCameraModal(!cameraModal)
              }}
            >
              <View style={Styles.modalViewContainer}>
                <View >
                  <Text style={[Styles.textLabel, { fontSize: Font.MAIN_HEADER, margin: 10, fontWeight: "bold", alignSelf: "center" }]}>
                    Choose one
                  </Text>
                  <TouchableOpacity onPress={() => openCameraFunction()} style={[Styles.primaryButton, { backgroundColor: Colors.primaryColour, padding: 30, marginTop: "30%", marginBottom: '30%' }]}>
                    <Text style={Styles.primaryButtonText}>Open Camera</Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => openGaleryFunction()} style={[Styles.primaryButton, { backgroundColor: Colors.primaryColour, padding: 30, marginTop: "30%", marginBottom: '30%' }]}>
                    <Text style={Styles.primaryButtonText}>Open Galery</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </View> */}
          <Text style={[Styles.textLabel, { fontSize: 20, fontWeight: "bold", justifyContent: "center", alignItems: "center" }]}>
            Add Product Details
          </Text>

          <Text style={Styles.textLabel}>
            Product Name
          </Text>
          <TextInput style={Styles.textInputStyle}
            onChangeText={(text) => setProductName({ productName: text })} />

          <Text style={Styles.textLabel}>
            Product Description
          </Text>
          <TextInput style={Styles.textInputStyle}
            onChangeText={(text) => setProductDescription({ productDescription: text })} />

          <Text style={Styles.textLabel}>
            Product Price
          </Text>
          <TextInput style={Styles.textInputStyle}
            onChangeText={(text) => setProductPrice({ productPrice: text })} />

          <Text style={Styles.textLabel}>
            Select Image
          </Text>
          <View>
            <TouchableOpacity style={Styles.textInputStyle} onPress={() => openGaleryFunction()}>
              <Text style={Styles.primaryButtonText}>Select Image</Text>
            </TouchableOpacity>
            {imageSource == '' ? null :
              <Image
                source={{
                  uri: 'data:image/jpeg;base64,' + imageSource.data,
                }}
                style={Styles.imageIcon}
              />}
          </View>

          {/**<TouchableOpacity onPress={() => console.log(JSON.stringify(imageSource))} style={[Styles.primaryButton, { width: "40%", backgroundColor: Colors.primaryColour }]}>
            <Text style={Styles.primaryButtonText}>SUBMIT</Text>
          </TouchableOpacity> */}
          <View style={{flexDirection:"row",alignContent:"space-between",alignItems:"center"}}>
            <TouchableOpacity onPress={() => dataSubmitFunction()} style={Styles.primaryButton}>
              <Text style={Styles.primaryButtonText}>SUBMIT</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => passToProductDetails()} style={Styles.primaryButton}>
              <Text style={Styles.primaryButtonText}>View Products</Text>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

});

export default AddProduct;
