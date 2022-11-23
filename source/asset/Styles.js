import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import Colors from './Colors';
import Font from './Font'

const Styles = StyleSheet.create({
    primaryButton:{
        flex:1,
        //width:Dimensions.get('screen').width/1.2,
        height:50,
        margin:10,
        backgroundColor:Colors.buttonPrimary,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:20,
    },
    primaryButtonText:{
        fontSize: Font.HEADER,
        color: Colors.fontDark,
        fontWeight:"bold",
    },
    textInputStyle:{
        width:Dimensions.get('screen').width-30,
        height:50,
        borderRadius:20,
        borderColor:Colors.backgroundPrimary,
        borderWidth:1,
        justifyContent:"center",
        alignItems:"center",
        color:Colors.fontDark,
        backgroundColor:Colors.inputBackground,
    },
    textLabel:{
        color:Colors.fontDark,
        fontSize:Font.NORMAL_FONT_SIZE,
        margin:2,
        justifyContent:"flex-start",
        alignSelf:"flex-start",
        marginTop:10,
        marginLeft:"3%"
    },
    container:{
        flex:1,
        margin:10,
        justifyContent:"center",
    },
    modalContainer:{
        borderRadius:20,
        justifyContent:"center",
        alignSelf:"center",
        alignItems:"center",
        backgroundColor:Colors.backgroundPrimary,
        flex:1
    },
    modalViewContainer:{
        flex:1,
        margin:"10%",
        marginTop:"30%",
        marginBottom:"30%",
        borderRadius:20,
        justifyContent:"center",
        alignSelf:"center",
        alignItems:"center",
        flex:1,
        backgroundColor:Colors.backgroundPrimary,
        padding:50,
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:2
        },
        shadowOpacity:0.25,
        shadowRadius:4,
        elevation:5,
        height:"40%"
    },
    imageIcon:{
        margin:5,
        height:150,
        width:300,
        borderWidth:0.5,
        borderColor:Colors.fontDark
    },
    //View Product
    viewProduct:{
        flex:1,
        flexDirection:'row',
        margin:10,
        padding:20,
        borderWidth:1,
        borderRadius:10,
        borderColor:Colors.primaryColour,
        marginRight:"10%",
        backgroundColor:Colors.fontLight
    },
    viewProductImage :{
        width:100,
        height:100,
        margin:5
    },
    productLebel:{
        margin:5,
        padding:10,
        justifyContent:"flex-start",
        alignItems:"flex-start",
    },
    productDetails:{
        fontSize:14,
        color:Colors.fontDark,
        margin:3
    }


}) 
export default Styles;

