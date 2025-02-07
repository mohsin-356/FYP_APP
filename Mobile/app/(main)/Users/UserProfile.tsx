import React, { useState } from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    Modal,
    Button,
} from "react-native";
import { useRouter } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import styles from "@/Styles/User/userProfile";
import ToastMessage,{showToast} from "@/components/ToastMessage";
const UserProfile = () => {
    const router = useRouter();
    const [modalVisible, setModalVisible] = useState(false);

    const handleEdit = () => {
        router.push('./updateUser'); // Replace with your actual edit route
    };

    const handleDelete = () => {
        setModalVisible(true);
    };

    const confirmDelete = () => {
        setModalVisible(false);
        showToast("success", "User has been deleted successfully.");
      
    };

    return (
        <>
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.header}>
                <View style={styles.profileSection}>
                    <Image
                        source={{
                            uri: "hh", 
                        }}
                        style={styles.profileImage}
                    />
                    <View style={styles.activeBadge}>
                        <Text style={styles.activeBadgeText}>Active</Text>
                    </View>
                </View>
                <Text style={styles.userName}>Mohsin</Text>
                <Text style={styles.email}>za50@gmail.com</Text>
            </View>

            {/* Info Section */}
            <View style={styles.infoSection}>
                {/* Supplier Info */}
                <Text style={styles.sectionHeader}>Employee Information</Text>
                <View style={styles.infoRow}>
                    <Text style={styles.infoKey}>Employee Name</Text>
                    <Text style={styles.infoValue}>Mohsin</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.infoKey}>Status</Text>
                    <Text style={styles.infoValue}>Active</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.infoKey}>Supplier ID</Text>
                    <Text style={styles.infoValue}>SUP12345</Text>
                </View>

                {/* Contact Info */}
                <Text style={styles.sectionHeader}>Contact Info</Text>
                <View style={styles.infoRow}>
                    <Text style={styles.infoKey}>Phone</Text>
                    <Text style={styles.infoValue}>+92 300 1234567</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.infoKey}>WhatsApp</Text>
                    <Text style={styles.infoValue}>+92 300 1234567</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.infoKey}>Address</Text>
                    <Text style={styles.infoValue}>Street 45, Lahore, Pakistan</Text>
                </View>

                {/* Business Info */}
                <Text style={styles.sectionHeader}>Business Info</Text>
                <View style={styles.infoRow}>
                    <Text style={styles.infoKey}>Total Orders</Text>
                    <Text style={styles.infoValue}>120</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.infoKey}>Pending Orders</Text>
                    <Text style={styles.infoValue}>5</Text>
                </View>
            </View>

            {/* Buttons Section */}
            <View style={styles.buttonRow}>
                <TouchableOpacity style={[styles.button ,styles.deleteButton]} onPress={handleEdit}>
                    <FontAwesome name="edit" size={20} color="#fff" />
                    <Text style={styles.buttonText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.deleteButton]} onPress={handleDelete}>
                    <FontAwesome name="trash" size={20} color="#fff" />
                    <Text style={styles.buttonText}>Delete</Text>
                </TouchableOpacity>
            </View>

            {/* Delete Confirmation Modal */}
            <Modal
                visible={modalVisible}
                animationType="slide"
                transparent
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>Are you sure you want to delete this user?</Text>
                        <View style={styles.modalButtons}>
                                <Button  title="Cancel" color="red" onPress={() => setModalVisible(false)} />
                                    
                                <Button  title="Confirm" onPress={confirmDelete} color="blue" />
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
