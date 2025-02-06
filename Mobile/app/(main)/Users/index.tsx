import React, { useState } from 'react';
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
const UserIndexPage = () => {
    interface User {
        id: string;
        name: string;
        email: string;
        role: string;
        status: string;
        image: string;
    }
    const [users, setUsers] = useState<User[]>([
        {
            id: '1',
            name: 'Mohsin',
            email: 'mohsin@example.com',
            role: 'Admin',
            status: 'Active',
            image: 'https://via.placeholder.com/50', // Replace with actual image URL
        },
        {
            id: '2',
            name: 'Rebal',
            email: 'rebal@example.com',
            role: 'User',
            status: 'Inactive',
            image: 'https://via.placeholder.com/50', // Replace with actual image URL
        },
        // Add more users here...
    ]);

    const [searchQuery, setSearchQuery] = useState('');

    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase())
    );
const router=useRouter();
    const renderUserItem = ({ item }: { item: User }) => (
        <View
            style={styles.userItem}
           
        >
            <Image source={{ uri: item.image }} style={styles.userImage} />
            <View style={styles.userInfo}>
                <Text style={styles.userName}>{item.name}</Text>
                <Text style={styles.userEmail}>{item.email}</Text>
                <View style={styles.userTags}>
                    <Text style={[styles.tag, item.role === 'Admin' ? styles.adminTag : styles.userTag]}>
                        {item.role}
                    </Text>
                    <Text style={[styles.tag, item.status === 'Active' ? styles.activeTag : styles.inactiveTag]}>
                        {item.status}
                    </Text>
                </View>
            </View>
            <TouchableOpacity onPress={() => router.push('./Users/UserProfile')}>
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
                keyExtractor={(item) => item.id}
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