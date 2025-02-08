import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F7FAFC',

    },
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 5,
        width: '100%',
        maxWidth: 400,
        padding: 16,
        height: "100%"
    },
    avatarContainer: {
        alignItems: 'center',
        marginBottom: 24,
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 4,
        borderColor: '#4299E1',
        marginBottom: 8,
        backgroundColor:'black'
    },
    avatarUpload: {
        position: 'absolute',
        bottom: 8,
        right: 8,
        backgroundColor: '#4299E1',
        borderRadius: 20,
        padding: 8,
    },
    uploadText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
    inputContainer: {
        marginBottom: 16,
    },
    label: {
        marginBottom: 8,
        color: '#4A5568',
        fontSize: 16,
        fontWeight: 'bold',
    },
    input: {
        borderWidth: 1,
        borderColor: '#CBD5E0',
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16,
    },
    cancelButton: {
        flex: 1,
        marginRight: 8,
        backgroundColor: 'black',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    saveButton: {
        flex: 1,
        marginLeft: 8,
        backgroundColor: 'black',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonTextCancel: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
    buttonTextSave: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default styles;