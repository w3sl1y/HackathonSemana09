import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

export function Button () {
    return (
        <TouchableOpacity
        style={styles.button}>
            <Text style={styles.create}>Follow</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 30,
        width: 80,
        height: 40,
        alignItems: 'center',
        margin: 20,
    },
    create:{
        color: '#9d4edd',
        fontSize: 16,
        fontWeight: '700',
        textAlign: 'center',
    }
})