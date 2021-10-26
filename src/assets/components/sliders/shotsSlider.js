import React from 'react';
import {Text, StyleSheet, Dimensions, ImageBackgroundComponent, View, Image} from 'react-native';

const { width, height } = Dimensions.get('window');

const ShotsSliders = (props) => {
    const {title} = props;
    return (
        <>
        <View style={styles.containerGeneral}>
        <View style={styles.containerSlider1}>
            <View>
                <Text style={styles.textSlider}>1</Text>
            </View>
        </View>
        <View style={styles.containerSlider2}>
            <View>
            <Text style={styles.textSlider}>2</Text>
            </View>
        </View>
        </View>
        <View style={styles.containerGeneral}>
        <View style={styles.containerSlider3}>
            <View>
            <Text style={styles.textSlider}>3</Text>
            </View>
        </View>
        <View style={styles.containerSlider4}>
            <View>
            <Text style={styles.textSlider}>4</Text>
            </View>
        </View>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    containerGeneral:{
        flexDirection: 'row',
        flex: 1,
    },
    containerSlider1:{
        flexDirection: 'row',
        flex: 1,
        height: height * 0.18,
        width: 155,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ada7ff',
        margin: 10,
        marginVertical: 5,
        borderRadius: 20
    },
    containerSlider2:{
        flexDirection: 'row',
        flex: 1,
        height: height * 0.18,
        width: 155,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#67b99a',
        margin: 10,
        marginVertical: 5,
        borderRadius: 20
    },
    containerSlider3:{
        flexDirection: 'row',
        flex: 1,
        height: height * 0.18,
        width: 155,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e8ac65',
        margin: 10,
        marginVertical: 5,
        borderRadius: 20
    },
    containerSlider4:{
        flexDirection: 'row',
        flex: 1,
        height: height * 0.18,
        width: 155,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#48cae4',
        margin: 10,
        marginVertical: 5,
        borderRadius: 20
    },
    textSlider:{
        fontSize: 24,
        marginHorizontal: 20,
        padding: 15,
        color: '#fff',
        textAlign: 'center',
    },
});

export default ShotsSliders;