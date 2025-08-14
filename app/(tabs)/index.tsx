import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { View } from 'react-native';

export default function HomeScreen() {
  return (
    <ThemedView className= "flex-1 justify-center item-center border-[10px] border-green-300 ">
      <View className='h-10  border-[3px] border-lime-500'>
      <ThemedText className={styles.text}>Helllo, World!</ThemedText>
      </View>
      <ThemedText className={styles.text}>Helllo, World!</ThemedText>
    </ThemedView>
  );
}

const styles = {
  rootContainer: ``,
  text: `bg-red-500`,

};
