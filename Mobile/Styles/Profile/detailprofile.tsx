import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'center',
        padding: 3,
    },
    card: {
        backgroundColor: 'rgba(255,255,255,0.9)',
        borderRadius: 20,
        padding: 18,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.2,
        shadowRadius: 20,
        elevation: 15,

    },
    profileInfo: {
        alignItems: 'center',
        marginBottom: 24,
    },
    avatarContainer: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 8,
    },
    avatar: {
        width: 350,
        height: 180,
       backgroundColor: 'black',
        borderWidth: 5,
        borderColor: 'white',
        borderRadius: 20,
    },
    name: {
        marginTop: 16,
        fontSize: 28,
        fontWeight: 'bold',
        color: '#2D3748',
    },
    email: {
        color: '#718096',
        fontSize: 16,
    },
    detailSection: {
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#E2E8F0',
    },
    detailContent: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
    },
    detailIcon: {
        fontSize: 24,
    },
    detailLabel: {
        fontSize: 16,
        fontWeight: '600',
        color: '#4A5568',
    },
    detailValue: {
        fontSize: 16,
        color: '#1A202C',
    },
    actionButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 24,
    },
    button: {
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 14,
        borderRadius: 12,
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.2,
                shadowRadius: 5,
            },
            android: {
                elevation: 5,
            },
        }),
    },
    closeButton: {
        backgroundColor: 'black',
    },
    editButton: {
        backgroundColor: 'black',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default styles;