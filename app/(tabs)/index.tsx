import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { StatusBar } from 'expo-status-bar';
import { Platform, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View className={Platform.OS === "ios" ? "mt-12 px-2" : "mt-4 px-2"}>
      <StatusBar hidden />
      <VStack className="justify-between" >
        <Text className='text-2xl color-tertiary-0 font-bold'>Home</Text>
        <Text className='text-2xl color-tertiary-50 font-bold'>Home</Text>
        <Text className='text-2xl color-tertiary-100 font-bold'>Home</Text>
        <Text className='text-2xl color-tertiary-200 font-bold'>Home</Text>
        <Text className='text-2xl color-tertiary-300 font-bold'>Home</Text>
        <Text className='text-2xl color-tertiary-400 font-bold'>Home</Text>
        <Text className='text-2xl color-tertiary-500 font-bold'>Home</Text>
        <Text className='text-2xl color-tertiary-600 font-bold'>Home</Text>
        <Text className='text-2xl color-tertiary-700 font-bold'>Home</Text>
        <Text className='text-2xl color-tertiary-800 font-bold'>Text</Text>
        <Text className='text-2xl color-tertiary-900 font-bold'>Text</Text>
        <Text className='text-2xl color-tertiary-950 font-bold'>Text</Text>
        <Text className='text-2xl color-typography-0 font-bold'>Home</Text>
        <Text className='text-2xl color-typography-50 font-bold'>Home</Text>
        <Text className='text-2xl color-typography-100 font-bold'>Home</Text>
        <Text className='text-2xl color-typography-200 font-bold'>Home</Text>
        <Text className='text-2xl color-typography-300 font-bold'>Home</Text>
        <Text className='text-2xl color-typography-400 font-bold'>Home</Text>
        <Text className='text-2xl color-typography-500 font-bold'>Home</Text>
        <Text className='text-2xl color-typography-600 font-bold'>Home</Text>
        <Text className='text-2xl color-typography-700 font-bold'>Home</Text>
        <Text className='text-2xl color-typography-800 font-bold'>Text</Text>
        <Text className='text-2xl color-typography-900 font-bold'>Text</Text>
        <Text className='text-2xl color-typography-950 font-bold'>Text</Text>
      </VStack>
    </View>
  );
}

const styles = {
  rootContainer: ``,
  text: `bg-red-500`,

};
