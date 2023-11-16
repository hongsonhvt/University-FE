import {
  Box,
  Drawer,
  DrawerContent,
  Flex,
  Icon,
  IconButton,
  Text,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import {
  AiFillHome,
  AiOutlineBook,
  AiOutlineCalendar,
  AiOutlineUser,
  AiTwotoneFileImage,
} from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { Link as ReactRouterLink } from 'react-router-dom';
import { RootState } from '../../redux/store';
import './SideBar.css';

// const SideBar = () => {
//   return (
//     <div className="sidebar">
//     <ul>
//       <li>
//           <NavLink to={'/'} className="nav-link-custom">
//             <i className="icon-navbar">
//                 <AiFillHome/>
//             </i>
//             Education
//           </NavLink>
//       </li>
//       <li>
//           <NavLink to={'/event'} className="nav-link-custom">
//             <i className="icon-navbar">
//                     <AiOutlineCalendar/>
//             </i>
//             Event
//           </NavLink>
//       </li>
//       <li>
//           <NavLink to={'/professor'} className="nav-link-custom">
//             <i className="icon-navbar">
//                 <AiOutlineBook/>
//             </i>
//             Professor
//           </NavLink>

//       </li>
//       <li>
//           <NavLink to={'/student'} className="nav-link-custom">
//             <i className="icon-navbar">
//                 <AiOutlineUser/>
//             </i>
//             Student
//           </NavLink>
//       </li>
//       <li>
//           <NavLink to={'/course'} className="nav-link-custom">
//             <i className="icon-navbar">
//               <AiTwotoneFileImage/>
//             </i>
//             Course
//           </NavLink>
//       </li>
//       <li>
//           <NavLink to={'/login'} className="nav-link-custom">
//             <i className="icon-navbar">
//               <AiTwotoneFileImage/>
//             </i>
//             Login
//           </NavLink>
//       </li>
//       <li>
//           <NavLink to={'/student-manage'} className="nav-link-custom">
//             <i className="icon-navbar">
//               <AiTwotoneFileImage/>
//             </i>
//             Student Manage
//           </NavLink>
//       </li>
//       <li>
//           <NavLink to={'/teacher-manage'} className="nav-link-custom">
//             <i className="icon-navbar">
//               <AiTwotoneFileImage/>
//             </i>
//             Teacher Manage
//           </NavLink>
//       </li>
//     </ul>
//   </div>
//   )
// }

function SideBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')}>
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
      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
    </Box>
  );
}
const SidebarContent = ({ onClose, ...rest }: any) => {
  const role = useSelector((store: RootState) => store.user.role);
  console.log('role', role);

  // const check = role === 'Teacher'
  // console.log('check',check);

  const LinkItems = [
    { name: 'Education', icon: AiFillHome, navigateTo: '/education' },
    { name: 'Event', icon: AiOutlineCalendar, navigateTo: '/event' },
    { name: 'Professor', icon: AiOutlineBook, navigateTo: '/professor' },
    { name: 'Student', icon: AiOutlineUser, navigateTo: '/student' },
    { name: 'Course', icon: AiTwotoneFileImage, navigateTo: '/course' },
    {
      name: 'StudentManage',
      icon: AiOutlineBook,
      navigateTo: '/student-manage',
    },
    {
      name: 'TeacherManage',
      icon: AiOutlineUser,
      navigateTo: '/teacher-manage',
    },
    {
      name: 'EventManage',
      icon: AiTwotoneFileImage,
      navigateTo: '/event-manage',
    },
    {
      name: 'CourseManage',
      icon: AiTwotoneFileImage,
      navigateTo: '/course-manage',
    },
    {
      name: 'EventTeacher',
      icon: AiTwotoneFileImage,
      navigateTo: '/event-teacher',
    },
    { name: 'Teacher', icon: AiTwotoneFileImage, navigateTo: '/teacher' },
    {
      name: 'CourseTeacher',
      icon: AiTwotoneFileImage,
      navigateTo: '/course-teacher',
    },
    {
      name: 'ProgramManage',
      icon: AiTwotoneFileImage,
      navigateTo: '/program-manage',
    },
    {
      name: 'ClassManage',
      icon: AiTwotoneFileImage,
      navigateTo: '/class-manage',
    },
  ];

  // Filter LinkItems based on the role
  const filteredLinkItems = LinkItems.filter((link) => {
    if (role === 'Admin') {
      return (
        link.name === 'Education' ||
        link.name === 'StudentManage' ||
        link.name === 'TeacherManage' ||
        link.name === 'EventManage' ||
        link.name === 'CourseManage' ||
        link.name === 'ProgramManage' ||
        link.name === 'ClassManage'
      );
    } else if (role === 'Teacher') {
      return (
        link.name === 'Education' ||
        link.name === 'EventTeacher' ||
        link.name === 'Teacher' ||
        link.name === 'CourseTeacher'
      );
    } else if (role === 'Student') {
      return (
        link.name === 'Education' ||
        link.name === 'Event' ||
        link.name === 'Professor' ||
        link.name === 'Course' ||
        link.name === 'Student'
      );
    }
    return true;
  });

  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight='1px'
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full' }}
      h='full'
      {...rest}
    >
      {filteredLinkItems.map((link) => (
        <NavItem
          key={link.name}
          icon={link.icon}
          as={ReactRouterLink}
          to={link.navigateTo}
        >
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }: any) => {
  return (
    <Box style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align='center'
        p='4'
        mx='4'
        borderRadius='lg'
        role='group'
        cursor='pointer'
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr='4'
            fontSize='16'
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
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

export default SideBar;
