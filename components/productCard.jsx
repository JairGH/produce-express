import React from "react";
import { Box } from "@/components/ui/box";
import { Fab, FabIcon, FabLabel } from "@/components/ui/fab";
import { AddIcon } from "@/components/ui/icon";
import { View, Image } from "react-native";
import { Heading } from "@/components/ui/heading";
import { BadgeDollarSign } from "lucide-react-native";


const ProductCard = ({data, onPress}) => {
  return (
    <View className="flex flex-row justify-evenly flex-wrap gap-4 mb-8">
      {data.map((product) => (
        <Box
          key={product.id}
          className="h-64 min-w-[185px] max-w-[190px] md:min-w-52 bg-secondary-100 border-outline-300 rounded-md overflow-hidden"
        >
          <Image
            className="h-[125px] w-full object-contain rounded-md"
            source={{
              uri: product.uri,
            }}
          />
          <Heading size="2xl" className="pl-2 text-primary-500">
            {product.name}
          </Heading>
          <Fab
            size="sm"
            placement="bottom right"
            className="h-11 w-20 flex justify-center items-center opacity-95"
            onPress={() => onPress()}
          >
            <FabIcon as={AddIcon} />
            <FabLabel className="text-base">Add</FabLabel>
          </Fab>
          <Fab
            size="sm"
            placement="bottom left"
            className="h-11 w-[75px] opacity-95 bg-orange-400"
          >
            <FabIcon as={BadgeDollarSign} color="white" className="ml-2" />
            <FabLabel className="text-base ml-1">{product.price}</FabLabel>
          </Fab>
        </Box>
      ))}
    </View>
  );
};

export default ProductCard;
