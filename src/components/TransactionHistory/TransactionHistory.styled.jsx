import styled from '@emotion/styled';

export const Table = styled.table`
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
`;
export const Thead = styled.thead`
  text-align: left;
  background-color: #56c2ec;
  text-transform: uppercase;
  color: #ffffff;
  font-size: 12px;
  letter-spacing: 1px;
  height: 30px;
`;
export const Tr = styled.tr`
  text-align: center;
  height: 30px;
  :nth-of-type(even) {
    background-color: #ddd;
  }
`;
export const Th = styled.th``;
export const Tbody = styled.tbody``;
export const Td = styled.td`
  text-transform: capitalize;
  font-size: 14px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 70px;
  padding-right: 70px;
  text-align: left;
`;
