import React from 'react';

import { StyleSheet, View, Button, Text, TouchableOpacity } from 'react-native';

export const Navigation = ({ navigation }) => {
  const navigate = (where) => {
    navigation.navigate(where);
  };

  return (
    <View style={styles.container}>
      <View style={styles.eyes}>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: 'rgba(0,0,0,0.2)',
            alignItems: 'center',
            justifyContent: 'center',
            width: 100,
            height: 100,
            backgroundColor: '#fff',
            borderRadius: 50
          }}
          onPress={() => navigate('Ferma')}
        >
          <Text style={styles.eye}>Ferma</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: 'rgba(0,0,0,0.2)',
            alignItems: 'center',
            justifyContent: 'center',
            width: 100,
            height: 100,
            backgroundColor: '#fff',
            borderRadius: 50
          }}
          onPress={() => navigate('Perceptron')}
        >
          <Text style={styles.eye}>Perceptron</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.nose}>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: 'rgba(0,0,0,0.2)',
            alignItems: 'center',
            justifyContent: 'center',
            width: 100,
            height: 100,
            backgroundColor: '#fff',
            borderRadius: 50
          }}
          onPress={() => navigate('Genetic')}
        >
          <Text>Genetic</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.nose}>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: 'rgba(0,0,0,0.2)',
            alignItems: 'center',
            justifyContent: 'center',
            width: 300,
            height: 50,
            backgroundColor: 'rgba(191, 29, 61, 0.3)',
            marginTop: 50

            // borderRadius: 50,
          }}
        >
          <Text>{`I'm just a mouth :)`}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingTop: 100
  },
  eyes: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  eye: {
    backgroundColor: '#302f2c',
    color: '#fff',
    textAlign: 'center',
    width: 75
  },
  nose: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  mouth: {}
});
