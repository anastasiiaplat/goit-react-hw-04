
const LoadMoreBtn = ({ onLoadMore }) => {
  return (
    <button
      onClick={() => onLoadMore()}
      type="button"
    >
      Load More...
    </button>
  );
};

export default LoadMoreBtn;