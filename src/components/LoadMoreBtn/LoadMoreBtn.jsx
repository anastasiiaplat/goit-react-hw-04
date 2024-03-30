

const LoadMoreBtn = ({ onLoadMore, hasMoreImages }) => {
  if (!hasMoreImages) {
    return null; 
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <button onClick={onLoadMore}>Load more</button>
    </div>
  );
};

export default LoadMoreBtn;
