'use strict';
import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

import Colors from '../constants/Colors';
import Sizes from '../constants/Sizes';

const TheHiveInput = (props) => {

    let isPassword = props.isPassword;

    return(
        <View style={styles.container}>
            <TextInput placeholder={props.hint}
                secureTextEntry={isPassword ? true : false}
                multiline={false}>

            </TextInput>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: Sizes.tinySpace,
        borderColor: Colors.textColor,
        borderWidth: Sizes.borderWidth,
        borderRadius: Sizes.borderRadius,
    }
});

export default TheHiveInput;