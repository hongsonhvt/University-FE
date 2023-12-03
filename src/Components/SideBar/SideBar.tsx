import {
  Box,
  Drawer,
  DrawerContent,
  Flex,
  Icon,
  IconButton,
  Spinner,
  Text,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { SideBarItem } from '@models';
import { RootState } from '@redux';
import { routeIcon, routesByRole } from '@routes';
import { useEffect, useState } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

function SideBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size='full'
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
    </>
  );
}
const SidebarContent = ({ onClose, ...rest }: any) => {
  const role = useSelector((store: RootState) => store.auth.user?.role);
  const [items, setItems] = useState<SideBarItem[]>([]);

  useEffect(() => {
    if (role) {
      setItems(routesByRole[role] ?? []);
    }
  }, [role]);

  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight='1px'
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full' }}
      h='full'
      pt='2'
      {...rest}
    >
      {items.length ? (
        items.map((item) => (
          <NavItem
            key={item.name}
            icon={routeIcon[item.url]}
            as={NavLink}
            to={item.url}
            className='nav-item'
          >
            {item.name}
          </NavItem>
        ))
      ) : (
        <Flex justify='center' py='2'>
          <Spinner></Spinner>
        </Flex>
      )}
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }: any) => {
  return (
    <Box style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align='center'
        px='4'
        py='3'
        mx='4'
        borderRadius='lg'
        role='group'
        cursor='pointer'
        transition='all 100ms ease-in-out'
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}
      >
        {icon && <Icon as={icon} mr='4' fontSize='16' />}
        {children}
      </Flex>
    </Box>
  );
};

const MobileNav = ({ onOpen, ...rest }: any) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height='20'
      alignItems='center'
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth='1px'
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent='flex-start'
      {...rest}
    >
      <IconButton
        variant='outline'
        onClick={onOpen}
        aria-label='open menu'
        icon={<AiFillHome />}
      />

      <Text fontSize='2xl' ml='8' fontFamily='monospace' fontWeight='bold'>
        Logo
      </Text>
    </Flex>
  );
};

export { SideBar };
