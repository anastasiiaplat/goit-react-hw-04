
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const CustomLoader = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  );
};

export default CustomLoader;
