'use strict';
import React from 'react';
import { Text, StyleSheet } from 'react-native';

import Sizes from '../constants/Sizes';
import Colors from '../constants/Colors';

const TheHiveTitle = (props) => {

    let titleStyle = props.isBig ? styles.bigTitle : styles.normalTitle

    return (
        <Text style={titleStyle}>
            {props.text}
        </Text>
    );
};

const styles = StyleSheet.create({
    bigTitle: {
        flex: 1,
        fontSize: Sizes.bigText,
        fontWeight: 'bold',
        color: Colors.textColor,
        textAlign: 'center',
    },

    normalTitle: {
        flex: 1,
        fontSize: Sizes.normalText,
        fontWeight: 'bold',
        color: Colors.textColor,
        textAlign: 'center',
    },
});

export default TheHiveTitle;