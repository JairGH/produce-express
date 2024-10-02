import { Input, InputField, InputSlot, InputIcon } from "@/components/ui/input";
import { Heading } from "@/components/ui/heading";
import { SearchIcon } from "@/components/ui/icon";
import { View } from "react-native";

const SearchBar = () => {
  return (
    <View className="w-full pl-5 pr-5">
      <Heading className="text-info-600 leading-normal w-full" size="4xl">
        Start order
      </Heading>
      <Input className="w-full rounded-lg h-12 mt-4">
        <InputSlot className="pl-3">
          <InputIcon as={SearchIcon} />
        </InputSlot>
        <InputField className="text-lg" placeholder="Search..." />
      </Input>
    </View>
  );
};

export default SearchBar;
