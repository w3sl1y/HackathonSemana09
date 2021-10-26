import React from 'react';
import {Text, ImageBackground, StyleSheet, Dimensions, ImageBackgroundComponent, View} from 'react-native';

const { width, height } = Dimensions.get('window');

const DesignerSlider = (props) => {
    const {title} = props;
    return (
        <View style={styles.containerGeneral}>
        <View style={styles.containerSlider1}>
            <View style={styles.space}>
            <Text style={styles.textSlider}>IMAGE</Text>
            </View>
            <View style={styles.space}>
            <Text style={styles.textSlider}>David Borg</Text>
            <Text style={styles.textSlider}>Title: Flying wings</Text>
            </View>
            <View style={styles.space}>
            <Text style={styles.textSlider}>1</Text>
            <Text style={styles.textSlider}>Ranking</Text>
            </View>
        </View>
        <View style={styles.containerSlider2}>
            <View style={styles.space}>
            <Text style={styles.textSlider}>IMAGE</Text>
            </View>
            <View style={styles.space}>
            <Text style={styles.textSlider}>Lucy</Text>
            <Text style={styles.textSlider}>Growing up trouble</Text>
            </View>
            <View style={styles.space}>
            <Text style={styles.textSlider}>2</Text>
            <Text style={styles.textSlider}>Ranking</Text>
            </View>
        </View>
        <View style={styles.containerSlider3}>
            <View style={styles.space}>
            <Text style={styles.textSlider}>IMAGE</Text>
            </View>
            <View style={styles.space}>
            <Text style={styles.textSlider}>Jerry West</Text>
            <Text style={styles.textSlider}>Title: Sculptor's diary</Text>
            </View>
            <View style={styles.space}>
            <Text style={styles.textSlider}>3</Text>
            <Text style={styles.textSlider}>Ranking</Text>
            </View>
        </View>
        <View style={styles.containerSlider4}>
            <View style={styles.space}>
            <Text style={styles.textSlider}>IMAGE</Text>
            </View>
            <View style={styles.space}>
            <Text style={styles.textSlider}>Bold</Text>
            <Text style={styles.textSlider}>Title: Ilustrator of little girl</Text>
            </View>
            <View style={styles.space}>
            <Text style={styles.textSlider}>4</Text>
            <Text style={styles.textSlider}>Ranking</Text>
            </View>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerGeneral:{
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center'
    },
    space:{
        flexDirection:'column',
        flex: 0.33
    },
    containerSlider1:{
        flexDirection: 'row',
        flex: 1,
        height: height * 0.18,
        width: 360,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#a2d2ff',
        margin: 20,
        marginVertical: 5,
        borderRadius: 20
    },
    containerSlider2:{
        flexDirection: 'row',
        flex: 1,
        height: height * 0.18,
        width: 360,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e8ad45',
        margin: 20,
        marginVertical: 5,
        borderRadius: 20
    },
    containerSlider3:{
        flexDirection: 'row',
        flex: 1,
        height: height * 0.18,
        width: 360,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ef476f',
        margin: 20,
        marginVertical: 5,
        borderRadius: 20
    },
    containerSlider4:{
        flexDirection: 'row',
        flex: 1,
        height: height * 0.18,
        width: 360,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9b5de5',
        margin: 20,
        marginVertical: 5,
        borderRadius: 20
    },
    textSlider:{
        fontSize: 15,
        marginHorizontal: 3,
        padding: 1,
        color: '#fff',
        textAlign: 'center',
    }
});

export default DesignerSlider;