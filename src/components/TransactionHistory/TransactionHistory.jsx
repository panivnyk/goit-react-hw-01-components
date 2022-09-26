import PropTypes from 'prop-types';
import { Table, Thead, Tr, Th, Tbody, Td } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </Tr>
      </Thead>

      <Tbody>
        {items.map(transaction => {
          return (
            <Tr key={transaction.id}>
              <Td>{transaction.type}</Td>
              <Td>{transaction.amount}</Td>
              <Td>{transaction.currency}</Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.object.isRequired),
};
