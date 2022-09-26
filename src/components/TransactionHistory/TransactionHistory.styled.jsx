import styled from '@emotion/styled';

export const Table = styled.table`
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
`;
export const Thead = styled.thead`
  text-align: left;
  padding: 20px;
  background-color: #56c2ec;
  text-transform: uppercase;
  color: #ffffff;
  font-size: 14px;
  height: 40px;
`;
export const Tr = styled.tr`
  text-align: center;
  :nth-of-type(even) {
    background-color: #ccc;
  }
`;
export const Th = styled.th`
  text-align: center;
`;
export const Tbody = styled.tbody`
  text-align: center;
`;
export const Td = styled.td`
  padding-left: 50px;
  padding-right: 50px;
  text-align: left;
`;
