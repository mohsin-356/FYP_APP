import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingTop: 50,
        paddingBottom: 15,
    },
    headerTitle: {
        fontSize: 26,
        fontWeight: "800",
    },
    headerIcon: {
        padding: 8,
    },
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 16,
        marginHorizontal: 16,
        marginBottom: 16,
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
    },
    listContainer: {
        paddingBottom: 80,
    },
    card: {
        marginHorizontal: 16,
        marginBottom: 12,
        borderRadius: 16,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 6,
    },
    cardContent: {
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
    },
    productImage: {
        width: 80,
        height: 80,
        borderRadius: 15,
        marginRight: 15,
    },
    productDetails: {
        flex: 1,
    },
    productName: {
        fontSize: 16,
        fontWeight: "700",
    },
    priceRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 8,
    },
    priceText: {
        fontSize: 13,
        fontWeight: "600",
    },
    skuText: {
        fontSize: 12,
    },
    statusBadge: {
        alignSelf: "flex-start",
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 8,
    },
    inStockBadge: {
        backgroundColor: "rgba(16, 185, 129, 0.15)",
    },
    outOfStockBadge: {
        backgroundColor: "rgba(239, 68, 68, 0.15)",
    },
    statusText: {
        fontSize: 11,
        fontWeight: "700",
    },
    inStockText: {
        color: "#10B981",
    },
    outOfStockText: {
        color: "#EF4444",
    },
    emptyContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 100,
    },
    emptyText: {
        fontSize: 18,
    },
    fab: {
        position: "absolute",
        bottom: 20,
        right: 20,
        backgroundColor: "black",
        borderRadius: 30,
        padding: 15,
        elevation: 5,
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'flex-end',
       
    },
    blurOverlay: {
        position: 'absolute',
        top: "72%",
        left: 0,
        right: 0,
        bottom: 0,
        
    },
    modalContent: {
        backgroundColor: 'rgba(255,255,255,0.9)',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        padding: 20,
        paddingBottom: 30,
       
    },
    closeButton: {
        alignSelf: 'flex-end',
        marginBottom: 10,
        backgroundColor:'lightgrey',
        borderRadius: 20,

    },
    modalMenu: {
        backgroundColor: 'white',
        
        borderRadius: 16,
        overflow: 'hidden',
    },
    modalMenuItem: {
        
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 20,
    },
    modalMenuText: {
        fontWeight: "bold",
        marginLeft: 12,
        fontSize: 17,
        color: '#374151',
    },
    modalDivider: {
        height: 1,
        backgroundColor: '#f3f4f6',
    },
    menuTouchable: {
        padding: 8,
    },
});
export default styles;