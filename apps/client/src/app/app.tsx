import { Box, Button } from '@chakra-ui/react';
import { Route, Routes, Link } from 'react-router-dom';

export function App() {
  return (
    <Box padding={8}>
      <div>
        <div role="navigation">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/page-2">Page 2</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                This is the generated root route.{' '}
                <Link to="/page-2">Click here for page 2.</Link>
              </div>
            }
          />
          <Route
            path="/page-2"
            element={
              <Button bg='red.600'>
                <Link to="/">Click here to go back to root page.</Link>
              </Button>
            }
          />
        </Routes>
        {/* END: routes */}
      </div>
      <Button>
        Siema
      </Button>
    </Box>
  );
}

export default App;
