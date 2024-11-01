import { useNavigate } from 'react-router-dom';

const useCustomNavigate = () => {
  const navigate = useNavigate();
  
  const goToPage = (path: string) => {
    navigate(path);
  };

  return { goToPage };
};

export default useCustomNavigate;
