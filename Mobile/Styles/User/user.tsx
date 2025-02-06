import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F3F4F6",
    },

    // Header
    header: {
        padding: 10,
        backgroundColor: "#FFFFFF",
    },
   
 // Search Bar
    searchBar: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#F9FAFB",
        borderRadius: 10,
       
    },
    searchInput: {
        flex: 1,
        padding: 10,
        color: "#1F2937",
    },
    filterButton: {
        backgroundColor: "black",
        padding: 14,
       borderTopRightRadius: 10,
       borderBottomRightRadius: 10,
        marginLeft: 10,
    },

    // List Content
    listContent: {
        padding: 15,
    },
    userItem: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        padding: 15,
        marginVertical: 5,
        borderRadius: 10,
        elevation: 3,
    },
    userImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 1,
    },
    userInfo: {
        marginLeft: 15,
        flex: 1,
    },
    userName: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#1F2937",
    },
    userEmail: {
        fontSize: 14,
        color: "#6B7280",
    },

    // User Tags
    userTags: {
        flexDirection: "row",
        marginTop: 5,
    },
    tag: {
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 15,
        fontSize: 12,
        marginRight: 10,
        color: "white",
    },
    adminTag: {
        backgroundColor: "#10B981",
    },
    userTag: {
        backgroundColor: "#3B82F6",
    },
    activeTag: {
        backgroundColor: "#10B981",
    },
    inactiveTag: {
        backgroundColor: "#EF4444",
    },
    emptyList: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 50,
    },
    emptyText: {
        fontSize: 18,
        color: "#6B7280",
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
    chevron:{
      textAlign:"center",
      justifyContent:"center",
      alignItems:"center",
        height: 40,
        width: 40,
        right: 5,
        borderRadius: 10,
        backgroundColor: "#F0F8FF",
    }
});

export default styles;
