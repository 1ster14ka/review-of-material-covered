const Options = ({ resetFeedBack, updateFeedBacks, reset }) => {
  return (
    <div>
      <button onClick={() => updateFeedBacks("good")}>Good</button>
      <button onClick={() => updateFeedBacks("neutral")}>Neutral</button>
      <button onClick={() => updateFeedBacks("bad")}>Bad</button>
      {reset ? (
        <button
          onClick={() => {
            resetFeedBack({
              good: 0,
              neutral: 0,
              bad: 0,
            });
          }}
        >
          Reset
        </button>
      ) : null}
    </div>
  );
};

export default Options;
