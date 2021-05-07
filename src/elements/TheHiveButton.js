'use strict';

import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import Colors from '../constants/Colors';
import Sizes from '../constants/Sizes';

const TheHiveButton = (props) => {

    let isActiveButton = props.isActiveButton ? styles.activeContainer : styles.negativeContainer;
    let isActiveText = props.isActiveButton ? styles.activeText : styles.negativeText;

    return (
        <TouchableOpacity style={isActiveButton}
            onPress={props.onPress}>
            <Text style={isActiveText}>
                {props.text}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    activeContainer: {
        marginVertical: Sizes.tinySpace,
        paddingHorizontal: Sizes.smallSpace,
        height: Sizes.buttonHeight,
        width: '100%',
        backgroundColor: Colors.accentColor,
        borderRadius: Sizes.borderRadius,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: Colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 1,
    },

    negativeContainer: {
        marginVertical: Sizes.tinySpace,
        height: Sizes.buttonHeight,
        width: '100%',
        backgroundColor: Colors.primaryColor,
        borderRadius: Sizes.borderRadius,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: Colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 1,
    },

    activeText: {
        fontSize: Sizes.smallText,
        color: Colors.textColor,
        fontWeight: 'bold',
    },

    negativeText: {
        fontSize: Sizes.smallText,
        color: Colors.white,
        fontWeight: 'bold',
    }
});

export default TheHiveButton;