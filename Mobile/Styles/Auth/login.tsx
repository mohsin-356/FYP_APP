import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    formContainer: {
        borderRadius: 20,
        padding: 10,
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        marginBottom: 30,
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
        borderLeftWidth: 1
    },
    loginButton: {
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
    loginButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
    },
    divider: {
        flex: 1,
        height: 1,
        backgroundColor: '#555',
    },
    dividerText: {
        marginHorizontal: 10,
        color: '#000',
        fontWeight: 'bold',
        alignSelf: "center"
    },
    createAccountText: {
        color: '#000',
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 15,
    },
    forgotPasswordContainer: {
        marginTop: 15,
    },
    forgotPasswordText: {
        color: 'black',
        fontSize: 17,
        textAlign: 'center',
        textDecorationLine: 'underline',
        fontWeight: 'bold',
    },
});

export default styles;
