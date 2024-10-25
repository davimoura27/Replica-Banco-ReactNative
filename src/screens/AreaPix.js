import { useRoute } from "@react-navigation/native";
import { useState } from "react";
import { View,Text,StatusBar, StyleSheet, TextInput, TouchableOpacity } from "react-native";

export default function AreaPix(){
  const route = useRoute();
  const {conta, setConta} = route.params;
  const[valorPix,SetvalorPix] = useState('')

  const handlePixButton = () => {
    const valor = parseFloat(valorPix)
    if (isNaN(valor) || valor<=0) {
        alert('Por favor!insira um valor')
        return
    }
    if (valor > conta) {
      alert('Saldo insuficiente para realizar transferencia')
       return  
    }
     alert('Pix realizado com sucesso!')

     const novoSaldo = conta - valor

     setConta(novoSaldo)
      
  }

  return(
    <View style={styles.body}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
        <Text style={styles.font}>Area Pix</Text>
        <Text style={styles.font}>Qual é o valor da transferência?</Text>
        <Text style={styles.font2}>Saldo disponivel de R$ {conta}</Text>

       <View style={styles.containerInput}>
           <TextInput
           style={styles.input}
           placeholder="R$ 0,00"
           keyboardType="numeric"
           value={valorPix}
           onChangeText={SetvalorPix}
           
           >
           </TextInput>

       </View>
           <TouchableOpacity 
            style={styles.pixButton}
             onPress={handlePixButton}
           >
            <Text style ={styles.font2}>Enviar</Text>

           </TouchableOpacity>

    </View>
  )

}

const styles = StyleSheet.create({

   body:{
    backgroundColor:'#000',
    height:"100%",
    gap:20
   },
   font:{
    color:'white',
    fontSize:35
   },
   font2:{
    color:'white',
    fontSize:20
   },
   containerInput:{
    width: '100%',
    backgroundColor: '#ffffff33',
    padding: 15,
    borderRadius: 10,
   },
   input:{
     fontSize: 32,
    color: 'white',
  
    
    borderColor: 'white',
    paddingVertical: 10,
   },
   pixButton:{
    
    backgroundColor:'#ffffff33',
    padding:10,
    width:100,
    alignItems:'center',
    justifyContent:"center",
    borderRadius:10
   }


})