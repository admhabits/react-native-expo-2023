import AsyncStorage from '@react-native-async-storage/async-storage';

// Save state to AsyncStorage
export const saveState = async (state) => {
  try {
    const serializedState = JSON.stringify(state);
    await AsyncStorage.setItem("shared_preferences", serializedState);
  } catch (error) {
    console.error("Error saving state to AsyncStorage:", error);
  }
};

// // Usage example
// saveState(yourStateObject);

// Load state from AsyncStorage
export const loadState = async () => {
  try {
    const serializedState = await AsyncStorage.getItem("shared_preferences");
    if (serializedState !== null) {
      return JSON.parse(serializedState);
    }
    return undefined; // Return undefined if no state is found in AsyncStorage
  } catch (error) {
    console.error("Error loading state from AsyncStorage:", error);
    return undefined; // Return undefined in case of an error
  }
};

// Usage example
// const initialState = await loadState();
