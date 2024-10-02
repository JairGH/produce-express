import React from "react";
import { SafeAreaView, View } from "react-native";

import SearchBar from "@/components/searchBar";
import ProductCard from "@/components/productCard";

const Orders = () => {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-0 justify-start items-center pb-6">
        <SearchBar/>
      </View>
      <View>
        <ProductCard/>
      </View>
    </SafeAreaView>
  );
};

export default Orders;
