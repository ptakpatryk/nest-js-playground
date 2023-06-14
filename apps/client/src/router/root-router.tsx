import { Link, Outlet, createBrowserRouter } from 'react-router-dom';
import { Box, Button } from '@chakra-ui/react';

export const rootRouter = createBrowserRouter([
  {
    path: '/',
    element: (
      <Box>
        <Box role="navigation" bg='blackAlpha.400' p={6}>
          <ul>
            <Button mr={4}>
              <Link to="/">Home</Link>
            </Button>
            <Button>
              <Link to="/page-2">Page 2</Link>
            </Button>
          </ul>
        </Box>
        <Outlet />
      </Box>
    ),
    children: [
      {
        path: '/',
        element: (
          <Box>
            This is the generated root route.{' '}
            <Link to="/page-2">
              <Button >
                Click here for page 2.
              </Button>
            </Link>
          </Box>

        )
      },
      {
        path: '/page-2',
        element: (
          <Link to="/">
            <Button >
              Click here to go back to root page.
            </Button>
          </Link>
        )
      }
    ]
  }
])
