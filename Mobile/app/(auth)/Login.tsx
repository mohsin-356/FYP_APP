import React, { useState ,useEffect} from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useRouter } from "expo-router";
import { useAuth } from "../../contexts/AuthContext";
import { Ionicons } from "@expo/vector-icons";
import styles from "@/Styles/Auth/login";
export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureText, setSecureText] = useState(true);
  const { login } = useAuth();
  const router = useRouter();

  const [isMounted, setIsMounted] = useState(false); // Track mounting state

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false); // Clean up when unmounted
  }, []);

  const handleLogin = () => {
    if (email === "test@example.com" && password === "123") {
      login(); // Update logged-in state
      setTimeout(() => {
        if (isMounted) {
          router.replace("/(main)/"); // Delay navigation to ensure layout is ready
        }
      }, 100); // Small delay to avoid immediate navigation
    } else {
      Alert.alert("Invalid credentials!");
    }
  };
    const forgotPassword = () => {
        // router.push('./components/ForgotPassword.tsx');
    };
    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <View style={styles.logoContainer}>
                    <Ionicons name="person-circle" size={80} color="#000" />
                </View>
                <Text style={styles.title}>Welcome Back</Text>

                <View style={styles.inputContainer}>
                    <Ionicons name="mail" size={20} color="#000" style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        placeholderTextColor="#666"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Ionicons name="lock-closed" size={20} color="#000" style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        placeholderTextColor="#666"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={secureText}
                    />
                    <TouchableOpacity
                        onPress={() => setSecureText(!secureText)}
                        style={styles.eyeIcon}
                    >
                        <Ionicons
                            name={secureText ? 'eye-off' : 'eye'}
                            size={20}
                            color="#000"
                        />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                    <Ionicons name="log-in" size={20} color="#fff" style={styles.buttonIcon} />
                    <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>


                <TouchableOpacity  onPress={() => router.push("/(auth)/SignUp")} >
                    <Text style={styles.createAccountText}>Create New Account</Text>
                </TouchableOpacity>

                <View style={styles.dividerContainer}>
                    <View style={styles.divider} />
                    <Text style={styles.dividerText}>OR</Text>
                    <View style={styles.divider} />
                </View>

                <TouchableOpacity style={styles.forgotPasswordContainer}  onPress={() => router.push("/(auth)/forgotpassword")}>
                    <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
