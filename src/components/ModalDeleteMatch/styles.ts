import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: theme.colors.overlay,
    },
    components: {
        width: '100%',
        height: 178,
        backgroundColor: theme.colors.secondary80,
        paddingTop: 23,
        paddingHorizontal: 16
    },
    text: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 23        
    },
    normalText: {
        fontFamily: theme.fonts.title500,
        fontSize: 24,
        color: theme.colors.heading,
        marginRight: 6
    },
    boldHeading: {
        fontFamily: theme.fonts.title700,
        fontSize: 24,
        color: theme.colors.heading,
    },
    boldPrimary: {
        fontFamily: theme.fonts.title700,
        fontSize: 24,
        color: theme.colors.primary,
    },
    buttons: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    negative: {
        width: 160,
        height: 56,
        backgroundColor: theme.colors.secondary70,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center'
    },
    positive: {
        width: 160,
        height: 56,
        backgroundColor: theme.colors.primary,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        flex: 1,
        fontFamily: theme.fonts.text500,
        color: theme.colors.heading,
        fontSize: 15,
        textAlign: 'center'
    }
});