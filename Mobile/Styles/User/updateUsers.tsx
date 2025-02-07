import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: '#fff' },
    inputGroup: { marginBottom: 16 },
    inputWrapper: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
    input: { flex: 1, height: 40, paddingHorizontal: 10, borderWidth: 1, borderRadius: 8, marginLeft: 10 },
    pickerWrapper: { flex: 1,height:40, borderWidth: 1, borderRadius: 8, marginLeft: 10, justifyContent: 'center' },
    picker: { height: 40 },
    submitButton:
    { alignItems: 'center', justifyContent: 'center', 
        height: 40, borderRadius: 8, backgroundColor: 'black',
        marginBottom: 16
     },
    submitButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
    imagePickerContainer: { alignItems: 'center', justifyContent: 'center', marginBottom: 16 },
    imagePickerButton: { width: 100, height: 100, borderRadius: 50, borderWidth: 1, borderColor: '#000', justifyContent: 'center', alignItems: 'center', backgroundColor: 'gray' },
    imagePreview: { width: 100, height: 100, borderRadius: 50 },
    sectionTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 8 },
});
export default styles;