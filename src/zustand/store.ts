import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {create} from 'zustand';

interface StoreState {
  conformationResult: FirebaseAuthTypes.ConfirmationResult | null;
  setConformationResult: (
    conformationResult: FirebaseAuthTypes.ConfirmationResult,
  ) => void;
}

const useStore = create<StoreState>()(set => ({
  conformationResult: null,
  setConformationResult: (
    conformationResult: FirebaseAuthTypes.ConfirmationResult,
  ) => set({conformationResult}),
}));

export default useStore;
