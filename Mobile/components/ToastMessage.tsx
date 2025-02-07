import React from 'react';
import Toast, { BaseToast } from 'react-native-toast-message';
import { Ionicons } from '@expo/vector-icons';

// Custom Toast Config
const toastConfig = {
    success: ({ text1 }: { text1: string }) => (
        <BaseToast
            style={{
                borderLeftColor: 'green',
                backgroundColor: '#ffffff',
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 10,
                paddingHorizontal: 15,
            }}
            contentContainerStyle={{
                paddingHorizontal: 10,
                flexDirection: 'row',
                alignItems: 'center',
            }}
            text1Style={{
                fontSize: 14,
                fontWeight: 'bold',
                color: 'green',
                marginLeft: 10,
            }}
            text1={text1}
            renderLeadingIcon={() => (
                <Ionicons name="checkmark-circle" size={24} color="green" />
            )}
        />
    ),
    error: ({ text1 }: { text1: string }) => (
        <BaseToast
            style={{
                borderLeftColor: 'red',
                backgroundColor: '#ffffff',
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 10,
                paddingHorizontal: 15,
            }}
            contentContainerStyle={{
                paddingHorizontal: 10,
                flexDirection: 'row',
                alignItems: 'center',
            }}
            text1Style={{
                fontSize: 14,
                fontWeight: 'bold',
                color: 'red',
                marginLeft: 10,
            }}
            text1={text1}
            renderLeadingIcon={() => (
                <Ionicons name="close-circle" size={24} color="red" />
            )}
        />
    ),
};

// Toast Component
const ToastMessage = () => {
    return <Toast config={toastConfig} />;
};

export const showToast = (type: 'success' | 'error', text: string) => {
    Toast.show({
        type,
        text1: text,
        position: 'top',
        visibilityTime: 3000,
        topOffset: 10,
    });
};


export default ToastMessage;
