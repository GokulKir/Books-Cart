import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialIcons';
function ShoppingCartIcon(params) {
    const navigation = useNavigation()
    const CartItems = useSelector(state => state)
    return(
        <TouchableOpacity
        onPress ={()=> navigation.navigate('Cart')}
        style={styles.button}>
<View style={styles.itemCountContainer}>
    <Text  style={styles.itemCountText}>{CartItems.length}</Text>
  
    </View>
    <Icon style={styles.cart} size={24} name="shopping-cart"/>
        </TouchableOpacity>
    )
    
}
const styles = StyleSheet.create({
    button: {
      marginRight: 10
    },
    itemCountContainer: {
      position: 'absolute',
      height: 30,
      width: 30,
      borderRadius: 15,
      backgroundColor: 'red',
      right: 22,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 2000,
      marginRight:0,
    
    },
    itemCountText: {
      color: 'white',
      fontWeight: 'bold'
    },
    cart:{
       
    }
  })
  
  export default ShoppingCartIcon;