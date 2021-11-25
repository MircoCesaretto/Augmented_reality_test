'use strict';

import React, { Component } from 'react';
import { Text } from 'react-native';
import { StyleSheet } from 'react-native';
import elements from '../properties/elements';
import { ViroARScene, ViroText, ViroConstants, Viro360Image, ViroMaterials, ViroBox, ViroGeometry, Viro3DObject, ViroFlexView, ViroButton } from 'react-viro';

export default class HelloWorldSceneAR extends Component {

  constructor() {
    super();

    this.periodicTable = elements.map(el => {
      if (el.type === 'Nonmetal') {
        el.color = "#8CED8C"
      }
      if (el.type === 'Noble gas') {
        el.color = "#E5BDE5"
      }
      if (el.type === 'Transition metal') {
        el.color = "#FAC5B7"
      }
      if (el.type === 'Alkali metal') {
        el.color = "#EACE5D"
      }
      if (el.type === 'Metalloid') {
        el.color = "#9EE5D4"
      }
      if (el.type === 'Halogen') {
        el.color = "#9EE5D4"
      }
      if (el.type === 'Alkaline earth metal') {
        el.color = "#F1F165"
      }
      if (el.type === 'Post-transition metal') {
        el.color = "#ACDFEC"
      }
      if (el.type === 'Lanthanide') {
        el.color = "#E7D09C"
      }
      if (el.type === 'Actinide') {
        el.color = "#F5CCDA"
      }
      return el
    })
    // Set initial state here
    this.state = {
      text: "Initializing AR...",
      modalDetail: false,
      elementSelected: null,
    };

    // bind 'this' to functions
    // this._onInitialized = this._onInitialized.bind(this);
    // console.log('constr')
  }


  handleModalDetail = (el) => () => {
    this.setState({
      elementSelected: el,
      modalDetail: true
    })
  }

  handleModalclose = () => {
    this.setState({
      modalDetail: false,
    })
  }

  getElementColorType = (type) => () => {
    if (type === 'Nonmetal') {
      return "#8CED8C"
    }
    if (type === 'Noble gas') {
      return "#E5BDE5"
    }
    if (type === 'Transition metal') {
      return "#FAC5B7"
    }
    if (type === 'Alkali metal') {
      return "#EACE5D"
    }
    if (type === 'Metalloid') {
      return "#9EE5D4"
    }
    if (type === 'Halogen') {
      return "#9EE5D4"
    }
    if (type === 'Alkaline earth metal') {
      return "#F1F165"
    }
    if (type === 'Post-transition metal') {
      return "#ACDFEC"
    }
    if (type === 'Lanthanide') {
      return "#E7D09C"
    }
    if (type === 'Actinide') {
      return "#F5CCDA"
    }
  }

  render() {
    return (
      <ViroARScene onTrackingUpdated={this.onTrackingUpdated} >
        <Viro360Image source={require('./res/nasa.jpg')} />

        <ViroFlexView
          // backgroundColor="white"
          width={18}
          height={9}
          position={[0, 0.0, -10]}
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap'
          }}
        >

          {
            this.periodicTable.map((el, key) => {
              if (el.visibility) {
                return (
                  <ViroFlexView
                    width={1}
                    height={1}
                    style={{
                      padding: .05,
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <ViroFlexView
                      style={styles.elementSquare}
                      key={key}
                      backgroundColor={el.color}
                      width={.9}
                      height={.9}
                      onClick={this.handleModalDetail(el)}
                    >
                      <ViroText color='#000000' style={styles.atomicNumber} text={el.atomicNumber + ""} height={.2} width={.2} />
                      <ViroText color='#000000' style={styles.elementSymbol} text={el.symbol} height={.3} width={.3} />
                      <ViroText color='#000000' style={styles.atomicNumber} text={el.name} height={.2} width={.2} />
                    </ViroFlexView>
                  </ViroFlexView>
                )
              } else {
                return (
                  <ViroFlexView
                    style={styles.elementSquare}
                    key={key}
                    width={1}
                    height={1}
                  />

                )
              }
            })
          }

        </ViroFlexView>

        {
          this.state.modalDetail &&
          <ViroFlexView style={styles.modalDetail} backgroundColor="rgba(204, 204, 204, 0.1)" width={3} height={3} position={[0, 0.0, -4.0]}>
            <ViroText onClick={this.handleModalclose} style={styles.closeModalDetail} text={"x"} height={.4} width={2.9} />
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
    color: "white",
    fontSize: 30,
    textAlign: "right",
    marginRight: 3
  }
});

module.exports = HelloWorldSceneAR;
