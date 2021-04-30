'use strict';
import React from 'react';
import { Text, StyleSheet } from 'react-native';

import Sizes from '../constants/Sizes';
import Colors from '../constants/Colors';

const Title = (props) => {
    return (
        <Text style={styles.textStyle}>
            {props.text}
        </Text>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: Sizes.bigText,
        fontWeight: 'bold',
        color: Colors.textColor,
        textAlign: 'center',
    }
});

export default Title;