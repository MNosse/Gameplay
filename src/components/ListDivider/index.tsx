import React from "react";

import { View } from 'react-native';

import { styles } from "./styles";

type Props = {
    isCentred?: boolean;
    isGuildDivider?: boolean;
}

export function ListDivider ({ isCentred, isGuildDivider }: Props) {
    return (
        <View 
            style={[
                styles.container,
                isCentred ? {
                   marginVertical: 12, 
                } : {
                    marginTop: 2,
                    marginBottom: 31,
                },
                isGuildDivider ? {
                    width: '70%'
                } : {
                    width: '75%'
                }
            ]}
        />
    );
}