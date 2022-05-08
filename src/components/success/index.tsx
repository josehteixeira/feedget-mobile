import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import successImg from '../../assets/success.png';
import { Copyright } from '../copyright';
import { styles } from './styles';

interface Props {
    restartFeedback: () => void;
}

export function Success({ restartFeedback }: Props) {
    return (
        <View style={styles.container}>
            <Image
                source={successImg}
                style={styles.image}
            />

            <Text style={styles.title}>
                Agradecemos o feedback
            </Text>

            <TouchableOpacity
                style={styles.button}
                onPress={restartFeedback}
            >
                <Text style={styles.buttonTitle}>
                    Quero enviar outro
                </Text>
            </TouchableOpacity>

            <Copyright />
        </View>
    );
}