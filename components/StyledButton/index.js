import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles';

const StyledButton = (props) => {
    // const type = props.type;
   // const content = props.content;
   // const onPress = props.onPress;

    const { type, content, onPress} = props;

    const backgroundColor = type == 'primary' ? 'black' : 'white';
    const textColor = type == 'primary' ? 'white' : 'black';

    return (
        <View style={styles.Container}>
            <Pressable 
               style={[styles.Button, {backgroundColor: backgroundColor}]}
               onPress={() => onPress()}
            >
               <Text style={[styles.Text, {color: textColor}]}>{content}</Text> 
            </Pressable>
        
        </View>
    );
};

export default StyledButton;