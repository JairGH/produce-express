import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { Text, View } from 'react-native';

const TabIcon = ({ icon, name, color, focused}) => {
  return (
  <View className="items-center justify-center gap-1">
    <FontAwesome className="w-6 h-6" size={28} name={icon} color={color}/>
    <Text className={`${focused ? "font-semibold" : "font-normal"} text-xs`}>{name}</Text>
  </View>
  )
}

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarShowLabel: false}}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
              icon={"home"}
              color={"black"}
              name={"Home"}
              focused={focused}/>
            )
          }}
        />
        <Tabs.Screen
          name="produce"
          options={{
            title: 'Produce',
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
              icon={"leaf"}
              color={"black"}
              name={"Produce"}
              focused={focused}/>
            )
          }}
        />
          <Tabs.Screen
          name="orders"
          options={{
            title: 'Orders',
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
              icon={"truck"}
              color={"black"}
              name={"Orders"}
              focused={focused}/>
            )
          }}
        />
            <Tabs.Screen
          name="account"
          options={{
            title: 'Account',
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
              icon={"user"}
              color={"black"}
              name={"Account"}
              focused={focused}/>
            )
          }}
        />
    </Tabs>
  );
}
