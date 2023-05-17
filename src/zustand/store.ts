import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {create} from 'zustand';

interface StoreState {
  user: FirebaseAuthTypes.User;
  setUser: (user: FirebaseAuthTypes.User) => void;
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
  user: {} as FirebaseAuthTypes.User,
  setUser: (user: FirebaseAuthTypes.User) => set({user}),
}));

export default useStore;
