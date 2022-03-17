import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { images } from '../data/images';
import { studentsItems } from '../data/studentsItems';
import { RootStackParams } from '../navigator/Navigator';

interface Props extends StackScreenProps<RootStackParams, 'GroupScreen'> { };
const { width, height } = Dimensions.get('window');

interface Props {
    group: string
}

export const GroupScreen = ({ route, group }: Props) => {

    const params = route.params;
    const [first, setfirst] = useState(0);
    group = params!.group;
    return (
        <View style={styles.container}>
            <View style={{ marginBottom: height / 7 }}>

                <Image
                    source={require('../images/Rectangle1.png')}
                    style={styles.rectangle1}
                />
                <Image
                    source={require('../images/Triangle12.png')}
                    style={styles.triangle1}
                />
                <Image
                    source={images.image[params.title]}
                    style={styles.logo}
                />
                <Text style={styles.title}>Datos{'\n'}Jefes y Subjefes</Text>
            </View>

            <Carousel
                    layout='default' 
                    data={studentsItems.filter(element => element.group?.includes(group))}
                    onSnapToItem={(index) => setfirst(index)}
                    lockScrollWhileSnapping={true}
                    style={{width:width}}
                    activeSlideAlignment='center'
                    renderItem={({ item, index }) => (
                        <View>
                            <Image
                                //key={index}
                                style={styles.photo}
                                source={images.image[item!.id]}
                            />
                            <Text style={styles.text}>Matricula: {item.id}</Text>
                            <Text style={styles.text}>Nombre: {item.name}</Text>
                            <Text style={styles.text}>Número: {item.phone}</Text>
                            <Text style={styles.text}>Cargo: {item.workstation}</Text>

                        </View>

                    )}
                    sliderWidth={350}
                    itemWidth={300}
                />
                {
                    <Pagination
                        dotsLength={(studentsItems.filter(element => element.group?.includes(group))).length}
                        activeDotIndex={first}
                        containerStyle={{ backgroundColor: 'rgba(241, 241, 241, 0.75)' }}
                        dotStyle={{
                            width: 10,
                            height: 10,
                            borderRadius: 5,
                            marginHorizontal: 8,
                            backgroundColor: 'rgba(0, 0, 0, 0.98)'
                        }}
                        inactiveDotStyle={{
                            backgroundColor:'grey'
                        }}
                        inactiveDotOpacity={0.4}
                        inactiveDotScale={0.6}
                    />
                }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        position: 'absolute',
        color: 'black',
        fontSize: width / 15,
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
        marginTop: height / 100,
        right:width/7
    },
    photo: {
        height: height / 3,
        width: width / 1.5,
        borderRadius: width / 20,
        marginVertical: height / 20,
        alignSelf: 'center'
    },
    text: {
        fontWeight: 'bold',
        fontSize: width / 20,
        color: 'black',
        //textAlign: 'center',
        //marginVertical:height/100,
        
        width:width/1.5,
        alignSelf:'center'
    },
    triangle1: {
        width: width / 2,
        height: height / 3.6,
        position: 'absolute',

    },
    rectangle1: {
        width: width / 1,
        height: height / 8,
        //position: 'absolute'
    },
    logo: {
        width: width / 4.9,
        height: height / 9,
        position: 'absolute',
        marginHorizontal: width / 30,
        borderRadius: 10,
        marginTop: height / 50
    }
})
