import React, { useState } from 'react';
import {
    View,
    TextInput,
    TouchableOpacity,
    Text,
    ScrollView,
    Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import styles from '@/Styles/Auth/sighnUp';
export default function RegisterScreen() {
    const router = useRouter();
    const [form, setForm] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        street: '',
        city: '',
        state: '',
        postalCode: '',
        cnic: '',
        picture: ''
    });

    const [secureText, setSecureText] = useState(true);
    const [image, setImage] = useState(null);

    const handleInputChange = (name:any, value:any) => {
        setForm({ ...form, [name]: value });
    };

    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            // setImage(result.assets[0].uri);
            handleInputChange('picture', result.assets[0].uri);
        }
    };

    const handleRegister = async () => {
        console.log('Register:');
        try {
            console.log('Now in try catch');
            const IP = 'http://10.13.23.2:3000'; // Replace with your local machine's IP address
            // const response = await axios.post(`${IP}/api/v1/auth/signup`, form);
            // Alert.alert('Success', 'Registration successful');
            // Form validation ka code yahan add kar sakte hain
            const formData={
                fullName: form.fullName,
                email: form.email,
                password: form.password,
                confirmPassword: form.confirmPassword,
                street: form.street,
                city: form.city,
                state: form.state,
                postalCode: form.postalCode,
                cnic: form.cnic,
                picture: form.picture,
            }
            const response = await axios.post(`${IP}/api/v1/auth/signup`, formData);
    
            console.log('Registration successful:', response.data);
            // Success ke baad app login page par navigate kar sakte hain
            // router.push('/login');
    
        } catch (error) {
            // console.error('Registration failed:', error.response?.data || error.message);
            // Yahan par error handling ka code add kar sakte hain
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.formContainer}>
                <View style={styles.logoContainer}>
                    <Ionicons name="person-add" size={80} color="#000" />
                </View>
                <Text style={styles.title}>Create an Account</Text>

                {/* Image Upload Section */}
                <TouchableOpacity style={styles.imageUploadContainer} onPress={pickImage}>
                    {image ? (
                        <Image source={{ uri: image }} style={styles.uploadedImage} />
                    ) : (
                        <>
                            <Ionicons name="camera" size={30} color="#000" />
                            <Text style={styles.uploadText}>Upload Image</Text>
                        </>
                    )}
                </TouchableOpacity>

                <View style={styles.inputContainer}>
                    <Ionicons name="person" size={20} color="#000" style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Full Name"
                        placeholderTextColor="#666"
                        value={form.fullName}
                        onChangeText={(text) => handleInputChange('fullName', text)}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Ionicons name="mail" size={20} color="#000" style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        placeholderTextColor="#666"
                        value={form.email}
                        onChangeText={(text) => handleInputChange('email', text)}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Ionicons name="lock-closed" size={20} color="#000" style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        placeholderTextColor="#666"
                        value={form.password}
                        onChangeText={(text) => handleInputChange('password', text)}
                        secureTextEntry={secureText}
                    />
                    <TouchableOpacity
                        onPress={() => setSecureText(!secureText)}
                        style={styles.eyeIcon}
                    >
                        <Ionicons
                            name={secureText ? 'eye-off' : 'eye'}
                            size={20}
                            color="#000"
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.inputContainer}>
                    <Ionicons name="lock-closed" size={20} color="#000" style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder=" Confirm Password"
                        placeholderTextColor="#666"
                        value={form.confirmPassword}
                        onChangeText={(text) => handleInputChange('confirmPassword', text)}
                        secureTextEntry={secureText}
                    />
                    <TouchableOpacity
                        onPress={() => setSecureText(!secureText)}
                        style={styles.eyeIcon}
                    >
                        <Ionicons
                            name={secureText ? 'eye-off' : 'eye'}
                            size={20}
                            color="#000"
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.inputContainer}>
                    <Ionicons name="home" size={20} color="#000" style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Street Address"
                        placeholderTextColor="#666"
                        value={form.street}
                        onChangeText={(text) => handleInputChange('street', text)}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Ionicons name="location" size={20} color="#000" style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder="City"
                        placeholderTextColor="#666"
                        value={form.city}
                        onChangeText={(text) => handleInputChange('city', text)}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Ionicons name="map" size={20} color="#000" style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder="State"
                        placeholderTextColor="#666"
                        value={form.state}
                        onChangeText={(text) => handleInputChange('state', text)}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Ionicons name="pin" size={20} color="#000" style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Postal Code"
                        placeholderTextColor="#666"
                        value={form.postalCode}
                        onChangeText={(text) => handleInputChange('postalCode', text)}
                        keyboardType="numeric"
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Ionicons name="card" size={20} color="#000" style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder="CNIC"
                        placeholderTextColor="#666"
                        value={form.cnic}
                        onChangeText={(text) => handleInputChange('cnic', text)}
                        keyboardType="numeric"
                    />
                </View>

                <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
                    <Ionicons name="checkmark-circle" size={20} color="#fff" style={styles.buttonIcon} />
                    <Text style={styles.registerButtonText}>Register</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.loginLink} 
                    onPress={() => router.back()}
                >
                    <Text style={styles.loginLinkText}>
                        Already have an account? <Text style={styles.boldText}>Login</Text>
                    </Text>

                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
