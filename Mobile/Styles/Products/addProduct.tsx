import { StyleSheet,Dimensions } from "react-native";
const { width } = Dimensions.get('window');

const createStyles = (isDarkMode: any) =>
    StyleSheet.create({
        container: {
            flex: 1,
            padding: 1,
            backgroundColor: isDarkMode ? '#1F2937' : '#F3F4F6',
        },
        scrollViewContent: {
            paddingBottom: 24,
        },
        formContainer: {
            padding: 10,
            
        },
        imagePickerContainer: {
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 16,
        },
        imagePickerButton: {
            width: 100,
            height: 100,
            borderRadius: 50, // Circular shape
            borderWidth: 1,
            borderColor: isDarkMode ? '#9CA3AF' : '#000000',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: isDarkMode ? '#4B5563' : '#D1D5DB',
        },
        imagePreview: {
            width: 100,
            height: 100,
            borderRadius: 50, // Circular shape for preview
            resizeMode: 'cover',
        },
        inputWrapper: {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
        },
        input: {
            flex: 1,
            height: 50,
            paddingHorizontal: 10,
            borderWidth: 1,
            borderColor: isDarkMode ? '#9CA3AF' : '#6B7280',
            borderRadius: 8,
            marginLeft: 10,
            backgroundColor: isDarkMode ? '#374151' : '#E5E7EB',
        },
        multilineInput: {
            minHeight: 60,
            textAlignVertical: 'top',
            paddingVertical: 10,
        },
        pickerWrapper: {
            flex: 1,
            justifyContent: 'center',
            borderWidth: 1,
            borderRadius: 8,
            paddingHorizontal: 10,
            marginLeft: 10,
            paddingVertical: 4,
            backgroundColor: isDarkMode ? '#374151' : '#E5E7EB',
            height:40
        },
        picker: {
            height: 40,
            color: isDarkMode ? '#FFFFFF' : '#000000',
        },
        submitButton: {
            alignItems: 'center',
            justifyContent: 'center',
            height: 50,
            borderRadius: 8,
            backgroundColor: isDarkMode ? 'black' : 'black',
            marginTop: 20,
        },
        submitButtonText: {
            fontSize: 18,
            fontWeight: 'bold',
            color: '#FFFFFF',
        },
        label: {
            fontWeight: 'bold',
            marginBottom: 10,
            color: isDarkMode ? '#FFFFFF' : '#000000',
        },
        dimensionInputs: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 4,
        },
        dimensionInput: {
            flex: 1,
            height: 40,
            borderWidth: 1,
            borderRadius: 8,
            paddingHorizontal: 10,
            marginHorizontal: 5,
            backgroundColor: isDarkMode ? '#374151' : '#E5E7EB',
            color: isDarkMode ? '#FFFFFF' : '#000000',
        },
        checkboxContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 10,
            padding: 12,
        },
        checkbox: {
            width: 18,
            height: 18,
            borderWidth: 1,
            borderRadius: 4,
            borderColor: '#000000',
            backgroundColor: '#fff',
            marginRight: 10,
        },
        checkboxChecked: {
            borderColor: "#000000",
            backgroundColor: 'green',
        },
        checkboxLabel: {
            fontSize: 14,
            fontWeight:"bold"
        },
    });


export default createStyles;