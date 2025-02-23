import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Image,
    Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import ToastMessage, { showToast } from "@/components/ToastMessage";
import { useRouter, useLocalSearchParams } from "expo-router";
import axios from "axios";
import styles from "@/Styles/User/updateUsers";

const API_BASE_URL = "http://10.13.52.95:3000/api/v1/user";

const UpdateUser = () => {
    const router = useRouter();
    const { id } = useLocalSearchParams(); // User ID mil raha hai

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const [cnic, setCnic] = useState("");
    const [address, setAddress] = useState({
        street: "",
        city: "",
        state: "",
        province: "",
        postalCode: "",
    });
    const [image, setImage] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    
    const roles = ["Admin", "Manager", "Supplier", "Worker"];

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/getUser/${id}`);
                const user = response.data;
                setUserName(user.userName);
                setEmail(user.email);
                setPhone(user.phone);
                setRole(user.role);
                setCnic(user.cnic);
                setAddress(user.address || {});
                setImage(user.image || null);
            } catch (error) {
                console.error("Error fetching user:", error);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchUser();
        }
    }, [id]);

    const handleImagePick = async (): Promise<void> => {
        // Permission check
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (status !== "granted") {
            Alert.alert("Permission Required", "Please grant media library access.");
            return;
        }

        // Open Image Picker
        const result: ImagePicker.ImagePickerResult = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log("Image Picker Result:", result);

        // ✅ Ensure assets array is present
        if (!result.canceled && result.assets && result.assets.length > 0) {
            console.log("Selected Image URI:", result.assets[0].uri);
            setImage(result.assets[0].uri);
        } else {
            console.log("No image selected.");
        }
    };

    // const handleUpdate = async () => {
    //     if (!userName || !email || !phone || !role || !cnic) {
    //         showToast("error", "Please fill in all fields.");
    //         return;
    //     }

    //     const userData = {
    //         userName,
    //         email,
    //         phone,
    //         password,
    //         role,
    //         cnic,
    //         address,
    //         image,
    //     };

    //     try {
    //         const response = await axios.patch(`${API_BASE_URL}/updateUser/${id}`, userData, {
    //             headers: { "Content-Type": "application/json" },
    //         });

    //         showToast("success", response.data.message);
    //         router.push("/Users"); // Navigate back to users list
    //     } catch (error) {
    //         showToast("error", "Failed to update user.");
    //         console.error("Update error:", error);
    //     }
    // };
    const handleUpdate = async () => {
        if (!userName && !email && !phone && !role && !cnic) {
            showToast("error", "Please provide at least one field to update.");
            return;
        }
    
        // Create an object and remove empty fields
        const userData: Record<string, any> = { userName, email, phone, password, role, cnic, address, image };
        Object.keys(userData).forEach((key) => {
            if (!userData[key]) {
                delete userData[key]; // Remove empty fields
            }
        });
    
        try {
            const response = await axios.patch(`${API_BASE_URL}/updateUser/${id}`, userData, {
                headers: { "Content-Type": "application/json" },
            });
    
            showToast("success", response.data.message);
            router.push("/Users"); // Navigate back to users list
        } catch (error) {
            showToast("error", "Failed to update user.");
            console.error("Update error:", error);
        }
    };
    
    if (loading) {
        return <Text>Loading...</Text>;
    }

    return (
        <>
            <ScrollView style={styles.container}>
                <View style={styles.inputGroup}>
                    {/* Image Picker */}
                    <View style={styles.imagePickerContainer}>
                        <TouchableOpacity onPress={handleImagePick} style={styles.imagePickerButton}>
                            {image ? <Image source={{ uri: image }} style={styles.imagePreview} /> : <Ionicons name="camera" size={36} color="#fff" />}
                        </TouchableOpacity>
                    </View>

                    {/* Username Input */}
                    <View style={styles.inputWrapper}>
                        <Ionicons name="person" size={24} />
                        <TextInput style={styles.input} placeholder="Full Name" value={userName} onChangeText={setUserName} />
                    </View>

                    {/* Email Input */}
                    <View style={styles.inputWrapper}>
                        <Ionicons name="mail" size={24} />
                        <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" value={email} onChangeText={setEmail} />
                    </View>

                    {/* Phone Input */}
                    <View style={styles.inputWrapper}>
                        <Ionicons name="call" size={24} />
                        <TextInput style={styles.input} placeholder="Phone" keyboardType="phone-pad" value={phone} onChangeText={setPhone} />
                    </View>

                    {/* Password Input */}
                    <View style={styles.inputWrapper}>
                        <Ionicons name="lock-closed" size={24} />
                        <TextInput style={styles.input} placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />
                    </View>

                    {/* CNIC Input */}
                    <View style={styles.inputWrapper}>
                        <Ionicons name="card" size={24} />
                        <TextInput style={styles.input} placeholder="CNIC" keyboardType="number-pad" value={cnic} onChangeText={setCnic} />
                    </View>

                    {/* Address Inputs */}
                    <Text style={styles.sectionTitle}>Address</Text>
                    {["street", "city", "state", "province", "postalCode"].map((field) => (
                        <View style={styles.inputWrapper} key={field}>
                            <Ionicons name="location" size={24} />
                            <TextInput
                                style={styles.input}
                                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                                onChangeText={(value) => setAddress((prev) => ({ ...prev, [field]: value }))}
                            />
                        </View>
                    ))}

                    {/* Role Picker */}
                    <View style={styles.inputWrapper}>
                        <Ionicons name="briefcase" size={24} />
                        <View style={styles.pickerWrapper}>
                            <Picker selectedValue={role} onValueChange={(itemValue) => setRole(itemValue)} style={styles.picker}>
                                <Picker.Item label="Select Role" value="" />
                                {roles.map((r) => (
                                    <Picker.Item key={r} label={r} value={r} />
                                ))}
                            </Picker>
                        </View>
                    </View>

                    {/* Submit Button */}
                    <TouchableOpacity style={styles.submitButton} onPress={handleUpdate}>
                        <Text style={styles.submitButtonText}>Update User</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <ToastMessage />
        </>
    );
};

export default UpdateUser;
