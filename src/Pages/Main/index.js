import React,{useState} from 'react';
import { Button, StyleSheet, View, TouchableOpacity ,Text} from 'react-native';
import Agenda from '../../services/api'

import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Colors from '../../styles/Colors'

const Main = ({navigation}) => {

  const [atividade, setAtividade] = useState([]);

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Agenda</Text>
      </View>
      <View style={styles.logo}>
            <Icon name="puzzle-piece" size={30} color={Colors.logo} />
      </View>
      <Agenda/>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Todos')}>
            <Icon name="list" size={20} color={Colors.white} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: Colors.white,
    },
     
  logo: {
    //...StyleSheet.absoluteFill,
    marginTop: -43,
    marginLeft: 10,
    flexDirection: 'row',
  },
  title:{
    //position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center', 
    width: '100%',
    height: 50,
    backgroundColor: Colors.blue,
  },  
  titleText:{
    fontSize:25, 
    marginBottom:5,
    color: 'rgba(255,255,255,0.9)',
    fontWeight: 'bold',
    alignSelf: 'center',
    letterSpacing: 1,
    justifyContent: 'center', 
  },
    button: {
      backgroundColor: Colors.blue,
      borderColor: 'rgba(255,255,255,0.1)',
      borderStyle: 'solid',
      borderWidth: 1,
      width: 50,
      height: 50,
      borderRadius: 150,
      color: Colors.white,
      alignItems: 'center',
      alignSelf: 'flex-end',
      justifyContent: 'center',
      marginTop: 25,
      marginRight: 10,
      shadowColor: Colors.black,
      shadowOffset:{
      width: 0,
      height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      elevation: 6,
  },
});

export default Main;