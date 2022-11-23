import { View, Text, TouchableOpacity, Image, TextInput, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import Styles from '../asset/Styles'
import Colors from '../asset/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';


const ProductRating = () => {
  const [ratingStar, setRatingStar] = useState(3.5)
  return (
    <SafeAreaView style={[Styles.container, { alignSelf: "center", justifyContent: "center", alignContent: "center", alignItems: "center" }]}>
      <ScrollView>
        <View style={[Styles.viewProduct, { marginRight: 10 }]}>
          <View style={[Styles.productLebel, { width: "80%" }]}>
            <Text style={[Styles.productDetails, { fontSize: 18, fontWeight: "bold" }]}>
              {'Mobile No'}
            </Text>
            <TextInput style={[Styles.textInputStyle, { width: "95%" }]} keyboardType={'phone-pad'} />

            <Text style={[Styles.productDetails, { fontSize: 16, fontWeight: "bold" }]}>
              {'Rating'}
            </Text>
            <TextInput style={[Styles.textInputStyle, { width: "95%" }]} keyboardType={'phone-pad'}/>
           

            <TouchableOpacity onPress={() => ToastAndroid.show("Submitted",ToastAndroid.LONG)} style={[Styles.primaryButton, { width: "70%", backgroundColor: Colors.primaryColour, height: 40 }]}>
              <Text style={[Styles.primaryButtonText, { fontSize: 14 }]}>RATING</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

    </SafeAreaView>
  )
}

export default ProductRating