/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import { Button } from './src/assets/components/Button';
import ItemHomeSlider from './src/assets/components/sliders/itemHomeSlider';
import ShotsSliders from './src/assets/components/sliders/shotsSlider';
import DesignerSlider from './src/assets/components/sliders/designerSlider';

const Logo = require ('./src/assets/images/user.png')

const App = () => {
  return (
      <ScrollView>
        <View
          style={styles.container}>
          <View style={styles.info}>
          <View style={styles.info1}><Image style={styles.user} source={Logo} /><View style={styles.name}><Text style={styles.header}>Marry</Text><Text style={styles.headerLocation}>China Beijing</Text></View><Button /></View>
          <View style={styles.info2}><View style={styles.block}><Text style={styles.header}>648</Text></View ><View style={styles.block}><Text style={styles.header}>7</Text></View><View style={styles.block}><Text style={styles.header}>1046</Text></View></View>
          <View style={styles.info3}><View style={styles.block}><Text style={styles.headerNumbers}>Follow</Text></View><View style={styles.block}><Text style={styles.headerNumbers}>Bucket</Text></View><View style={styles.block}><Text style={styles.headerNumbers}>Followers</Text></View></View>
          </View>
          <View style={styles.blockContent}>
          <Text style={styles.content}>Buckets</Text>
          <ScrollView horizontal={true}>
          <ItemHomeSlider/>
          </ScrollView>
          <Text style={styles.content}>Shots</Text>
          <ShotsSliders/>
          <Text style={styles.content}>Designer</Text>
          <DesignerSlider/>
          </View>
        </View>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
  },
  blockContent:{
    flexDirection: 'column',
    flex: 0.5,
  },
  info:{
    flexDirection: 'column',
    flex: 0.5,
    alignItems: 'center',
    backgroundColor:'#9d4edd',
  },
  info1:{
    flexDirection: 'row',
    flex: 1,
    margin: 15,
  },
  header:{
    margin: 10,
    textAlign: 'center',
    marginHorizontal: 20,
    fontSize: 23,
    fontWeight: '700',
    letterSpacing: 0.6,
    color:'#fff',
  },
  content:{
    margin: 10,
    textAlign: 'left',
    marginHorizontal: 20,
    fontSize: 28,
    fontWeight: '400',
    letterSpacing: 0.6,
    color:'#212121',
  },
  headerNumbers:{
    margin: 10,
    marginTop: -12,
    textAlign: 'center',
    marginHorizontal: 20,
    fontSize: 16,
    fontWeight: '500',
    letterSpacing: 0.6,
    color:'#fff',
  },
  headerLocation:{
    margin: 10,
    textAlign: 'center',
    marginHorizontal: 30,
    marginVertical: -5,
    fontSize: 15,
    color:'#fff',
  },
  info2:{
    flexDirection: 'row',
    flex: 1,
  },
  info3:{
    flexDirection: 'row',
    flex: 1,
  },
  block:{
    flexDirection:'column',
    flex: 0.3,
  },
  user:{
    width: 60,
    height: 60,
    margin: 10,
    marginHorizontal: 20,
  },
  name:{
    flexDirection: 'column',
  },
});

export default App;
