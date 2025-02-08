import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';
import styles from '@/Styles/Profile/updateProfile';
const ProfileEditScreen = () => {
    // Initial mock data for the form
    const [formData, setFormData] = useState({
        name: 'John Doe',
        email: 'johndoe@example.com',
        phone: '+1234567890',
        address: '123 Main Street, Anytown',
        avatar: 'https://via.placeholder.com/120',
    });

    // Update form data dynamically
    const handleInputChange = (field:any, value:any) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    // Input fields configuration
    const inputFields = [
        { label: 'Full Name', key: 'name', placeholder: 'Enter your name' },
        { label: 'Email', key: 'email', placeholder: 'Enter your email' },
        { label: 'Phone', key: 'phone', placeholder: 'Enter your phone number' },
        { label: 'Address', key: 'address', placeholder: 'Enter your address' },
    ];

    // Cancel action
    const onCancel = () => {
        // Reset form data or navigate back
        console.log('Edit canceled');
    };

    // Save action
    const onSave = () => {
        // Save changes logic here
        console.log('Saved changes:', formData);
    };

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.avatarContainer}>
                    <Image source={{ uri: formData.avatar }} style={styles.avatar} />
                    <TouchableOpacity style={styles.avatarUpload}>
                        <Text style={styles.uploadText}>📷</Text>
                    </TouchableOpacity>
                </View>

                {inputFields.map((field) => (
                    <View key={field.key} style={styles.inputContainer}>
                        <Text style={styles.label}>{field.label}</Text>
                        <TextInput
                            style={styles.input}
                            // n           
                            placeholder={field.placeholder}
                            onChangeText={(value) => handleInputChange(field.key, value)}
                        />
                    </View>
                ))}

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
                        <Text style={styles.buttonTextCancel}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.saveButton} onPress={onSave}>
                        <Text style={styles.buttonTextSave}>Save Changes</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};


export default ProfileEditScreen;
