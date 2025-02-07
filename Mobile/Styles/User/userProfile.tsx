import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    header: {
        backgroundColor: "#4169E1",
        alignItems: "center",
        paddingVertical: 10,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        height:180

    },
    profileSection: {
        position: "relative",
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 4,
        borderColor: "#fff",
    },
    activeBadge: {
        position: "absolute",
        top: -3,
        left: 80,
        backgroundColor: "green",
        borderRadius: 50,
        paddingHorizontal: 10,
    },
    activeBadgeText: {
        color: "#fff",
        fontSize: 12,
        fontWeight: "bold",
    },
    userName: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
        marginTop: 10,
    },
    email: {
        fontSize: 16,
        color: "#e5e7eb",
        marginBottom: 20,
    },
    tabContainer: {
        flexDirection: "row",
        justifyContent: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#d1d5db",
    },
    tab: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    tabText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#3b82f6",
    },
    infoSection: {
        padding: 20,
    },
    sectionHeader: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#3b82f6",
        marginBottom: 10,
    },
    infoRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    infoKey: {
        fontSize: 16,
        
        fontWeight: "bold",
        color: "#111827",
    },
    infoValue: {
        fontSize: 16,
        color: "#6b7280",
    },
    buttonRow: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        paddingVertical: 20,
        borderTopWidth: 1,
        borderTopColor: "#d1d5db",
    },
    button: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#3b82f6",
        padding: 10,
        borderRadius: 5,
    },
    deleteButton: {
        backgroundColor: "black",
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        marginLeft: 5,
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 10,
        width: "80%",
        alignItems: "center",
    },
    modalText: {
        fontSize: 14,
        marginBottom: 20,
        textAlign: "center",
    },
    modalButtons: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
       
    },
    d:{
        borderRadius:10
    }
});
export default styles;