import React, { useState,useEffect } from 'react';
import axios from 'axios'; 
import {
    View,
    Text,
    FlatList,
    Image,
    TouchableOpacity,
    SafeAreaView,
    TextInput,
    StyleSheet,
} from 'react-native';
import { Search, Filter, ChevronRight, Plus } from 'lucide-react-native';
import { useRouter } from 'expo-router';
import styles from '@/Styles/User/user';
const API_BASE_URL = 'http://10.13.52.95:3000/api/v1/user'; 
const UserIndexPage = () => {
    interface User {
        _id: string;
        userName: string;
        email: string;
        role: string;
        status: string;
        image: string;
    }
    
    const [users, setUsers] = useState<User[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const router=useRouter();
    
    // ✅ Fetch Users from API
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/getUsers`);

                setUsers(response.data); // ✅ Update State with API Data
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };
        
        fetchUsers();
    }, []); // ✅ Runs once when component mounts
    const filteredUsers = users.filter((user) =>
        user.userName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())

);
const renderUserItem = ({ item }: { item: User }) => (
    <View style={styles.userItem}>
            <Image source={{ uri: item.image || "https://via.placeholder.com/50" }} style={styles.userImage} />
            <View style={styles.userInfo}>
                <Text style={styles.userName}>{item.userName}</Text>
                <Text style={styles.userEmail}>{item.email}</Text>
                <View style={styles.userTags}>
                    <Text style={[styles.tag, item.role === 'Admin' ? styles.adminTag : styles.userTag]}>
                        {item.role}
                    </Text>
                    <Text style={[styles.tag, item.status ==='active' ? styles.activeTag : styles.inactiveTag]}>
                        {item.status}
                    </Text>
                </View>
            </View>
            <TouchableOpacity onPress={() => router.push(`/Users/UserProfile?id=${item._id}`)}>
                <View style={styles.chevron}>
                    <ChevronRight color="black" size={30} />
                </View>
            </TouchableOpacity>
        </View>
    );

       return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.searchBar}>
                    <TextInput
                        placeholder="Search users..."
                        placeholderTextColor="#9CA3AF"
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                        style={styles.searchInput}
                    />
                    <TouchableOpacity style={styles.filterButton}>
                        <Search color="#ffffff" size={20} />
                    </TouchableOpacity>
                </View>
            </View>

            <FlatList
                data={filteredUsers}
                renderItem={renderUserItem}
                keyExtractor={(item) => item._id}
                contentContainerStyle={styles.listContent}
                ListEmptyComponent={() => (
                    <View style={styles.emptyList}>
                        <Text style={styles.emptyText}>No users found</Text>
                    </View>
                )}
            />

            <TouchableOpacity
                style={styles.fab}
                onPress={() => router.push('./Users/addUsers')}
            >
                <Plus color="white" size={24} />
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default UserIndexPage;