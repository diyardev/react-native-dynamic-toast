import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ToastMessage, useToast } from './ToastContext';

interface ToastItemProps {
  toast: ToastMessage;
  onHide: (id: string) => void;
  index: number;
}

const ToastItem: React.FC<ToastItemProps> = ({ toast, onHide, index }) => {
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value((toast.position === 'top' || toast.position === undefined) ? -10 : 10)).current;

  useEffect(() => {
    // Show animation
    Animated.parallel([
      Animated.timing(opacity, { toValue: 1, duration: 200, useNativeDriver: true }),
      Animated.spring(translateY, { toValue: 0, useNativeDriver: true }),
    ]).start();
  }, [opacity, translateY]);

  const handleHide = () => {
    Animated.parallel([
      Animated.timing(opacity, { toValue: 0, duration: 200, useNativeDriver: true }),
      Animated.timing(translateY, {
        toValue: (toast.position === 'top' || toast.position === undefined) ? -10 : 10,
        duration: 200,
        useNativeDriver: true
      }),
    ]).start(() => onHide(toast.id));
  };

  const getBackgroundColor = () => {
    switch (toast.type) {
      case 'success':
        return 'rgba(22, 163, 74, 0.95)'; // green-600
      case 'error':
        return 'rgba(239, 68, 68, 0.95)'; // red-500
      default:
        return 'rgba(59, 130, 246, 0.95)'; // blue-500
    }
  };

  const getMessages = () => {
    const messages: string[] = [];
    if (toast.message) {
      messages.push(toast.message);
    }
    if (toast.errors) {
      Object.values(toast.errors).forEach((arr) => messages.push(...arr));
    }
    return messages;
  };

  const messages = getMessages();

  return (
    <Animated.View
      style={[
        styles.toast,
        (toast.position === 'top' || toast.position === undefined) ? styles.top : styles.bottom,
        {
          opacity,
          transform: [{ translateY }],
          backgroundColor: getBackgroundColor(),
          marginTop: index > 0 ? 4 : 0, // Spacing between toasts
        },
      ]}
      pointerEvents="auto" // Only the toast itself receives touch events
    >
      <View style={{ flex: 1 }}>
        {messages.map((message, idx) => (
          <Text key={idx} style={{ color: 'white', fontSize: 14 }}>
            • {message}
          </Text>
        ))}
      </View>
      <TouchableOpacity onPress={handleHide}>
        <Text style={{ color: 'white', fontSize: 14, fontWeight: '600' }}>Kapat</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export const Toast: React.FC = () => {
  const { toasts, hideToast } = useToast();
  const insets = useSafeAreaInsets();

  if (toasts.length === 0) return null;

  // Group toasts by position - undefined is treated as 'top'
  const topToasts = toasts.filter(toast => toast.position === 'top' || toast.position === undefined);
  const bottomToasts = toasts.filter(toast => toast.position === 'bottom');

  return (
    <View style={[styles.container, { paddingTop: insets.top }]} pointerEvents="box-none">
      {/* Top Toasts */}
      {topToasts.length > 0 && (
        <View style={[styles.toastContainer]} pointerEvents="box-none">
          {topToasts.map((toast, index) => (
            <ToastItem 
              key={toast.id} 
              toast={toast} 
              onHide={hideToast}
              index={index}
            />
          ))}
        </View>
      )}
      
      {/* Bottom Toasts */}
      {bottomToasts.length > 0 && (
        <View style={[styles.toastContainer, styles.bottomContainer]} pointerEvents="box-none">
          {bottomToasts.map((toast, index) => (
            <ToastItem 
              key={toast.id} 
              toast={toast} 
              onHide={hideToast}
              index={index}
            />
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 999999,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent',
    pointerEvents: 'box-none',
  },
  toastContainer: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 16,
    pointerEvents: 'box-none',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: 20,
  },
  toast: {
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    // shadow
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 10,
  },
  top: {
    marginTop: 60,
  },
  bottom: {
    marginBottom: 30,
  },
});
