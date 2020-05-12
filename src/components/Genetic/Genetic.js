import React, { useState } from 'react';

import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import { calcGenetic, toNum } from './functions';

import { styles } from './styles';

export const Genetic = () => {
  const [coeffs, setCoeffs] = useState({
    a: '',
    b: '',
    c: '',
    d: '',
    y: ''
  });

  const input = (value, type) => setCoeffs({ ...coeffs, [type]: value });

  const onChange = (value, type) => input(value, type);

  const calculate = () => {
    alert(`${calcGenetic(toNum(coeffs)).filter((item) => item)}`);
  };
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text>Genetic</Text>
        <TextInput
          placeholder="Input a"
          onChangeText={(text) => onChange(text, 'a')}
          keyboardType={'number-pad'}
          value={coeffs.a}
          style={styles.textInput}
        />
        <TextInput
          placeholder="Input b"
          onChangeText={(text) => onChange(text, 'b')}
          keyboardType={'number-pad'}
          value={coeffs.b}
          style={styles.textInput}
        />
        <TextInput
          placeholder="Input c"
          onChangeText={(text) => onChange(text, 'c')}
          keyboardType={'number-pad'}
          value={coeffs.c}
          style={styles.textInput}
        />
        <TextInput
          placeholder="Input d"
          onChangeText={(text) => onChange(text, 'd')}
          keyboardType={'number-pad'}
          value={coeffs.d}
          style={styles.textInput}
        />
        <TextInput
          placeholder="Input y"
          onChangeText={(text) => onChange(text, 'y')}
          keyboardType={'number-pad'}
          value={coeffs.y}
          style={styles.textInput}
        />
        <TouchableOpacity onPress={calculate}>
          <Text>Calculate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
