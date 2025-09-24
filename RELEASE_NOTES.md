# Release Notes

## v1.0.0 - Initial Release 🎉

### 🚀 Features

- **Beautiful Toast Notifications** - Modern, clean and customizable toast notifications
- **TypeScript Support** - Full TypeScript support with comprehensive type definitions
- **Dynamic Positioning** - Support for both top and bottom positioning
- **Auto Dismiss** - Configurable auto-dismiss duration (default: 3 seconds)
- **Touch Friendly** - Non-blocking touch events, you can interact with the app while toasts are visible
- **Multiple Types** - Success, Error, and custom toast types
- **Validation Support** - Support for validation errors with multiple messages
- **Smooth Animations** - Beautiful enter/exit animations
- **Safe Area Support** - Works perfectly with modern devices and notches
- **Lightweight** - Minimal dependencies and small bundle size

### 📦 Installation

```bash
npm install @diyardev/react-native-dynamic-toast
# or
yarn add @diyardev/react-native-dynamic-toast
```

### 🎯 Quick Start

```tsx
import { ToastProvider, Toast, ToastAPI } from '@diyardev/react-native-dynamic-toast';

// Setup
<ToastProvider>
  <YourApp />
  <Toast />
</ToastProvider>

// Usage
ToastAPI.success('Success message!');
ToastAPI.error('Error message!');
```

### 🔧 API

- `ToastAPI.success(message, options?)` - Show success toast
- `ToastAPI.error(message, options?)` - Show error toast
- `ToastAPI.errorWithValidation(message, errors, options?)` - Show validation errors

### 📱 Compatibility

- React Native >= 0.60.0
- React >= 16.8.0
- TypeScript support
- iOS and Android support

### 🎨 Styling

- Rounded corners (12px border radius)
- Shadow effects for depth
- Responsive width (100% with padding)
- Smooth animations
- Customizable colors and positioning

### 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

### 👨‍💻 Author

Created by [diyardev](https://github.com/diyardev)

---

**Full documentation available in [README.md](README.md)**
