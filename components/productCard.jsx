import React from "react";
import { Box } from "@/components/ui/box";
import { Fab, FabIcon, FabLabel } from "@/components/ui/fab";
import { AddIcon } from "@/components/ui/icon";
import { View, Image } from "react-native";
import { Heading } from "@/components/ui/heading";
import { BadgeDollarSign } from "lucide-react-native";

const ProductCard = () => {
  const data = [
    {
      id: 1,
      name: "Oranges",
      uri: "https://images.unsplash.com/photo-1591206369811-4eeb2f03bc95?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fG9yYW5nZXxlbnwwfHwwfHx8MA%3D%3D",
      price: 15.99,
    },
    {
      id: 2,
      name: "Blue Berries",
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
  ];

  return (
    <View className="flex flex-row justify-evenly flex-wrap gap-4">
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
            fallbackSource={{
              uri: "https://drive.google.com/uc?export=view&id=1h1e89BtQCp6JdGiKo92dlf5bjHC8hLjt",
            }}
          />
          <Heading size="2xl" className="pl-2 text-primary-500">
            {product.name}
          </Heading>
          <Fab
            size="sm"
            placement="bottom right"
            className="h-11 w-20 flex justify-center items-center opacity-95"
            isHovered={false}
            isDisabled={false}
            isPressed={false}
          >
            <FabIcon as={AddIcon} />
            <FabLabel className="text-base">Add</FabLabel>
          </Fab>
          <Fab
            size="sm"
            placement="bottom left"
            className="h-11 w-[75px] opacity-95 bg-orange-400"
            isHovered={false}
            isDisabled={false}
            isPressed={false}
          >
            <FabIcon as={BadgeDollarSign}  color="white" className="ml-2"/>
            <FabLabel className="text-base ml-1">{product.price}</FabLabel>
          </Fab>
        </Box>
      ))}
    </View>
  );
};

export default ProductCard;
