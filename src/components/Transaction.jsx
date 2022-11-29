import PropTypes from 'prop-types';
import css from './Transaction.module.css';

const Transaction = function ({ transactionItems }) {
  return (
    <table className={css.transaction_history}>
      <thead className={css.tableContent}>
        <tr>
          <th className={css.typeHead}>Type</th>
          <th className={css.amountHead}>Amount</th>
          <th className={css.currencyHead}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.tableContent}>
        <tr>
          <td className={css.tableRow}>{transactionItems[0].type}</td>
          <td className={css.tableRow}>{transactionItems[0].amount}</td>
          <td className={css.tableRow}>{transactionItems[0].currency}</td>
        </tr>
        <tr>
          <td className={css.tableRow}>{transactionItems[1].type}</td>
          <td className={css.tableRow}>{transactionItems[1].amount}</td>
          <td className={css.tableRow}>{transactionItems[1].currency}</td>
        </tr>
        <tr>
          <td className={css.tableRow}>{transactionItems[2].type}</td>
          <td className={css.tableRow}>{transactionItems[2].amount}</td>
          <td className={css.tableRow}>{transactionItems[2].currency}</td>
        </tr>
        <tr>
          <td className={css.tableRow}>{transactionItems[3].type}</td>
          <td className={css.tableRow}>{transactionItems[3].amount}</td>
          <td className={css.tableRow}>{transactionItems[3].currency}</td>
        </tr>
        <tr>
          <td className={css.tableRow}>{transactionItems[4].type}</td>
          <td className={css.tableRow}>{transactionItems[4].amount}</td>
          <td className={css.tableRow}>{transactionItems[4].currency}</td>
        </tr>
        <tr>
          <td className={css.tableRow}>{transactionItems[5].type}</td>
          <td className={css.tableRow}>{transactionItems[5].amount}</td>
          <td className={css.tableRow}>{transactionItems[5].currency}</td>
        </tr>
        <tr>
          <td className={css.tableRow}>{transactionItems[6].type}</td>
          <td className={css.tableRow}>{transactionItems[6].amount}</td>
          <td className={css.tableRow}>{transactionItems[6].currency}</td>
        </tr>
        <tr>
          <td className={css.tableRow}>{transactionItems[7].type}</td>
          <td className={css.tableRow}>{transactionItems[7].amount}</td>
          <td className={css.tableRow}>{transactionItems[7].currency}</td>
        </tr>
        <tr>
          <td className={css.tableRow}>{transactionItems[8].type}</td>
          <td className={css.tableRow}>{transactionItems[8].amount}</td>
          <td className={css.tableRow}>{transactionItems[8].currency}</td>
        </tr>
        <tr>
          <td className={css.tableRow}>{transactionItems[9].type}</td>
          <td className={css.tableRow}>{transactionItems[9].amount}</td>
          <td className={css.tableRow}>{transactionItems[9].currency}</td>
        </tr>
        <tr>
          <td className={css.tableRow}>{transactionItems[10].type}</td>
          <td className={css.tableRow}>{transactionItems[10].amount}</td>
          <td className={css.tableRow}>{transactionItems[10].currency}</td>
        </tr>
        <tr>
          <td className={css.tableRow}>{transactionItems[11].type}</td>
          <td className={css.tableRow}>{transactionItems[11].amount}</td>
          <td className={css.tableRow}>{transactionItems[11].currency}</td>
        </tr>
        <tr>
          <td className={css.tableRow}>{transactionItems[12].type}</td>
          <td className={css.tableRow}>{transactionItems[12].amount}</td>
          <td className={css.tableRow}>{transactionItems[12].currency}</td>
        </tr>
        <tr>
          <td className={css.tableRow}>{transactionItems[13].type}</td>
          <td className={css.tableRow}>{transactionItems[13].amount}</td>
          <td className={css.tableRow}>{transactionItems[13].currency}</td>
        </tr>
        <tr>
          <td className={css.tableRow}>{transactionItems[14].type}</td>
          <td className={css.tableRow}>{transactionItems[14].amount}</td>
          <td className={css.tableRow}>{transactionItems[14].currency}</td>
        </tr>
        <tr>
          <td className={css.tableRow}>{transactionItems[15].type}</td>
          <td className={css.tableRow}>{transactionItems[15].amount}</td>
          <td className={css.tableRow}>{transactionItems[15].currency}</td>
        </tr>
        <tr>
          <td className={css.tableRow}>{transactionItems[16].type}</td>
          <td className={css.tableRow}>{transactionItems[16].amount}</td>
          <td className={css.tableRow}>{transactionItems[16].currency}</td>
        </tr>
        <tr>
          <td className={css.tableRow}>{transactionItems[17].type}</td>
          <td className={css.tableRow}>{transactionItems[17].amount}</td>
          <td className={css.tableRow}>{transactionItems[17].currency}</td>
        </tr>
        <tr>
          <td className={css.tableRow}>{transactionItems[18].type}</td>
          <td className={css.tableRow}>{transactionItems[18].amount}</td>
          <td className={css.tableRow}>{transactionItems[18].currency}</td>
        </tr>
        <tr>
          <td className={css.tableRow}>{transactionItems[19].type}</td>
          <td className={css.tableRow}>{transactionItems[19].amount}</td>
          <td className={css.tableRow}>{transactionItems[19].currency}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Transaction;
