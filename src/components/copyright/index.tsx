import React from 'react';
import { View, Text, Linking } from 'react-native';
import { styles } from './styles';

export function Copyright() {
  return (
    <View>
      <Text
        style={styles.text}
        onPress={() => Linking.openURL('https://github.com/josehteixeira')}
      >
        Feito com ♥ por josehteixeira
      </Text>

    </View>
  );
}