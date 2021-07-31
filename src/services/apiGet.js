import React from 'react';
import axios from 'axios';


export default class apiGet extends React.Component {

  constructor(props) {
    super(props);
    this.state = {persons: []};
  }


  async getAtividades(diaSemana){
    let diaSem = ''+diaSemana;
    let paramsJson =  {ds: diaSem};
    let ativ = [];

    try {
      let res = await axios.get('http://appx.itmwin.com/default.asp', {params: paramsJson });
      console.log('eee '+ JSON.stringify(res));
      ativ = res.data;
    }catch (error) {
      console.error('erro API: '+error)
    }


    // try {
    //   axios.get('http://appx.itmwin.com/default.asp', {params: paramsJson })
    //     .then(res => {
    //       ativ = res.data;
    //       console.log('eee '+ JSON.stringify(ativ));
    //     })
    // } catch (error) {
    //   console.error('erro API: '+error)
    // }

    return ativ;

  }



}