import { View, Text } from "react-native";

import { Fab, FabLabel } from "@/components/ui/fab";
import { ShoppingBasket } from "lucide-react-native";

const Cart = ({items}) => {

  return (
    <>
      <Fab
        size="sm"
        placement="bottom left"
        className="h-12 w-18 bg-orange-400"
      >
        <ShoppingBasket color="white" size={20} />
        <View className="absolute -top-1 -right-2 bg-success-500 w-6 h-6 rounded-full flex justify-center items-center">
          <Text className="text-white text-sm">{items}</Text>
        </View>
        <FabLabel className="text-lg ml-1">Finish order</FabLabel>
      </Fab>
    </>
  );
};

export default Cart;
