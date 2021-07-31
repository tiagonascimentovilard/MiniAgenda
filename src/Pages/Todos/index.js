import React,{useState} from 'react';
import { Button, StyleSheet, View, FlatList ,Text} from 'react-native';
import AgendaSemana from '../../services/apiAll'
import Colors from '../../styles/Colors'

const Todos = ({navigation}) => {

  const [atividade, setAtividade] = useState([]);


  return (
    <View style={styles.container}>
      <AgendaSemana/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex:1,
      backgroundColor: Colors.white,
    },
    containerBlank: {
      height: 500,
   },
});

export default Todos;