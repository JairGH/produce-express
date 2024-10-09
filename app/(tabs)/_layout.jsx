import { Tabs } from "expo-router";
import { Text, View } from "react-native";
import { House, Leaf, ReceiptText, ChefHat } from "lucide-react-native";

const TabIcon = ({ name, focused, children }) => {
  return (
    <View className="items-center justify-center gap-1">
      {children}
      <Text className={`${focused ? "font-semibold" : "font-normal"} text-xs`}>
        {name}
      </Text>
    </View>
  );
};

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#F2F2F2",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabIcon name={"Home"} focused={focused}>
              <House />
            </TabIcon>
          ),
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          title: "Orders",
          tabBarIcon: ({focused }) => (
            <TabIcon name={"Order"} focused={focused}>
              <Leaf/>
            </TabIcon>
          ),
        }}
      />
      <Tabs.Screen
         name="produce"
         options={{
           title: "Produce",
          tabBarIcon: ({focused }) => (
            <TabIcon name={"Logs"} focused={focused}>
              <ReceiptText/>
            </TabIcon>
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          tabBarIcon: ({focused }) => (
            <TabIcon name={"Account"} focused={focused}>
              <ChefHat/>
            </TabIcon>
          ),
        }}
      />
    </Tabs>
  );
}
