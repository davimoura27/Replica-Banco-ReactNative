import MenuIcon from 'react-native-vector-icons/Ionicons'
import Conta from 'react-native-vector-icons/MaterialIcons'
import Barra from 'react-native-vector-icons/AntDesign'
import Emprestimo from 'react-native-vector-icons/Entypo'
import Transferir from 'react-native-vector-icons/FontAwesome6'


import { View, StyleSheet, Text, StatusBar, TouchableOpacity } from "react-native";
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native'

export default function Home() {
  const navigation = useNavigation()
  const [conta, setConta] = useState(10)



  return (

    <View style={styles.body}>
      <StatusBar barStyle="light-content" backgroundColor="#8A05BE" />
      <View style={styles.container}>
        <View style={styles.menu}>
          <MenuIcon style={styles.icon} name="menu-sharp" size={35} color={"white"} />

        </View>

        <View style={styles.header}>
          <MenuIcon name="eye" size={35} color={"white"} />
          <Barra name="questioncircleo" size={35} color={"white"} />
        </View>

      </View>
        <View style ={styles.conta}>
      <Text style={styles.font} >Conta</Text>    
      <Text style ={styles.font}>R$ {conta}</Text>

        </View>

        <View style={styles.containerPagamentos}>

          <View style={styles.alignPagamento}>

            <TouchableOpacity style={styles.alignPagamento}
              onPress ={() => navigation.navigate('AreaPix',{conta, setConta})}
            >
          <Conta style={styles.icon2} name='pix' size={30} color={'white'}/>
          <Text style = {styles.font2}>Area Pix</Text>

            </TouchableOpacity>
          </View>

          <View style={styles.alignPagamento}>
          <Barra style={styles.icon2} name='barcode' size={30} color={'white'}/>
          <Text style = {styles.font2}>Pagar</Text>
          </View>
          
          <View style={styles.alignPagamento}>
          <Emprestimo style={styles.icon2} name='credit' size={30} color={'white'}/>
          <Text style = {styles.font2}>Emprestimo</Text>
          </View>
          
          <View style={styles.alignPagamento}>
          <Transferir style={styles.icon2} name='money-bill-transfer' size={30} color={'white'}/>
          <Text style = {styles.font2}>Transferir</Text>
          </View>

          <View style={styles.alignPagamento}>
          <Transferir style={styles.icon2} name='mobile' size={30} color={'white'}/>
          <Text style = {styles.font2}>Recarga</Text>
          </View>
        </View>
        <View style={styles.alignCartão}>
          <Transferir name='credit-card' size={30} color={'white'}/>
          <Text style = {styles.font2}>Meus cartões</Text>
          </View>
          <View style ={styles.pixCredito}>
            <Text style ={styles.font2}>Pix no Crédito: faça pagamentos sem usar o saldo da conta</Text>
          </View>
          <View style={styles.line}/>
              <View style ={styles.pagamento}>
              <Text style={styles.font3}>Próximo pagamento</Text>

              </View>

              <View style={styles.line2}/>

            
              <View style ={styles.pagamento}>
              <Text style={styles.font3}>Cartão de crédito</Text>
              <Text style={styles.font}>Fatura atual</Text>
              <Text style={styles.font}>R$ 0</Text>

              </View>

              <View style={styles.line2}/>

              <View style ={styles.pagamento}>
              <Text style={styles.font3}>Emprestimo</Text>
              <Text style={styles.font}>Valor disponivel de até</Text>
              <Text style={styles.font}>R$ 0</Text>

              </View>

              <View style={styles.line2}/>



    </View>

  )

}

const styles = StyleSheet.create({
  body:{
backgroundColor:'#000000',
height:'100%'
  },
  container: {
    flexDirection: 'row',
    backgroundColor: '#8A05BE',
    padding: 10,
   
    
  },
  menu:{
    marginRight:280
  },
  
  header: {
    flexDirection:'row',
    gap:15
  },
  icon:{
    padding:10,
     backgroundColor:'#6668',
     width:55,
     height:55,
     borderRadius:25,
     marginTop:-5
  },
  conta:{
    margin:10

  },
 font:{
  fontSize:25,
  color:'#FFFFFF'
 },
 icon2:{
  padding:22,
  backgroundColor:'#6668',
  width:75,
  height:75,
  borderRadius:40,
  marginLeft:12,
 },
 containerPagamentos:{
   flexDirection:'row',
   marginTop:20

 },
 font2:{
   fontSize:15,
   color:'white'
 },
 font3:{
fontSize:25,
   color:'white'
 },
 alignPagamento:{
   flexDirection:'column',
   alignItems:'center',
   justifyContent:'center',
   
   
 },
 alignCartão:{
  flexDirection:'row',
  alignItems:'center',
  
  backgroundColor:'#6668',
  height:55,
  width:'93%',
  borderRadius:15,
  paddingLeft:15,
  gap:20,
  marginTop:25
 },
 pixCredito:{
  backgroundColor:'#5D38B3',
  height:85,
  width:'93%',
  borderRadius:20,
  alignItems:'center',
  justifyContent:'center',
  marginTop:25
 },
 line:{
  backgroundColor:'white',
  height:1,
  marginTop:25,
 },
 line2:{
  backgroundColor:'white',
  height:1,
  
 },
 pagamento:{
 
  justifyContent:'center',
  margin:35
 },



})
