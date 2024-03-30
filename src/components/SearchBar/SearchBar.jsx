
import { useForm } from 'react-hook-form';
import { useToaster } from 'react-hot-toast';

const SearchBar = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();
  const toaster = useToaster();
  
  const handleFormSubmit = (data) => {
    if (data.searchText.trim() === '') {
      toaster.error('Please enter text to search images.');
      return;
    }
    onSubmit(data.searchText);
  };
  
  return (
    <header>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <input
          type="text"
          {...register('searchText')}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
