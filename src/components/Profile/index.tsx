import React from 'react';
import { View, Text, Alert } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useAuth } from '../../hooks/auth';
import { Avatar } from '../Avatar';
import { styles } from './styles';

type Props = {
    handleOpenModal(): void;
}

export function Profile({handleOpenModal}: Props) {
    const { user } = useAuth();

    return (
        <View style={styles.container} >
            <RectButton onPress={handleOpenModal}>
                <Avatar urlImage={user.avatar}/>
            </RectButton>
            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Olá,
                    </Text>
                    <Text style ={styles.username}>
                        {user.firtName}
                    </Text>
                </View>
                <Text style={styles.message}>
                    Hoje é dia de vitória
                </Text>
            </View>
        </View>
    );
}