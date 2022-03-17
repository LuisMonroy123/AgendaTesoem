import React, { useEffect } from 'react'
import {ImageBackground, StyleSheet, TouchableOpacity, View, Dimensions, Text, Animated } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';
import { groupsISC, groupsTICS } from '../data/groups';
import { StackScreenProps } from '@react-navigation/stack';


const { width, height } = Dimensions.get('window');
interface Props extends StackScreenProps<any, any> { };

export const CareerScreen = ({ navigation }: Props) => {
const {opacity, fadeInLogo} = useAnimation();
    return (
        <View style={styles.container}>

            <View style={{ flex: 0.15, backgroundColor: 'red', flexDirection: 'row', justifyContent: 'space-between' }}>

                <ImageBackground
                    style={{ width: '100%', height: '100%', position: 'absolute' }}
                    source={require('../images/Rectangle1.png')}
                />
                <Animated.Image

                    source={require('../images/ISC.png')}
                    style={{ width: '20%', height: '80%', marginVertical: '2.5%', opacity: opacity}}
                    ref={fadeInLogo}
                />
                <Animated.Image
                    source={require('../images/logo-tesoem.png')}
                    style={{ width: '50%', height: '80%', marginVertical: '2.5%', opacity: opacity }}
                    ref={fadeInLogo}
                />
                <Animated.Image
                    source={require('../images/TICS.png')}
                    style={{ width: '20%', height: '80%', marginVertical: '2.5%', opacity: opacity }}
                    ref={fadeInLogo}
                />
            </View>

            <View style={{ marginTop: height / 20 }} />

            <Text style={styles.title}>
                Escoja la carrera:
            </Text>


            <View style={{ justifyContent: 'space-evenly', height: height / 2.5, flex: 0.85 }}>
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.button}
                    onPress={() => navigation.navigate('HomeScreen', {
                        career: groupsISC,
                        title: 'ISC',
                    })}
                >
                    <Text style={styles.text}>Carrera de Sistemas</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.button}
                    onPress={() => navigation.navigate('HomeScreen', {
                        career: groupsTICS,
                        title: 'TICS'
                    })}
                >
                    <Text style={styles.text}>Carrera de TIC'S</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    button: {
        backgroundColor: '#0F9566',
        width: width / 1.8,
        height: height / 7.5,
        alignSelf: 'center',
        borderRadius: 10,
        borderWidth: 6,
        borderColor: '#37F0AF',
        justifyContent: 'center'
    },
    text: {
        color: 'white',
        fontSize: width / 15,
        fontWeight: 'bold',
        textAlign: 'center',
        fontStyle: 'italic'
    },
    title: {
        color: 'black',
        fontSize: width / 12,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});