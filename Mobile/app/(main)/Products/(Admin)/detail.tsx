import React from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import Ionicons from "react-native-vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { useSettings } from "@/themes/SettingsContext";
import createStyles from "@/Styles/Products/detailProduct";


const ProductDetail = () => {
    const { isDarkMode } = useSettings();
    const product = {
        name: "Elegant Smartwatch Pro",
        description: "Experience cutting-edge technology with our premium smartwatch. Sleek design meets advanced functionality.",
        price: "Rs299",
        salePrice: "Rs249",
        stock_quantity: "20 units left",
        sku: "SW-PRO-100",
        image: "https://picsum.photos/800",
        brand: "TechNova",
        weight: "2 kg",
        dimensions: {
            length: 30,
            width: 20,
            height: 10,
        },
        in_production: true,
    };

    const router = useRouter();

    const styles = createStyles(isDarkMode);

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={isDarkMode ? ['#111827', '#1F2937'] : ['#f3f4f7', '#dcdcdf']}
                style={styles.gradientBackground}
            />

            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.scrollContainer}
            >
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: product.image }}
                        style={styles.productImage}
                    />
                </View>

                <BlurView intensity={130} style={styles.detailsContainer}>
                    <Text style={styles.productName}>{product.name}</Text>

                    <View style={styles.priceContainer}>
                        <Text style={styles.productPrice}>{product.price}</Text>
                        {product.salePrice && (
                            <Text style={styles.productSalePrice}>{product.salePrice}</Text>
                        )}
                    </View>

                    <Text style={styles.productDescription}>{product.description}</Text>

                    <View style={styles.detailGrid}>
                        <View style={styles.detailItem}>
                            <Ionicons name="cube-outline" size={20} color={isDarkMode ? "#FFFFFF" : "#000000"} />
                            <Text style={styles.detailText}>Stock: {product.stock_quantity}</Text>
                        </View>
                        <View style={styles.detailItem}>
                            <Ionicons name="barcode-outline" size={20} color={isDarkMode ? "#FFFFFF" : "#000000"} />
                            <Text style={styles.detailText}>SKU: {product.sku}</Text>
                        </View>
                        <View style={styles.detailItem}>
                            <Ionicons name="business-outline" size={20} color={isDarkMode ? "#FFFFFF" : "#000000"} />
                            <Text style={styles.detailText}>Brand: {product.brand}</Text>
                        </View>
                        <View style={styles.detailItem}>
                            <Ionicons name="scale-outline" size={20} color={isDarkMode ? "#FFFFFF" : "#000000"} />
                            <Text style={styles.detailText}>Weight: {product.weight}</Text>
                        </View>
                    </View>

                    <View style={styles.dimensionsContainer}>
                        <Text style={styles.dimensionsTitle}>Product Dimensions</Text>
                        <Text style={styles.dimensionsText}>
                            {product.dimensions.length} x {product.dimensions.width} x {product.dimensions.height} cm
                        </Text>
                    </View>

                    <View style={styles.productionStatus}>
                        <Ionicons
                            name={product.in_production ? "checkmark-circle" : "close-circle"}
                            size={24}
                            color={product.in_production ? "#10b981" : "#ef4444"}
                        />
                        <Text style={[
                            styles.productionStatusText,
                            { color: product.in_production ? "#10b981" : "#ef4444" }
                        ]}>
                            {product.in_production ? "Currently in Production" : "Not in Production"}
                        </Text>
                    </View>
                </BlurView>
            </ScrollView>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => router.push('/Products/(Admin)/update')}
                >
                    <LinearGradient
                        colors={['#00000', 'black']}
                        style={styles.buttonGradient}
                    >
                        <Ionicons name="create-outline" size={24} color="white" />
                        <Text style={styles.buttonText}>Edit Product</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => alert("Delete Product")}
                >
                    <LinearGradient
                        colors={['#00000', 'black']}
                        style={styles.buttonGradient}
                    >
                        <Ionicons name="trash-outline" size={24} color="white" />
                        <Text style={styles.buttonText}>Delete Product</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    );
};


export default ProductDetail;
