const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const buttons = Object.keys(options);

  return (
    <div>
      {buttons.map(button => (
        <button key={button} type="button" onClick={onLeaveFeedback}>
          {button}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
