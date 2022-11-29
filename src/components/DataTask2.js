import PropTypes from 'prop-types';

export default function DataStatsTask({
  id_1,
  id_2,
  id_3,
  id_4,
  id_5,
  label_1,
  label_2,
  label_3,
  label_4,
  label_5,
  percentage_1,
  percentage_2,
  percentage_3,
  percentage_4,
  percentage_5,
}) {
  return (
    <section className="statistics">
      <h1>Task 2</h1>
      <h2 className="title">Upload stats</h2>

      <ul className="stat-list">
        <li className="item">
          <span className="label">{label_1}</span>
          <span className="percentage">{percentage_1}%</span>
        </li>
        <li className="item">
          <span className="label">{label_2}</span>
          <span className="percentage">{percentage_2}%</span>
        </li>
        <li className="item">
          <span className="label">{label_3}</span>
          <span className="percentage">{percentage_3}%</span>
        </li>
        <li className="item">
          <span className="label">{label_4}</span>
          <span className="percentage">{percentage_4}%</span>
        </li>
        <li className="item">
          <span className="label">{label_5}</span>
          <span className="percentage">{percentage_5}%</span>
        </li>
      </ul>
    </section>
  );
}

DataStatsTask.propTypes = {
  id: PropTypes.string,
  percentage: PropTypes.number,
  label: PropTypes.string,
};
