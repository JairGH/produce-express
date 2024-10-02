import { Input, InputField, InputSlot, InputIcon } from '@/components/ui/input';
import { Heading } from '@/components/ui/heading';
import { SearchIcon } from '@/components/ui/icon';
import { View } from 'react-native';


const SearchBar = () => ( 
  <View className='h-52 gap-2'>
    <Heading className="text-info-600 leading-normal" size='2xl'>Start order</Heading>
    <Input className='w-4/5 rounded-lg h-12'>
    <InputSlot className='pl-3'>
      <InputIcon as={SearchIcon}/>
    </InputSlot>
    <InputField
      placeholder="Search..."
    />
    </Input>
    </View>
  );

  export default SearchBar