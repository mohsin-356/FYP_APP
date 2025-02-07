import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get('window');


const createStyles = (isDarkMode: any) =>
    StyleSheet.create({
        container: {
             flex: 1,
              backgroundColor: isDarkMode ? '#1F2937' : '#F3F4F6'
             },
        gradientBackground: {
             position: 'absolute', left: 10, right: 0, top: 0, bottom: 0 },
        scrollContainer: { flex: 1 },
        imageContainer: { width: width, height: 300, alignItems: 'center', justifyContent: 'center' },
        productImage: { width: width - 30, height: 260, borderRadius: 20, resizeMode: "cover" },
        detailsContainer: { borderRadius: 30, padding: 15, margin: 12, marginTop: -70 },
        productName: { fontSize: 28, fontWeight: '800', color: isDarkMode ? '#FFFFFF' : '#484848', marginBottom: 10, textAlign: 'center' },
        priceContainer: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 15 },
        productPrice: { fontSize: 22, fontWeight: '600', color: '#10b981', marginRight: 10 },
        productSalePrice: { fontSize: 18, fontWeight: '400', color: '#ef4444', textDecorationLine: 'line-through' },
        productDescription: { fontSize: 16, color: isDarkMode ? '#D1D5DB' : '#000000', textAlign: 'center', marginBottom: 20, lineHeight: 24 },
        detailGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: 20 },
        detailItem: { flexDirection: 'row', alignItems: 'center', width: '45%', marginBottom: 10 },
        detailText: { marginLeft: 10, color: isDarkMode ? '#FFFFFF' : '#000000', fontSize: 15 },
        dimensionsContainer: { backgroundColor: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)', borderRadius: 15, padding: 15, marginBottom: 20 },
        dimensionsTitle: { fontSize: 16, fontWeight: '600', color: isDarkMode ? '#FFFFFF' : '#000000', marginBottom: 5 },
        dimensionsText: { fontSize: 15, color: isDarkMode ? '#FFFFFF' : '#000000' },
        productionStatus: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 20 },
        productionStatusText: { marginLeft: 10, fontSize: 16, fontWeight: '600' },
        buttonContainer: { flexDirection: "row", justifyContent: "space-around", paddingVertical: 15 },
        button: { width: '45%', borderRadius: 15 },
        buttonGradient: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 12 },
        buttonText: { marginLeft: 10, fontSize: 16, color: 'white', fontWeight: '600' },
    });


export default createStyles;