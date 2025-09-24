# React Native Dynamic Toast

A beautiful, dynamic and customizable toast notification system for React Native with TypeScript support.

## Features

- 🎨 **Beautiful Design** - Modern, clean and customizable toast notifications
- 🚀 **Dynamic Positioning** - Support for both top and bottom positioning
- ⚡ **Auto Dismiss** - Configurable auto-dismiss duration (default: 3 seconds)
- 🎯 **TypeScript Support** - Full TypeScript support with type definitions
- 📱 **Touch Friendly** - Non-blocking touch events, you can interact with the app while toasts are visible
- 🎭 **Multiple Types** - Success, Error, and custom toast types
- 🔧 **Highly Customizable** - Customize colors, duration, position, and more
- 📦 **Lightweight** - Minimal dependencies and bundle size
- 🎪 **Animation** - Smooth enter/exit animations

## Installation

```bash
npm install react-native-dynamic-toast
# or
yarn add react-native-dynamic-toast
```

### Peer Dependencies

Make sure you have these peer dependencies installed:

```bash
npm install react-native-safe-area-context
# or
yarn add react-native-safe-area-context
```

## Quick Start

### 1. Setup Provider

Wrap your app with the `ToastProvider`:

```tsx
import React from 'react';
import { ToastProvider } from 'react-native-dynamic-toast';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <ToastProvider>
        {/* Your app content */}
        <YourAppContent />
        <Toast />
      </ToastProvider>
    </SafeAreaProvider>
  );
}
```

### 2. Add Toast Component

Add the `Toast` component to your app (usually in your root component):

```tsx
import { Toast } from 'react-native-dynamic-toast';

// Add this to your root component
<Toast />
```

### 3. Use Toast Functions

```tsx
import { ToastAPI } from 'react-native-dynamic-toast';

// Basic usage
ToastAPI.success('Operation completed successfully!');
ToastAPI.error('Something went wrong!');

// With custom options
ToastAPI.success('Success message', { 
  duration: 5000, 
  position: 'bottom' 
});

ToastAPI.error('Error message', { 
  duration: 2000, 
  position: 'top' 
});
```

## API Reference

### Toast Functions

#### `ToastAPI.success(message, options?)`
Shows a success toast notification.

#### `ToastAPI.error(message, options?)`
Shows an error toast notification.

#### `ToastAPI.errorWithValidation(message, errors, options?)`
Shows an error toast with validation errors.

### Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `duration` | `number` | `3000` | Auto-dismiss duration in milliseconds (0 = no auto-dismiss) |
| `position` | `'top' \| 'bottom'` | `'top'` | Toast position on screen |

### Components

#### `ToastProvider`
Context provider that manages toast state.

#### `Toast`
Component that renders toast notifications.

#### `useToast`
Hook for accessing toast functions programmatically.

## Examples

### Basic Usage

```tsx
import React from 'react';
import { View, Button } from 'react-native';
import { ToastAPI } from 'react-native-dynamic-toast';

export default function ExampleScreen() {
  const showSuccess = () => {
    ToastAPI.success('Data saved successfully!');
  };

  const showError = () => {
    ToastAPI.error('Failed to save data!');
  };

  return (
    <View>
      <Button title="Show Success" onPress={showSuccess} />
      <Button title="Show Error" onPress={showError} />
    </View>
  );
}
```

### Custom Duration and Position

```tsx
import { ToastAPI } from 'react-native-dynamic-toast';

// Show toast for 5 seconds at the bottom
ToastAPI.success('This will show for 5 seconds', {
  duration: 5000,
  position: 'bottom'
});

// Show toast at the top with no auto-dismiss
ToastAPI.error('Important error message', {
  duration: 0,
  position: 'top'
});
```

### Validation Errors

```tsx
import { ToastAPI } from 'react-native-dynamic-toast';

const handleFormSubmit = async () => {
  try {
    await submitForm();
    ToastAPI.success('Form submitted successfully!');
  } catch (error) {
    if (error.errors) {
      ToastAPI.errorWithValidation('Please fix the following errors:', error.errors);
    } else {
      ToastAPI.error(error.message);
    }
  }
};
```

### Using with Hook

```tsx
import React from 'react';
import { useToast } from 'react-native-dynamic-toast';

export default function CustomComponent() {
  const { showToast } = useToast();

  const handleCustomToast = () => {
    showToast({
      type: 'success',
      message: 'Custom toast message',
      duration: 4000,
      position: 'bottom'
    });
  };

  return (
    // Your component JSX
  );
}
```

## Styling

The toast component uses inline styles and can be customized by modifying the source code or by extending the component. The default styling includes:

- Rounded corners (12px border radius)
- Shadow effects
- Responsive width (100% with 16px horizontal padding)
- Smooth animations

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Author

Created by [diyardev](https://github.com/diyardev)

## License

MIT License - see the [LICENSE](LICENSE) file for details.

## Changelog

### 1.2.0
- **🚀 Enhanced Bottom Positioning** - Fixed bottom toast positioning with absolute layout
- **⏰ Extended Auto-Dismiss** - Increased default duration to 5 seconds
- **🔧 Smart Default Handling** - Improved undefined value handling for duration and position
- **🐛 Critical Bug Fixes** - Fixed spread operator and positioning issues
- **🎯 Production Ready** - Removed debug messages for clean production builds
- **📱 Better TypeScript Support** - Enhanced type safety with proper undefined checks

### 1.0.0
- Initial release
- Basic toast functionality
- TypeScript support
- Dynamic positioning
- Auto-dismiss feature
- Touch-friendly design
