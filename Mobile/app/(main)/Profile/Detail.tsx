import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import { useRouter } from "expo-router";
import styles from '@/Styles/Profile/detailprofile';
const ProfileDetailScreen = () => {
    const router = useRouter();

    const profile = {
        name: "John Doe",
        email: "johndoe@example.com",
        phone: "123-456-7890",
        address: "123 Elm Street",
        dob: "1990-01-01",
        memberSince: "2020-01-01",
        avatar: "https://via.placeholder.com/150",
    };

    const detailSections = [
        { label: 'Full Name', value: profile.name, icon: '👤' },
        { label: 'Email', value: profile.email, icon: '✉️' },
        { label: 'Phone', value: profile.phone, icon: '📞' },
        { label: 'Address', value: profile.address, icon: '🏠' },
        { label: 'Date of Birth', value: profile.dob, icon: '🎂' },
        { label: 'Membership Since', value: profile.memberSince, icon: '🕒' },
    ];

    return (
        <View style={styles.container}>
           
                <ScrollView
                    contentContainerStyle={styles.scrollViewContent}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.card}>
                        <View style={styles.profileInfo}>
                            <View style={styles.avatarContainer}>
                                <Image
                                    source={{ uri: profile.avatar }}
                                    style={styles.avatar}
                                />
                            </View>
                            <Text style={styles.name}>{profile.name}</Text>
                            <Text style={styles.email}>{profile.email}</Text>
                        </View>

                        {detailSections.map((section, index) => (
                            <View
                                key={index}
                                style={styles.detailSection}
                            >
                                <View style={styles.detailContent}>
                                    <Text style={styles.detailIcon}>{section.icon}</Text>
                                    <View>
                                        <Text style={styles.detailLabel}>{section.label}</Text>
                                        <Text style={styles.detailValue}>{section.value}</Text>
                                    </View>
                                </View>
                            </View>
                        ))}

                        <View style={styles.actionButtons}>
                            <TouchableOpacity
                                style={[styles.button, styles.closeButton]}
                                onPress={() => router.back()}
                            >
                                <Text style={styles.buttonText}>Close</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.button, styles.editButton]}
                                onPress={() => router.push('./Edit')}
                            >
                                <Text style={styles.buttonText}>Edit Profile</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
           
        </View>
    );
};



export default ProfileDetailScreen;