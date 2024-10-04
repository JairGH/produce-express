import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";

import SearchBar from "@/components/searchBar";
import ProductCard from "@/components/productCard";
import Cart from "@/components/cart";

const Orders = () => {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex-0 justify-start items-center pb-6">
          <SearchBar />
        </View>
        <ProductCard />
      </ScrollView>
      <View className="absolute bottom-0 ml-32 justify-center items-center">
        <Cart />
      </View>
    </SafeAreaView>
  );
};

export default Orders;
