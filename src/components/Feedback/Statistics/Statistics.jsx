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
      <p className="statistic">Все чудово:{good}</p>
      <p className="statistic">Добре:{neutral}</p>
      <p className="statistic">Погано: {bad}</p>
      <p className="statistic">Усі відгуки:{countTotalFeedback} </p>
      <p className="statistic">
        Лише позитивні:
        {countPositiveFeedbackPercentage}%
      </p>
    </div>
  );
};

export default Statistics;
