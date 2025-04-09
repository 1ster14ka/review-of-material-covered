const FeedBack = ({ feedBacks, total, positive }) => {
  return (
    <div>
      <p>Good: {feedBacks.good}</p>
      <p>Neutral: {feedBacks.neutral}</p>
      <p>Bad: {feedBacks.bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {positive}</p>
    </div>
  );
};

export default FeedBack;
