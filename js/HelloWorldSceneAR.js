'use strict';

import React, { Component } from 'react';

import { StyleSheet } from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroConstants,
  Viro360Image,
  ViroMaterials,
  ViroBox,
  ViroGeometry,
  Viro3DObject
} from 'react-viro';

export default class HelloWorldSceneAR extends Component {

  constructor() {
    super();

    // Set initial state here
    this.state = {
      text: "Initializing AR..."
    };

    // bind 'this' to functions
    // this._onInitialized = this._onInitialized.bind(this);
    // console.log('constr')
  }

  render() {
    return (
      <ViroARScene onTrackingUpdated={this.onTrackingUpdated} >
        <ViroText text={this.state.text} scale={[.5, .5, .5]} position={[0, 0, -1]} style={styles.helloWorldTextStyle} />
        <Viro360Image source={require('./res/test_360.jpg')} />
        {/* <ViroBox position={[0, -.5, -1]} scale={[.3, .3, .3]} materials={["grid"]} />         */}
        <Viro3DObject
          source={require('./res/abstract_cube.obj')}
          position={[-0.0, -5.5, -1.15]}
          materials={["grid"]}
          type="OBJ"
        />

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
      text: 'Hello Enri!'
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
    diffuseTexture: require('./res/grid_bg.jpg'),
  },
});

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

module.exports = HelloWorldSceneAR;
