import React from 'react';
import {Text, ImageBackground, StyleSheet, Dimensions, ImageBackgroundComponent, View} from 'react-native';

const { width, height } = Dimensions.get('window');

const ItemHomeSlider = (props) => {
    const {title} = props;
    return (
        <>
        <View style={styles.containerSlider1}>
            <View>
            <Text style={styles.textSlider}>Ilustration</Text>
            </View>
        </View>
        <View style={styles.containerSlider2}>
            <View>
            <Text style={styles.textSlider}>Interface</Text>
            </View>
        </View>
        <View style={styles.containerSlider3}>
            <View>
            <Text style={styles.textSlider}>Website</Text>
            </View>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    containerSlider1:{
        flexDirection: 'row',
        flex: 1,
        height: height * 0.14,
        width: 155,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#99e2b4',
        margin: 5,
        marginVertical: 5,
        borderRadius: 20
    },
    containerSlider2:{
        flexDirection: 'row',
        flex: 1,
        height: height * 0.14,
        width: 155,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4895ef',
        margin: 5,
        marginVertical: 5,
        borderRadius: 20
    },
    containerSlider3:{
        flexDirection: 'row',
        flex: 1,
        height: height * 0.14,
        width: 155,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e8ac65',
        margin: 5,
        marginVertical: 5,
        borderRadius: 20
    },
    textSlider:{
        fontSize: 18,
        marginHorizontal: 20,
        padding: 15,
        color: '#fff',
        textAlign: 'center',
    }
});

export default ItemHomeSlider;