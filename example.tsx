import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Toast, ToastAPI, ToastProvider, useToastInit } from './src';

// Example component showing how to use the toast
function ExampleScreen() {
  useToastInit(); // Initialize toast functions

  const showSuccess = () => {
    ToastAPI.success('Operation completed successfully!');
  };

  const showError = () => {
    ToastAPI.error('Something went wrong!');
  };

  const showCustomToast = () => {
    ToastAPI.success('Custom toast with options', {
      duration: 5000,
      position: 'bottom'
    });
  };

  const showValidationError = () => {
    ToastAPI.errorWithValidation('Please fix the following errors:', {
      email: ['Email is required', 'Email must be valid'],
      password: ['Password must be at least 6 characters']
    });
  };

  return (
    <View style={styles.container}>
      <Button title="Show Success Toast" onPress={showSuccess} />
      <Button title="Show Error Toast" onPress={showError} />
      <Button title="Show Custom Toast" onPress={showCustomToast} />
      <Button title="Show Validation Error" onPress={showValidationError} />
    </View>
  );
}

// Main App component showing proper setup
export default function App() {
  return (
    <SafeAreaProvider>
      <ToastProvider>
        <ExampleScreen />
        <Toast />
      </ToastProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    gap: 20,
  },
});
