import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import Dates from './components/CalcDates'

import Swiper from 'react-native-swiper'

export default class App extends React.Component {

  constructor(props) {
      super(props);
      this.state = {bornYear: 1995, text: '1995'};
  }

  handleSubmit = (data) => {
    this.setState({
      bornYear: +data
    }); 
  }

  render() {
      return (
          <Swiper style={styles.wrapper} showsButtons={false} showsPagination={false} loop={false}>
              <View style={styles.homescreen}>
                  <TextInput
                      style={styles.input}
                      maxLength={4}
                      keyboardType={"number-pad"}
                      onSubmitEditing={() => this.handleSubmit(this.state.text)}
                      onChangeText={(text) => this.setState({text: text})}
                      value={this.state.text}
                  />
              </View>
              <View style={styles.datescreen}>
                  <Dates born={this.state.bornYear}/>
              </View>
          </Swiper>
      )
  }
}


const styles = StyleSheet.create({
    wrapper: {},
    homescreen: {
        flex: 1,
        color: '#636e72',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    datescreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    input: {
        color: '#636e72',
        height: 64, 
        width: 150,
        borderBottomWidth: 5,
        borderBottomColor: '#636e72',
        fontSize: 64,
        textAlign: 'center'
    }
})