import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useRoute } from '@react-navigation/native'

import Colors from './asset/Colors'
import Styles from './asset/Styles'

const Home = ({navigation}) => {

    const route = useRoute()
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('AddProduct')
        }, 3000)
    })
    return (
        <View style={Styles.container}>
            <ActivityIndicator size={'large'} color={Colors.orange} />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})