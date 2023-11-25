import {
  ChakraProvider,
  ToastProviderProps,
  extendTheme,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import { updateToken } from './redux/feature/authSlice';
import { LocalStorageConstant } from './shared/constants';
import { routes } from './shared/routes';

const theme = extendTheme({
  components: {
    Table: {
      parts: ['th', 'td'],
      baseStyle: {
        th: {
          borderColor: 'var(--chakra-colors-gray-400) !important',
          border: '1px solid var(--chakra-colors-gray-400) !important',
        },
        td: {
          borderColor: 'var(--chakra-colors-gray-400) !important',
          border: '1px solid var(--chakra-colors-gray-400) !important',
        },
      },
    },
  },
});

const toastOptions: ToastProviderProps = {
  defaultOptions: {
    position: 'top-right',
  },
};

const router = createBrowserRouter(routes);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const savedToken = localStorage.getItem(LocalStorageConstant.token);
    if (savedToken) dispatch(updateToken(savedToken));
  }, []);

  return (
    <ChakraProvider theme={theme} toastOptions={toastOptions}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
