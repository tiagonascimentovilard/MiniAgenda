import React from 'react';
import { View, Text, StyleSheet , FlatList } from 'react-native'
import axios from 'axios';
import Colors from '../styles/Colors'
import {DiaSemanaLista} from '../components/DiaSemana'
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default class Agenda extends React.Component {

  constructor(props) {
    super(props);
    this.state = {persons: []};
  }


  componentDidMount() {
    try {
      let diaSem = 'all';
      let paramsJson =  {ds: diaSem};
      axios.get('http://appx.itmwin.com/default.asp', {params: paramsJson })
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
        console.log('all'+JSON.stringify(this.state.persons));
      })
    } catch (error) {
      console.error('erro API: '+error)
    }
  }

  render() {
    
    const diaSemana = ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado',''];

    return (
      <View style={styles.container}>   

      <View style={styles.logo}>
            <Icon name="puzzle-piece" size={30} color={Colors.blue} />
      </View>

        <Text style={styles.title}>Semana</Text>
        <FlatList data={this.state.persons} renderItem={({item}) => (
          <View key={item.id}  style={styles.containerItem}>
            <Text style={styles.dia}>{diaSemana[item.dia]}</Text>
            <View style={styles.containerNome}>
              <View style={styles.localAtividado}>
                <Text style={styles.nmlocal}>{item.nomelocal}</Text>
                <Text style={styles.atividade}>- {item.nome}</Text>
              </View>
              <Text style={styles.agendado}>{item.agendado}</Text>
            </View>
            <View style={styles.actionContainer}>
              <Icon name="clock-o" size={22}  style={styles.relogio}/>
              <Text style={styles.horario}>{item.inicio}  - {item.fim}</Text>
            </View>
          </View>
        )}/>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  containerItem: {
    backgroundColor: Colors.clouds,
     margin: 5,
     borderRadius: 10,
     borderColor: 'rgba(255,255,255,0.1)',
     borderStyle: 'solid',
     //borderWidth: 2,
     padding: 12,
  },
  logo: {
    marginTop: 10,
    marginLeft: 10,
    shadowColor: Colors.black,
    shadowOffset:{
    width: 0,
    height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    flexDirection: 'row',
  },
  title:{
      fontSize:20, 
      marginBottom:15,
      marginTop: -27,
      color: 'rgba(0,0,0,0.5)',
      alignSelf: 'center',
  },
  dia:{
    fontSize:12, 
    marginTop: -3,
    color: Colors.concreto,
  },
  relogio:{
    marginRight: 8,
    color: 'rgba(0,0,0,0.1)',
  },
  horario:{
    fontSize: 16,
    color: Colors.concreto,
  },
  actionContainer:{
      flexDirection: 'row',
      alignSelf: 'flex-end',
      textAlignVertical: 'top',
      paddingTop: 1,
  },
  containerNome: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
 },
  atividade:{
    fontSize: 18,
    marginLeft: 10,
    letterSpacing: 1,
    color: Colors.blue,
    marginTop: -1,
  },
  nmlocal:{
    fontSize: 18,
    letterSpacing: 1,
    fontWeight: 'bold',
    color: Colors.lightBlue,
    marginTop: -1,
  },
  actionButtonIcon:{
      color: Colors.white,
      marginTop: 3,
      marginRight: 2,
  },
  actionButtonText:{
      fontSize: 12,
      color: Colors.white,
  },
  container: {
    backgroundColor: Colors.white,
  },
  agendado:{
      marginTop: 1,
      color: Colors.red,
  },
  localAtividado:{
    flexDirection: 'row',
  },


});