import { Tabs } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: Colors.primary,
      headerShown: false,
    }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Chat',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="chat" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}