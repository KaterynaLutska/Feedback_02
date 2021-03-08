const Statistics = ({
  good,
  neutral,
  bad,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => {
  return (
    <div>
      <h1></h1>
      <p className="statistic">Good:{good}</p>
      <p className="statistic">Neutral:{neutral}</p>
      <p className="statistic">Bad: {bad}</p>
      <p className="statistic">All feedbacks:{countTotalFeedback} </p>
      <p className="statistic">
        Just positive feedbacks:
        {countPositiveFeedbackPercentage}%
      </p>
    </div>
  );
};

export default Statistics;
