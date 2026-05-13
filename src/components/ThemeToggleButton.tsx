// src/components/ThemeToggleButton.tsx
import { BsSunFill, BsMoonStarsFill } from 'react-icons/bs';
import { useTheme } from '../hooks/useTheme';

export const ThemeToggleButton = () => {
  // Consumimos la lógica de nuestro Custom Hook
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`btn ${theme === 'light' ? 'btn-outline-dark' : 'btn-outline-light'} d-flex align-items-center justify-content-center p-2`}
      aria-label="Alternar modo claro/oscuro"
      title="Alternar modo claro/oscuro"
    >
      {theme === 'light' ? <BsMoonStarsFill size={18} /> : <BsSunFill size={18} />}
    </button>
  );
};