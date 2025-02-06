import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        paddingTop: 30,
    },
    formContainer: {
        borderRadius: 20,
        padding: "2%",
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: "2%",
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        marginBottom: 30,
    },
    imageUploadContainer: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 20,
        borderWidth: 2,
        borderColor: '#555',
        overflow: 'hidden',
    },
    uploadedImage: {
        width: '100%',
        height: '100%',
    },
    uploadText: {
        marginTop: 5,
        fontSize: 11,
        fontWeight: 'bold',
        color: '#666',
        textAlign: 'center',
    },
    inputContainer: {
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#555',
    },
    inputIcon: {
        padding: 10,
        marginLeft: 5,
    },
    input: {
        flex: 1,
        padding: 15,
        fontSize: 16,
        color: '#000',
    },
    eyeIcon: {
        padding: 10,
        marginRight: 5,
        borderLeftColor: "black",
        borderLeftWidth: 1,
    },
    registerButton: {
        backgroundColor: '#000',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    buttonIcon: {
        marginRight: 10,
    },
    registerButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    loginLink: {
        marginTop: 15,
        alignItems: 'center',
        marginBottom: 20,
    },
    loginLinkText: {
        color: '#000',
        fontSize: 18,

    },
    boldText: {

        fontWeight: "bold", 
        color: "#000", 
        textDecorationLine: "underline"
    },
});
export default styles;