const FeedbackOptions = ({ options, onLeaveFeedback, voice }) => {
  const buttons = Object.keys(options);

  return (
    <div className="button-wrap">
      {buttons.map(button => (
        <button key={button} type="button" onClick={onLeaveFeedback}>
          {button}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
