import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Dimensions, StyleSheet, Text, View } from 'react-native';



interface Props {
    group: string,
    index: number;
    action: () => void;
}
const { width, height } = Dimensions.get('window');

export const FlatListStudents = ({ group, index, action}: Props) => {
    return (
        <View style={styles.container}>

            <TouchableOpacity 
            style={[
                styles.button,
               (index % 4 === 1 || index % 4 === 2) ? styles.color1 : styles.color2
            ]}

            activeOpacity={0.8}
                onPress={action}
            >
                <Text style={styles.itemText}>
                    {group}
                </Text>
            </TouchableOpacity>
        </View>


    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',

    },
    itemText: {
        marginLeft: 10,
        fontSize: width/12,
        fontWeight: 'bold',
        color: 'white',
        textAlign:'center'
    },
    row: {
        flex: 1
    },
    image: {
        height: height / 5,
        width: width / 2,
        borderRadius: width / 20,
    },
    button: {
        width: width / 2.3,
        height: height / 10,
        alignSelf: 'center',
        borderRadius: 10,
        justifyContent:'center',
        marginVertical:height/80,
        marginHorizontal:width/50
    },
    color1:{
        backgroundColor: '#14DFA6'
    },
    color2:{
        backgroundColor: '#058C66'
    }

});
