import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  width: 250px;
  text-align: center;
  align-items: center;
  padding: 10px;
  gap: 10px;
  margin-bottom: 20px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
`;

export const Status = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${props => {
    return props.isOnline ? 'green' : 'red';
  }};
`;

export const Avatar = styled.img`
  margin-right: 10px;
`;

export const Name = styled.p`
  font-size: 20px;
`;
