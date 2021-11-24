'use strict';

import React, { Component } from 'react';
import { Text } from 'react-native';
import { StyleSheet } from 'react-native';

import { ViroARScene, ViroText, ViroConstants, Viro360Image, ViroMaterials, ViroBox, ViroGeometry, Viro3DObject, ViroFlexView, ViroButton } from 'react-viro';

export default class HelloWorldSceneAR extends Component {

  constructor() {
    super();
    this.periodicTable = [
      {
        name: "Hydrogen",
        symbol: "H",
        atomicNumber: 1,
        color: "teal"
      },
      {
        name: "Helium",
        symbol: "He",
        atomicNumber: 2,
        color: "gold"
      },
      {
        name: "Litium",
        symbol: "Li",
        atomicNumber: 3,
        color: "pink"
      },
      {
        name: "Beryllium",
        symbol: "Be",
        atomicNumber: 4,
        color: "pink"
      },
    ]
    // Set initial state here
    this.state = {
      text: "Initializing AR...",
      modalDetail: true
    };

    // bind 'this' to functions
    // this._onInitialized = this._onInitialized.bind(this);
    // console.log('constr')
  }


  handleModalDetail = ()=>{
    this.setState({
      modalDetail:!this.state.modalDetail
    })
  }

  render() {
    return (
      <ViroARScene onTrackingUpdated={this.onTrackingUpdated} >
        <Viro360Image source={require('./res/nasa.jpg')} />
        <ViroFlexView backgroundColor="white" width={7.0} height={7.0}
          position={[0, 0.0, -6.0]} >
          {this.periodicTable.map((el, key) => {
            return (
              <ViroFlexView style={styles.elementSquare} key={key} backgroundColor={el.color} width={.7} height={.7} onClick={this.handleModalDetail}>
                <ViroText style={styles.atomicNumber} text={el.atomicNumber + ""} height={.2} width={.2} />
                <ViroText style={styles.elementSymbol} text={el.symbol} height={.3} width={.3} />
                <ViroText style={styles.atomicNumber} text={el.name} height={.2} width={.2} />
              </ViroFlexView>

            )
          })}

        </ViroFlexView>

        {
          this.state.modalDetail &&
          <ViroFlexView style={styles.modalDetail} backgroundColor="rgba(204, 204, 204, 0.1)" width={3} height={3} position={[0, 0.0, -4.0]}>
            <ViroText onClick={this.handleModalDetail} style={styles.closeModalDetail} text={"x"} height={.6} width={.6} />
          </ViroFlexView>
        }
      </ViroARScene>
    );
  }

  // _onInitialized(state, reason) {    
  //   if (state == ViroConstants.TRACKING_NORMAL) {
  //     this.setState({
  //       text : "Hello Enrico!"
  //     });
  //   } else if (state == ViroConstants.TRACKING_NONE) {
  //     // Handle loss of tracking
  //   }
  // }

  componentDidMount = () => {
    this.setState({
      text: 'ciao'
    })
  }

  // onTrackingUpdated = () => {
  //   console.log('Track')
  //   this.setState({
  //     text: 'Fuck You!!'
  //   })
  //   console.log('track finish')
  // }


}

ViroMaterials.createMaterials({
  grid: {
    diffuseTexture: require('./res/textures/carbon.jpg'),
  },
});

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: 'black',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  elementSquare: {
    justifyContent: "center",
    alignItems: "center"
  },
  elementSymbol: {
    textAlign: "center"
  },
  atomicNumber: {
    textAlign: "center",
    fontSize: 10,
  },
  modalDetail: {
  },
  closeModalDetail: {
    color: "black",
  }
});

module.exports = HelloWorldSceneAR;
