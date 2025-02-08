import React, { useEffect, useState } from "react";
import { Drawer } from "expo-router/drawer";
import CustomDrawerContent from "@/components/CustomDrawer";
import { MaterialIcons } from "@expo/vector-icons";
import { SettingsProvider } from "@/themes/SettingsContext"; // Import SettingsProvider
import { EventRegister } from "react-native-event-listeners";
import { useRouter } from "expo-router";
export default function Layout() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Theme and Font listeners
    const themeListener = EventRegister.addEventListener("ChangeTheme", (data: boolean) => {
      setIsDarkMode(data);
    });


    return () => {
      if (typeof themeListener === "string") {
        EventRegister.removeEventListener(themeListener);
      }
    };
  }, []);

  const dynamicStyles = {
    drawerLabelStyle: {
      marginLeft: 10,
      color: isDarkMode ? "#F3F4F6" : "#1F2937",
     
    },
    drawerStyle: {
      backgroundColor: isDarkMode ? "#1F2937" : "#F3F4F6",
    },
    headerStyle: {
      backgroundColor: isDarkMode ? "#1F2937" : "#F3F4F6",
    },
    headerTintColor: isDarkMode ? "white" : "black",
  };

  const router = useRouter();
  const handleNotifications = () => {
    router.push('./components/Notifications.tsx')
  };
  return (
    <>
 
    <SettingsProvider>
      <Drawer
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          drawerLabelStyle: dynamicStyles.drawerLabelStyle,
          drawerStyle: dynamicStyles.drawerStyle,
          headerRight: () => (
            <MaterialIcons
              name="notifications"
              size={24}
              color={isDarkMode ? '#F3F4F6' : '#1F2937'}
              style={{ marginRight: 10 }} 
              onPress={handleNotifications} // Add your onPress logic here
            />
          ),
        }}
        
      >
        
        {/* Home Screen */}
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: 'Home',
            headerTitle: 'Admin Panel',
            headerStyle: dynamicStyles.headerStyle,
            headerTintColor: dynamicStyles.headerTintColor,
            drawerIcon: ({ color, size }) => (
              <MaterialIcons
                name="home"
                size={size}
                color={isDarkMode ? '#F3F4F6' : '#1F2937'}
              />
            ),
            // Add a notification icon to the right side of the header
           
          }}
        />

          {/* Users Screen */}
          <Drawer.Screen
            name="Users"
            options={{
              drawerLabel: 'Users',
              headerTitle: 'Users Panel',
              headerStyle: dynamicStyles.headerStyle,
              headerTintColor: dynamicStyles.headerTintColor,
              drawerIcon: ({ color, size }) => <MaterialIcons name="people" size={size} color={isDarkMode ? '#F3F4F6' : '#1F2937'} />,
            }}
          />

          <Drawer.Screen
            name="Profile"
            options={{
              drawerLabel: 'Profile',
              headerTitle: 'Users Panel',
              headerStyle: dynamicStyles.headerStyle,
              headerTintColor: dynamicStyles.headerTintColor,
              drawerIcon: ({ color, size }) => <MaterialIcons name="person-outline" size={size} color={isDarkMode ? '#F3F4F6' : '#1F2937'} />,
            }}
          />
          {/* Products Screen */}
          <Drawer.Screen
            name="Products"
            options={{
              drawerLabel: 'Products',
              headerTitle: 'Products Panel',
              headerStyle: dynamicStyles.headerStyle,
              headerTintColor: dynamicStyles.headerTintColor,
              drawerIcon: ({ color, size }) => <MaterialIcons name="shopping-cart" size={size} color={isDarkMode ? '#F3F4F6' : '#1F2937'} />,
            }}
          />

         <Drawer.Screen
          name="Orders"
          options={{
            drawerItemStyle: { display: 'none' },
            drawerLabel: 'Orders',
            headerTitle: 'Orders Panel',
            headerStyle: dynamicStyles.headerStyle,
            headerTintColor: dynamicStyles.headerTintColor,
            drawerIcon: ({ color, size }) => <MaterialIcons name="list-alt" size={size} color={isDarkMode ? '#F3F4F6' : '#1F2937'} />,
          }}
        /> 
       
        <Drawer.Screen
          name="Suppliers"
          options={{
            drawerItemStyle: { display: 'none' },
            drawerLabel: 'Suppliers',
            headerTitle: 'Supplier Panel',
            headerStyle: dynamicStyles.headerStyle,
            headerTintColor: dynamicStyles.headerTintColor,
            drawerIcon: ({ color, size }) => <MaterialIcons name="group" size={size} color={isDarkMode ? '#F3F4F6' : '#1F2937'} />,
          }}
        /> 
      
     
     
      
        <Drawer.Screen
          name="Workers"
          options={{
            drawerItemStyle: { display: 'none' },
            drawerLabel: 'Workers',
            headerTitle: 'Workers Panel',
            headerStyle: dynamicStyles.headerStyle,
            headerTintColor: dynamicStyles.headerTintColor,
            drawerIcon: ({ color, size }) => <MaterialIcons name="work" size={size} color={isDarkMode ? '#F3F4F6' : '#1F2937'} />,
          }}
        />
        
        <Drawer.Screen
          name="Settings"
          options={{
            drawerItemStyle: { display: 'none' },
            drawerLabel: 'Settings',
            headerTitle: 'Settings Panel',
            headerStyle: dynamicStyles.headerStyle,
            headerTintColor: dynamicStyles.headerTintColor,
            drawerIcon: ({ color, size }) => <MaterialIcons name="settings" size={size} color={isDarkMode ? '#F3F4F6' : '#1F2937'} />,
          }}
        /> 
    
        <Drawer.Screen
          name="Logout"
          options={{
            drawerLabel: 'Logout',
            headerTitle: 'Logout Panel',
            headerStyle: dynamicStyles.headerStyle,
            headerTintColor: dynamicStyles.headerTintColor,
            drawerIcon: ({ color, size }) => <MaterialIcons name="exit-to-app" size={size} color={isDarkMode ? '#F3F4F6' : '#1F2937'} />,
          }}
        />
      
      </Drawer>
     
    </SettingsProvider>
   
    </>
  );
}
