import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F4F6'
    },
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    profileCard: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
        backgroundColor: 'white'
    },
    headerContainer: {
        backgroundColor: "blue",
        paddingVertical: 8,
        alignItems: 'center',
        position: 'relative',
        borderBottomLeftRadius: 10,
        borderBottomEndRadius: 10
    },
    headerActions: {
        position: 'absolute',
        top: 10,
        right: 10,
        flexDirection: 'row'
    },
    headerActionButton: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: 20,
        padding: 5,
        marginLeft: 10
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 64,
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: 'white',

    },
    profileName: {
        marginTop: 6,
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white'
    },
    profileEmail: {
        color: 'rgba(255,255,255,0.8)',
        marginTop: 2
    },
    roleContainer: {
        backgroundColor: 'green',
        paddingHorizontal: 12,
        paddingVertical: 2,
        borderRadius: 15,
        marginTop: 4,

    },
    roleText: {
        color: 'white',
        fontSize: 12
    },
    sectionContainer: {
        padding: 10
    },
    sectionTitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    sectionIcon: {
        marginRight: 10
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    activitiesContainer: {
        gap: 10
    },
    activityItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F3F4F6',
        padding: 15,
        borderRadius: 10
    },
    activityIcon: {
        marginRight: 10
    },
    activityText: {
        fontSize: 14,
        color: '#4B5563'
    },
    settingsContainer: {
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: '#E5E7EB'
    },
    settingsOption: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E7EB'
    },
    settingsOptionText: {
        marginLeft: 15,
        fontSize: 16
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalContent: {
        width: '85%',
        padding: 25,
        borderRadius: 15,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    modalIcon: {
        marginBottom: 20
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },
    modalDescription: {
        textAlign: 'center',
        marginBottom: 20,
        color: '#6B7280'
    },
    modalActions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    modalCancelButton: {
        flex: 1,
        backgroundColor: '#E5E7EB',
        padding: 15,
        borderRadius: 10,
        marginRight: 10
    },
    modalCancelButtonText: {
        textAlign: 'center',
        color: '#4B5563'
    },
    modalDeleteButton: {
        flex: 1,
        backgroundColor: '#EF4444',
        padding: 15,
        borderRadius: 10
    },
    modalDeleteButtonText: {
        textAlign: 'center',
        color: 'white'
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#E2E8F0',
    },
    menuItemText: {
        marginLeft: 16,
        fontSize: 16,
    },
    
});
export default styles;