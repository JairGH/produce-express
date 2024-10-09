import React, { useState, useRef} from "react";
import { SafeAreaView, ScrollView, View } from "react-native";

import Cart from "@/components/Cart";
import ProductCard from "@/components/ProductCard";
import SearchBar from "@/components/SearchBar";



const Orders = () => {
  const data = [
    {
      id: 1,
      name: "Oranges",
      uri: "https://images.unsplash.com/photo-1591206369811-4eeb2f03bc95?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fG9yYW5nZXxlbnwwfHwwfHx8MA%3D%3D",
      price: 15.99,
    },
    {
      id: 2,
      name: "Blueberry",
      uri: "https://images.unsplash.com/photo-1423483641154-5411ec9c0ddf?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 25.99,
    },
    {
      id: 3,
      name: "Green Apples",
      uri: "https://plus.unsplash.com/premium_photo-1666877058935-27bb63df847a?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 55.99,
    },
    {
      id: 4,
      name: "Pineapple",
      uri: "https://images.unsplash.com/photo-1565623513508-ffe2588e327c?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 35.99,
    },
    {
      id: 5,
      name: "Green Apples",
      uri: "https://plus.unsplash.com/premium_photo-1666877058935-27bb63df847a?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 55.99,
    },
    {
      id: 6,
      name: "Pineapple",
      uri: "https://images.unsplash.com/photo-1565623513508-ffe2588e327c?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 35.99,
    },
  ];
  const [items, setItems] = useState(0);
  const bottomSheetRef = useRef(null);

  const addItem = () => {
    setItems((prevItems) => prevItems + 1);
  };

  return (
    <SafeAreaView className="flex-1">
      <ScrollView contentContainerStyle={{ flexGrow: 1}}>
        <View className="flex-0 justify-start items-center pb-6">
         <SearchBar/>
        </View>
      <ProductCard data={data} onPress={addItem}/>
      </ScrollView>
      <View className="absolute bottom-0 ml-32 justify-center items-center">
        <Cart/>
      </View>
    </SafeAreaView>
  );
};

export default Orders;
