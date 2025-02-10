import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    Modal,
    Button,
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router"; // ✅ Get `id` from URL
import axios from "axios";
import { FontAwesome } from "@expo/vector-icons";
import styles from "@/Styles/User/userProfile";
import ToastMessage, { showToast } from "@/components/ToastMessage";

const API_BASE_URL = "http://10.13.23.2:3000/api/v1/user"; // ✅ Make sure this matches your backend

const UserProfile = () => {
    interface User {
        _id: string;
        userName: string;
        email: string;
        image?: string;
        status: string;
        role: string;
    }
    const router = useRouter();
    const { id } = useLocalSearchParams(); // ✅ Get user ID from URL

    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);

    // ✅ Fetch user details
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/getUser/${id}`);
                setUser(response.data);
            } catch (error) {
                console.error("Error fetching user details:", error);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchUser();
        }
    }, [id]);

    if (loading) {
        return <Text>Loading...</Text>;
    }

    if (!user) {
        return <Text>No user found</Text>;
    }

    const handleEdit = () => {
        router.push(`/Users/updateUser?id=${user._id}`); // ✅ Navigate to edit user page
    };

    const handleDelete = () => {
        setModalVisible(true);
    };

    const confirmDelete = async () => {
        try {
            await axios.delete(`${API_BASE_URL}/deleteUser/${user._id}`);
            showToast("success", "User has been deleted successfully.");
            router.push("/Users"); // ✅ Redirect back to user list
        } catch (error) {
            showToast("error", "Failed to delete user.");
            console.error("Error deleting user:", error);
        }
        setModalVisible(false);
    };

    return (
        <>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <View style={styles.profileSection}>
                        <Image source={{ uri: user.image || "https://via.placeholder.com/150" }} style={styles.profileImage} />
                        <View style={styles.activeBadge}>
                            <Text style={styles.activeBadgeText}>{user.status ? "active" : "Inactive"}</Text>
                        </View>
                    </View>
                    <Text style={styles.userName}>{user.userName}</Text>
                    <Text style={styles.email}>{user.email}</Text>
                </View>

                {/* Info Section */}
                <View style={styles.infoSection}>
                    <Text style={styles.sectionHeader}>Employee Information</Text>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoKey}>Employee Name</Text>
                        <Text style={styles.infoValue}>{user.userName}</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoKey}>Status</Text>
                        <Text style={styles.infoValue}>{user.status ? "active" : "Inactive"}</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoKey}>Role</Text>
                        <Text style={styles.infoValue}>{user.role}</Text>
                    </View>
                </View>

                {/* Buttons Section */}
                <View style={styles.buttonRow}>
                    <TouchableOpacity style={[styles.button, styles.deleteButton]} onPress={handleEdit}>
                        <FontAwesome name="edit" size={20} color="#fff" />
                        <Text style={styles.buttonText}>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.deleteButton]} onPress={handleDelete}>
                        <FontAwesome name="trash" size={20} color="#fff" />
                        <Text style={styles.buttonText}>Delete</Text>
                    </TouchableOpacity>
                </View>

                {/* Delete Confirmation Modal */}
                <Modal visible={modalVisible} animationType="slide" transparent onRequestClose={() => setModalVisible(false)}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <Text style={styles.modalText}>Are you sure you want to delete this user?</Text>
                            <View style={styles.modalButtons}>
                                <Button title="Cancel" color="red" onPress={() => setModalVisible(false)} />
                                <Button title="Confirm" onPress={confirmDelete} color="blue" />
                            </View>
                        </View>
                    </View>
                </Modal>
            </ScrollView>
            <ToastMessage />
        </>
    );
};

export default UserProfile;
