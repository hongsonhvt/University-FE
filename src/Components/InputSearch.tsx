import {
  Input,
  InputGroup,
  InputRightElement,
  Spinner,
} from '@chakra-ui/react';
import { StatusConstantValue } from '@constants';
import { useDebounce } from '@uidotdev/usehooks';
import { useEffect, useRef, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

type InputSearchParams = {
  status: StatusConstantValue;
  onSearch: (searchText: string) => void;
  debounceTime?: number;
  placeholder?: string;
};

const InputSearch = ({
  status,
  onSearch,
  debounceTime,
  placeholder,
}: InputSearchParams) => {
  const [searchText, setSearchText] = useState('');
  const debouncedSearch = useDebounce(searchText, debounceTime ?? 300);
  const first = useRef(true);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }

    onSearch(debouncedSearch);
  }, [debouncedSearch]);

  return (
    <InputGroup>
      <Input
        onChange={(e) => setSearchText(e.target.value)}
        placeholder={placeholder ?? 'Search...'}
      />
      <InputRightElement>
        {status === 'loading' ? <Spinner /> : <AiOutlineSearch />}
      </InputRightElement>
    </InputGroup>
  );
};

export { InputSearch };
