import React from 'react'
import { Dimensions, FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import { FlatListStudents } from '../components/FlatListStudents'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/Navigator';
import { images } from '../data/images';

interface Props extends StackScreenProps<RootStackParams, 'HomeScreen'> { };
const { width, height } = Dimensions.get('window');

export const HomeScreen = ({ route, navigation }: Props) => {

  const params = route.params;

  return (
    <View style={styles.container}>
      <View style={{ flex: 1.2, flexDirection: 'row', marginBottom: height / 40 }}>

        <ImageBackground
          style={{ width: '100%', height: '100%', position: 'absolute' }}
          source={require('../images/Rectangle1.png')}
        />
        <Image
          source={(images.image[params.title])}
          style={{ width: '19%', height: '85%', marginHorizontal: '5%', marginVertical: '2.5%' }}
        />
        <Text style={styles.title}>Carrera {params.title}</Text>
      </View>

      <View style={{ flex: 8.8, justifyContent: 'center', marginLeft: width / 45 }}>

        <FlatList
          data={params.career}
          renderItem={({ item, index }) =>
            <FlatListStudents
              group={item}
              index={index}
              action={() => navigation.navigate('GroupScreen', { group: item, title: params.title})
              } />}
          keyExtractor={(item) => item}
          numColumns={2}
        />

      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontWeight: 'bold',
    fontSize: width / 12,
    color: 'black',
    alignSelf: 'center',
    marginLeft: width / 20
  },
  text: {
    fontWeight: 'bold',
    fontSize: width / 25,
    color: 'black',
    alignSelf: 'center',
    marginVertical: height / 50,
  }
});