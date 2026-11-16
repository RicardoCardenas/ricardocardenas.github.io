import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '../context/ThemeContext';
import { router } from './router';

export function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
