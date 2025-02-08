import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    Modal,
} from 'react-native';
import {
    User,
    Settings,
    LogOut,
    Bell,
    Lock,
    Edit,
    Eye,
    Trash2,
    RefreshCw,
    Activity,
    Globe,
    Sun,
    Moon
} from 'lucide-react-native';
import { useRouter } from 'expo-router';
import styles from '@/Styles/Profile/indexprofile';
import ToastMessage, { showToast } from '@/components/ToastMessage';
const ProfileScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const handleDelete = () => {
        console.log('Profile deleted');
        setModalVisible(false);
    };

    const router = useRouter();

    const menuItems = [
        {
            icon: <Eye color="#3B82F6" size={24} />,
            title: 'View Profile',
            onPress: () => router.push('./Profile/Detail')
        },
        {
            icon: <Edit color="#22C55E" size={24} />,
            title: 'Edit Profile',
            onPress: () => router.push('./Profile/Edit')
        },
        {
            icon: <Trash2 color="#EF4444" size={24} />,
            title: 'Delete Profile',
            onPress: () => setModalVisible(true)
        },
    ];

    const settingsOptions = [
        {
            icon: <Lock color="#8B5CF6" size={24} />,
            title: 'Change Password',
            onPress: () => console.log('Change Password')
        },
        {
            icon: <Bell color="#EAB308" size={24} />,
            title: 'Notification Preferences',
            onPress: () => console.log('Notification Preferences')
        }
    ];

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.scrollViewContent}
        >
            <View style={styles.profileCard}>
                {/* Profile Header */}
                <View style={styles.headerContainer}>
                    <View style={styles.headerActions}>
                        <TouchableOpacity
                            style={styles.headerActionButton}
                            onPress={() => showToast('success','Logout functionality added')}
                        >
                            <LogOut color="white" />
                        </TouchableOpacity>
                    </View>

                    <Image
                        source={{ uri: '/api/placeholder/128/128' }}
                        style={styles.profileImage}
                    />
                    <Text style={styles.profileName}>Mohsin Khan</Text>
                    <Text style={styles.profileEmail}>mohsin@gmail.com</Text>
                    <View style={styles.roleContainer}>
                        <Text style={styles.roleText}>Admin</Text>
                    </View>
                </View>

                {/* Recent Activities */}
                <View style={styles.sectionContainer}>
                    <View style={styles.sectionTitleContainer}>
                        <Activity color="#3B82F6" style={styles.sectionIcon} />
                        <Text style={styles.sectionTitle}>Recent Activities</Text>
                    </View>
                    <View style={styles.activitiesContainer}>
                        <View style={styles.activityItem}>
                            <Globe color="#22C55E" style={styles.activityIcon} />
                            <Text style={styles.activityText}>Logged in at 10:00 AM</Text>
                        </View>
                        <View style={styles.activityItem}>
                            <RefreshCw color="#8B5CF6" style={styles.activityIcon} />
                            <Text style={styles.activityText}>Updated profile details on 12th Dec</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.settingsContainer}>
                    <View style={styles.sectionTitleContainer}>
                        <Settings color="#6B7280" style={styles.sectionIcon} />
                        <Text style={styles.sectionTitle}>Profile Info</Text>
                    </View>
                    {menuItems.map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={item.onPress}
                            style={styles.menuItem}
                        >
                            {item.icon}
                            <Text style={styles.menuItemText}>{item.title}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Account Settings */}
                <View style={styles.settingsContainer}>
                    <View style={styles.sectionTitleContainer}>
                        <Settings color="#6B7280" style={styles.sectionIcon} />
                        <Text style={styles.sectionTitle}>Account Settings</Text>
                    </View>
                    {settingsOptions.map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            style={styles.settingsOption}
                            onPress={item.onPress}
                        >
                            {item.icon}
                            <Text style={styles.settingsOptionText}>{item.title}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Delete Modal */}
                <Modal
                    transparent={true}
                    visible={modalVisible}
                    animationType="slide"
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View style={styles.modalOverlay}>
                        <View style={styles.modalContent}>
                            <Trash2 color="#EF4444" size={50} style={styles.modalIcon} />
                            <Text style={styles.modalTitle}>Delete Profile</Text>
                            <Text style={styles.modalDescription}>
                                Are you sure you want to delete your profile? This action cannot be undone.
                            </Text>
                            <View style={styles.modalActions}>
                                <TouchableOpacity
                                    style={styles.modalCancelButton}
                                    onPress={() => setModalVisible(false)}
                                >
                                    <Text style={styles.modalCancelButtonText}>Cancel</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.modalDeleteButton}
                                    onPress={handleDelete}
                                >
                                    <Text style={styles.modalDeleteButtonText}>Delete</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
            <ToastMessage />
        </ScrollView>
    );
};



export default ProfileScreen;
