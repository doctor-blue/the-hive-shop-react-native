'use strict';
import React, { useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Colors from '../constants/Colors';
import Sizes from '../constants/Sizes';

const TheHiveInput = (props) => {

    const [isShownPass, setPassShown] = useState(false);
    let iconName = isShownPass ? 'eye-off-outline' : 'eye-outline';
    
    if(props.isPassword) {
        return(
            <View style={styles.container}>
                <TextInput style={styles.textInput} 
                    placeholder={props.hint}
                    secureTextEntry={isShownPass ? false : true}
                    multiline={false}>
                </TextInput>
                <Icon name={iconName}
                size={30} 
                color={Colors.textColor} 
                onPress={() => setPassShown(!isShownPass)} />
            </View>
        );
    } else {
        return(
            <View style={styles.container}>
                <TextInput style={styles.textInput} 
                    placeholder={props.hint}
                    multiline={false}>
                </TextInput>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: Sizes.tinySpace,
        borderColor: Colors.textColor,
        borderWidth: Sizes.borderWidth,
        borderRadius: Sizes.borderRadius,
        paddingHorizontal: Sizes.tinySpace,
        flexDirection: 'row',
        alignItems: 'center',
    },

    textInput: {
        flex: 1,
    },
});

export default TheHiveInput;