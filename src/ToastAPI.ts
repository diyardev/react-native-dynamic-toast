import { ToastMessage } from './ToastContext';

// Global toast functions
let showToastFunction: ((toast: Omit<ToastMessage, 'id'>) => void) | null = null;

export const setToastFunction = (fn: (toast: Omit<ToastMessage, 'id'>) => void) => {
  showToastFunction = fn;
};

export const Toast = {
  success: (message: string, options?: { duration?: number; position?: 'top' | 'bottom' }) => {
    if (showToastFunction) {
      showToastFunction({
        type: 'success',
        message,
        duration: options?.duration,
        position: options?.position,
      });
    } else {
      console.warn('Toast function not initialized. Make sure ToastProvider is set up correctly.');
    }
  },

  error: (message: string, options?: { duration?: number; position?: 'top' | 'bottom' }) => {
    if (showToastFunction) {
      showToastFunction({
        type: 'error',
        message,
        duration: options?.duration,
        position: options?.position,
      });
    } else {
      console.warn('Toast function not initialized. Make sure ToastProvider is set up correctly.');
    }
  },

  errorWithValidation: (
    message: string, 
    errors: Record<string, string[]>, 
    options?: { duration?: number; position?: 'top' | 'bottom' }
  ) => {
    if (showToastFunction) {
      showToastFunction({
        type: 'error',
        message,
        errors,
        duration: options?.duration,
        position: options?.position,
      });
    } else {
      console.warn('Toast function not initialized. Make sure ToastProvider is set up correctly.');
    }
  },
};
