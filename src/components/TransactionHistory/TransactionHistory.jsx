import PropTypes from 'prop-types';
import { Table, Thead, Tr, Th, Tbody, Td } from './TransactionHistory.styled';

export const TransactionHistory = () => {
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
        <Tr>
          <Td>Invoice</Td>
          <Td>125</Td>
          <Td>USD</Td>
        </Tr>
        <Tr>
          <Td>Withdrawal</Td>
          <Td>85</Td>
          <Td>USD</Td>
        </Tr>
      </Tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.object.isRequired),
};
