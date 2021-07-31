import React from 'react'
import { View, Text,StyleSheet} from 'react-native'
import Colors from '../../styles/Colors'

const DiaSemana = ({dia}) => {
    const dSemana = ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'];
    return (
        <View>
            <Text style={styles.title}>
                {dSemana[parseInt(dia)]}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
   title:{
       fontSize:20, 
       marginBottom:10,
       marginTop: 20,
       color: 'rgba(0,0,0,0.5)',
       alignSelf: 'center',
   },
   dia:{
     fontSize:12, 
     marginTop: -3,
   },
});
export default DiaSemana;