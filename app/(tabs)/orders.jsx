import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";

import SearchBar from "@/components/searchBar";
import ProductCard from "@/components/productCard";

const Orders = () => {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View className="flex-0 justify-start items-center pb-6">
        <SearchBar />
      </View>
        <ProductCard />
        </ScrollView>
    </SafeAreaView>
  );
};

export default Orders;
