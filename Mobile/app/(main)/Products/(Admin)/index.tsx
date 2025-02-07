import React, { useState, useRef } from "react";
import {
    View,
    Text,
    Image,
    FlatList,
    TouchableOpacity,
    TextInput,
    Modal,
    Platform,
    Animated,
    StatusBar,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { useSettings } from "@/themes/SettingsContext";
import styles from "@/Styles/Products/productindex";
import ToastMessage,{showToast} from "@/components/ToastMessage";
const ProductsPage = () => {
    const router = useRouter();
    const { isDarkMode } = useSettings();
    const [searchQuery, setSearchQuery] = useState("");
    const [menuVisible, setMenuVisible] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const scaleAnim = useRef(new Animated.Value(1)).current;

    const products = [
        {
            id: 1,
            name: "Premium Gadget",
            price: "100",
            SKU: "7",
            image: "https://via.placeholder.com/50",
            status: "In Stock",
            description: "High-end tech marvel with cutting-edge features",
        },
       
        {
            id: 3,
            name: "Elite Accessory",
            price: "150",
            image: "https://via.placeholder.com/50",
            status: "Out of Stock",
            SKU: "7",
            description: "Sophisticated accessory designed for discerning users",
        },
        {
            id: 4,
            name: "Elite Accessory",
            price: "150",
            image: "https://via.placeholder.com/50",
            status: "Out of Stock",
            SKU: "7",
            description: "Sophisticated accessory designed for discerning users",
        },
        {
            id: 5,
            name: "Elite Accessory",
            price: "150",
            image: "https://via.placeholder.com/50",
            status: "Out of Stock",
            SKU: "7",
            description: "Sophisticated accessory designed for discerning users",
        },
    ];

    const handleSearch = (text: string) => {
        setSearchQuery(text);
    };

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const openMenu = (product: any) => {
        setSelectedProduct(product);
        setMenuVisible(true);
    };

    const handlePressIn = () => {
        Animated.spring(scaleAnim, {
            toValue: 0.95,
            useNativeDriver: true,
        }).start();
    };

    const handlePressOut = () => {
        Animated.spring(scaleAnim, {
            toValue: 1,
            friction: 3,
            tension: 40,
            useNativeDriver: true,
        }).start();
    };

    const renderProductCard = ({ item }: { item: any }) => (
        <Animated.View
            style={[
                styles.card,
                {
                    transform: [{ scale: scaleAnim }],
                    backgroundColor: isDarkMode ? "#1F2937" : "#FFFFFF",
                },
            ]}
        >
            <TouchableOpacity
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}
                activeOpacity={0.8}
            >
                <View style={styles.cardContent}>
                    <Image
                        source={{ uri: item.image }}
                        style={styles.productImage}
                        blurRadius={Platform.OS === "ios" ? 1 : 0}
                    />
                    <View style={styles.productDetails}>
                        <Text
                            style={[
                                styles.productName,
                                { color: isDarkMode ? "#FFFFFF" : "#1F2937" },
                            ]}
                            numberOfLines={1}
                        >
                            {item.name}
                        </Text>
                        <View style={styles.priceRow}>
                            <Text
                                style={[
                                    styles.priceText,
                                    { color: isDarkMode ? "#D1FAE5" : "#10b981" },
                                ]}
                            >
                                Rs {item.price}
                            </Text>
                            <Text
                                style={[
                                    styles.skuText,
                                    { color: isDarkMode ? "#9CA3AF" : "#6B7280" },
                                ]}
                            >
                                SKU: {item.SKU}
                            </Text>
                        </View>
                        <View
                            style={[
                                styles.statusBadge,
                                item.status === "In Stock"
                                    ? styles.inStockBadge
                                    : styles.outOfStockBadge,
                            ]}
                        >
                            <Text
                                style={[
                                    styles.statusText,
                                    item.status === "In Stock"
                                        ? styles.inStockText
                                        : styles.outOfStockText,
                                ]}
                            >
                                {item.status}
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={() => openMenu(item)}
                        style={styles.menuTouchable}
                    >
                        <Ionicons
                            name="ellipsis-vertical"
                            size={24}
                            color={isDarkMode ? "#9CA3AF" : "#6B7280"}
                        />
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        </Animated.View>
    );

    return (
        <View
            style={[
                styles.container,
                { backgroundColor: isDarkMode ? "#1F2937" : "#F3F4F6" },
            ]}
        >
            <StatusBar
                barStyle={isDarkMode ? "light-content" : "dark-content"}
                translucent
                backgroundColor="transparent"
            />
            {/* Header */}
            {/* <View style={styles.header}>
                <Text
                    style={[
                        styles.headerTitle,
                        { color: isDarkMode ? "#FFFFFF" : "#1F2937" },
                    ]}
                >
                    Product Catalog
                </Text>
                <TouchableOpacity style={styles.headerIcon}>
                    <Ionicons
                        name="filter"
                        size={24}
                        color={isDarkMode ? "#FFFFFF" : "black"}
                    />
                </TouchableOpacity>
            </View> */}

            {/* Search Bar */}
            <View
                style={[
                    styles.searchContainer,
                    { backgroundColor: isDarkMode ? "#374151" : "#E5E7EB" },
                ]}
            >
                <Ionicons
                    name="search"
                    size={20}
                    color={isDarkMode ? "#D1D5DB" : "#6B7280"}
                    style={styles.searchIcon}
                />
                <TextInput
                    style={[
                        styles.searchInput,
                        { color: isDarkMode ? "#FFFFFF" : "#1F2937" },
                    ]}
                    placeholder="Search Products..."
                    placeholderTextColor={isDarkMode ? "#9CA3AF" : "#6B7280"}
                    value={searchQuery}
                    onChangeText={handleSearch}
                />
                {searchQuery.length > 0 && (
                    <TouchableOpacity onPress={() => setSearchQuery("")}>
                        <Ionicons
                            name="close-circle"
                            size={20}
                            color={isDarkMode ? "#D1D5DB" : "#6B7280"}
                        />
                    </TouchableOpacity>
                )}
            </View>

            {/* Product List */}
            <FlatList
                showsVerticalScrollIndicator={false}
                data={filteredProducts}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderProductCard}
                ListEmptyComponent={
                    <View style={styles.emptyContainer}>
                        <Ionicons
                            name="bag-remove"
                            size={64}
                            color={isDarkMode ? "#374151" : "#E5E7EB"}
                        />
                        <Text
                            style={[
                                styles.emptyText,
                                { color: isDarkMode ? "#FFFFFF" : "#374151" },
                            ]}
                        >
                            No products found!
                        </Text>
                    </View>
                }
                contentContainerStyle={styles.listContainer}
            />
            {/* Add New Product Floating Action Button */}
            <TouchableOpacity
                style={styles.fab}
                onPress={() => router.push('/Products/(Admin)/add')}
            >
                <Ionicons name="add" size={30} color="#ffffff" />
            </TouchableOpacity>

            
            <Modal
                visible={menuVisible}
                transparent
                animationType="slide"
                onRequestClose={() => setMenuVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <BlurView intensity={80} style={styles.blurOverlay}>
                        <View style={styles.modalContent}>
                            <TouchableOpacity
                                style={styles.closeButton}
                                onPress={() => setMenuVisible(false)}
                            >
                                <Ionicons name="close" size={24} color="#374151" />
                            </TouchableOpacity>

                            <View style={styles.modalMenu}>
                                <TouchableOpacity
                                    style={styles.modalMenuItem}
                                    onPress={() => {
                                        setMenuVisible(false);
                                        router.push('/Products/(Admin)/detail');
                                    }}
                                >
                                    <Ionicons name="eye-outline" size={24} color="#3b82f6" />
                                    <Text style={styles.modalMenuText}>View Details</Text>
                                </TouchableOpacity>

                                <View style={styles.modalDivider} />

                                <TouchableOpacity
                                    style={styles.modalMenuItem}
                                    onPress={() => {
                                        setMenuVisible(false);
                                        router.push('/Products/(Admin)/update');
                                    }}
                                >
                                    <Ionicons name="create-outline" size={24} color="#10b981" />
                                    <Text style={styles.modalMenuText}>Edit Product</Text>
                                </TouchableOpacity>

                                <View style={styles.modalDivider} />

                                <TouchableOpacity
                                    style={styles.modalMenuItem}
                                    onPress={() => {
                                        setMenuVisible(false);
                                        showToast('error',"Delete functionality coming soon!");
                                    }}
                                >
                                    <Ionicons name="trash-outline" size={24} color="#ef4444" />
                                    <Text style={styles.modalMenuText}>Delete Product</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </BlurView>
                </View>
            </Modal>
<ToastMessage/>
        </View>
    );
};

export default ProductsPage;
