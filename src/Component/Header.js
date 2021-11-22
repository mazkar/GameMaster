import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ms} from 'react-native-size-matters';

export default function Header() {
  return (
    <SafeAreaView style={styles.global}>
      <View style={styles.container}>
        <View>
          <Image
            source={require('./../Assets/Image/logo.png')}
            style={{height: ms(56), width: ms(56)}}
          />
        </View>
        <View style={styles.containerTitle}>
          <Text style={{fontSize: ms(18), color: 'white', fontWeight: '700'}}>
            Game Master
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  global: {
    height: ms(64),
  },
  container: {
    flexDirection: 'row',
  },
  containerTitle: {
    marginTop: ms(12),
  },
});
