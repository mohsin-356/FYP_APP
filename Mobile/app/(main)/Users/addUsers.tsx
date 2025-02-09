import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Image,
    Alert
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import ToastMessage, { showToast } from '@/components/ToastMessage'; // Import Toast
import styles from '@/Styles/User/addUser';

import axios from 'axios'; // 🆕 Axios imported directly
const API_BASE_URL = 'http://10.13.23.2:3000/api/v1/user'; // 🆕 Your backend API URL



const AddUser = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [cnic, setCnic] = useState('');
    const [address, setAddress] = useState({
        street: '',
        city: '',
        state: '',
        province: '',
        postalCode: '',
    });
    const [image, setImage] = useState<string | null>(null);

    const roles = ['Admin', 'Manager', 'Supplier', 'Worker'];

 const handleImagePick = async (): Promise<void> => {
    // Request permission
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
    if (status !== 'granted') {
        Alert.alert('Permission Required', 'Please grant media library access.');
        return;
    }

    // Open Image Picker
    const result: ImagePicker.ImagePickerResult = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
    });

    console.log("Image Picker Result:", result); // Debugging ke liye log karein

    // ✅ Ensure assets array is present
    if (!result.canceled && result.assets && result.assets.length > 0) {
        console.log("Selected Image URI:", result.assets[0].uri);
        setImage(result.assets[0].uri);
    } else {
        console.log("No image selected.");
    }
};

    const handleSubmit =async () => {
        if (!userName || !email || !phone || !password || !role || !cnic) {
            showToast('error', 'Error: Please fill in all fields!');
            return;
        }

        console.log('User Data:', {
            userName,
            email,
            phone,
            password,
            role,
            cnic,
            address,
            image,
        });

        const userData = {
            userName,
            email,
            phone,
            password,
            role,
            cnic,
            address,
            image,
        };

        try {
            const response = await axios.post(`${API_BASE_URL}/addUser`, userData, {
                headers: { 'Content-Type': 'application/json' },
            });

            showToast('success', response.data.message);

            // Reset fields
            setUserName('');
            setEmail('');
            setPhone('');
            setPassword('');
            setRole('');
            setCnic('');
            setAddress({
                street: '',
                city: '',
                state: '',
                province: '',
                postalCode: '',
            });
            setImage(null);
        } catch (error) {
           showToast('error', 'Error: Failed to add user!');
            console.error(error);
        }
    };

    return (
        <>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <View style={styles.inputGroup}>
                    {/* Image Picker */}
                    <View style={styles.imagePickerContainer}>
                        <TouchableOpacity onPress={handleImagePick} style={styles.imagePickerButton}>
                            {image ? (
                                <Image source={{ uri: image }} style={styles.imagePreview} />
                            ) : (
                                <Ionicons name="camera" size={36} color="#fff" />
                            )}
                        </TouchableOpacity>
                    </View>

                    {/* Username Input */}
                    <View style={styles.inputWrapper}>
                        <Ionicons name="person" size={24} />
                        <TextInput
                            style={styles.input}
                            placeholder="Full Name"
                            value={userName}
                            onChangeText={setUserName}
                        />
                    </View>

                    {/* Email Input */}
                    <View style={styles.inputWrapper}>
                        <Ionicons name="mail" size={24} />
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            keyboardType="email-address"
                            value={email}
                            onChangeText={setEmail}
                        />
                    </View>

                    {/* Phone Input */}
                    <View style={styles.inputWrapper}>
                        <Ionicons name="call" size={24} />
                        <TextInput
                            style={styles.input}
                            placeholder="Phone"
                            keyboardType="phone-pad"
                            value={phone}
                            onChangeText={setPhone}
                        />
                    </View>

                    {/* Password Input */}
                    <View style={styles.inputWrapper}>
                        <Ionicons name="lock-closed" size={24} />
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            secureTextEntry
                            value={password}
                            onChangeText={setPassword}
                        />
                    </View>

                    {/* CNIC Input */}
                    <View style={styles.inputWrapper}>
                        <Ionicons name="card" size={24} />
                        <TextInput
                            style={styles.input}
                            placeholder="CNIC"
                            keyboardType="number-pad"
                            value={cnic}
                            onChangeText={setCnic}
                        />
                    </View>

                    {/* Address Inputs */}
                    <Text style={styles.sectionTitle}>Address</Text>
                    {['street', 'city', 'state', 'province', 'postalCode'].map((field) => (
                        <View style={styles.inputWrapper} key={field}>
                            <Ionicons name="location" size={24} />
                            <TextInput
                                style={styles.input}
                                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                                onChangeText={(value) =>
                                    setAddress((prev) => ({ ...prev, [field]: value }))
                                }
                            />
                        </View>
                    ))}

                    {/* Role Picker */}
                    <View style={styles.inputWrapper}>
                        <Ionicons name="briefcase" size={24} />
                        <View style={styles.pickerWrapper}>
                            <Picker
                                selectedValue={role}
                                onValueChange={(itemValue) => setRole(itemValue)}
                                style={styles.picker}

                            >
                                <Picker.Item label="Select Role" value="" />

                                {roles.map((r) => (
                                    <Picker.Item key={r} label={r} value={r} />
                                ))}
                            </Picker>
                        </View>
                    </View>

                    {/* Submit Button */}
                    <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                        <Text style={styles.submitButtonText}>Add User</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <ToastMessage />
        </>
    );
};

export default AddUser;
