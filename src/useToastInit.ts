import { useEffect } from 'react';
import { setToastFunction } from './ToastAPI';
import { useToast } from './ToastContext';

export const useToastInit = () => {
  const { showToast } = useToast();

  useEffect(() => {
    setToastFunction(showToast);
  }, [showToast]);
};
