import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Platform } from 'react-native';
import { Item, Input as InputNB, Icon } from 'native-base'; 

export default function Input() {
    return (
        <View styles={styles.container}>
            <Item styles={styles.itemInput}>
                <InputNB 
                    placeholder='Mensagem...' 
                    style={styles.input} 
                    placeholderTextColor='grey'                    
                />
                <TouchableOpacity style={{paddingRight: 5}}>
                    <Icon name='send' style={styles.iconSend} />
                </TouchableOpacity>
            </Item>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#16202b',
        paddingBottom: 20,
        paddingHorizontal: 20
    },
    itemInput: {
        borderColor: '#16202b'        
              
    },
    input: {
        color: '#fff'        
    },
    iconSend: {
       color: '#fff'
    }
})