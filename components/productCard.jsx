import React from "react";
import { Box } from "@/components/ui/box";
import { Fab, FabIcon, FabLabel } from "@/components/ui/fab";
import { AddIcon, FavouriteIcon } from "@/components/ui/icon";
import { View, Image, Text } from "react-native";
import { Heading } from "@/components/ui/heading";

const ProductCard = ({ product }) => {
  return (
    <View className="flex justify-evenly flex-row">
      <Box className="h-52 w-[200px] bg-secondary-100 border-outline-300 rounded-md overflow-hidden">
        <Image
          className="h-28 w-full object-contain rounded-md"
          source={{
            uri: "https://images.unsplash.com/photo-1591206369811-4eeb2f03bc95?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fG9yYW5nZXxlbnwwfHwwfHx8MA%3D%3D",
          }}
          fallbackSource={{
            uri: "https://drive.google.com/uc?export=view&id=1h1e89BtQCp6JdGiKo92dlf5bjHC8hLjt",
          }}
        />
        <Heading size="2xl" className="pl-2 text-primary-500">
          Oranges
        </Heading>
        <Fab
          size="md"
          placement="bottom right"
          isHovered={false}
          isDisabled={false}
          isPressed={false}
        >
          <FabIcon as={AddIcon} />
          <FabLabel>Add</FabLabel>
        </Fab>
        <Fab
          size="md"
          placement="bottom left"
          isHovered={false}
          isDisabled={false}
          isPressed={false}
        >
          <FabIcon as={FavouriteIcon} />
        </Fab>
      </Box>
      <Box className="h-52 w-[200px] bg-secondary-100 border-outline-300 rounded-md overflow-hidden">
        <Image
          className="h-28 w-full object-contain rounded-md"
          source={{
            uri: "https://images.unsplash.com/photo-1423483641154-5411ec9c0ddf?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
          fallbackSource={{
            uri: "https://drive.google.com/uc?export=view&id=1h1e89BtQCp6JdGiKo92dlf5bjHC8hLjt",
          }}
        />
        <Heading size="2xl" className="pl-2 text-primary-500">
          Blue berries
        </Heading>
        <Fab
          size="md"
          placement="bottom right"
          isHovered={false}
          isDisabled={false}
          isPressed={false}
        >
          <FabIcon as={AddIcon} />
          <FabLabel>Add</FabLabel>
        </Fab>
        <Fab
          size="md"
          placement="bottom left"
          isHovered={false}
          isDisabled={false}
          isPressed={false}
        >
          <FabIcon as={FavouriteIcon} />
        </Fab>
      </Box>
    </View>
  );
};

export default ProductCard;
