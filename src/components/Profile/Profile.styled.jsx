import styled from '@emotion/styled';
export const ProfileSection = styled.div`
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
`;
export const Description = styled.div`
  font-weight: bold;
  text-align: center;
`;
export const Avatar = styled.img`
  margin-top: 20px;
  padding: 20px;
  border: dashed #ddd;
  border-radius: 50%;
  width: 100px;
`;
export const Name = styled.p`
  padding: 0;
  margin-top: 10px;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 20px;
`;
export const Tag = styled.p`
  color: #777;
  padding: 0;
  margin: 0;
  font-weight: lighter;
`;
export const Location = styled.p`
  color: #777;
  font-weight: lighter;
  margin-top: 10px;
  margin-bottom: 30px;
`;
export const Stats = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  width: 250px;
`;

export const StatsList = styled.li`
  display: flex;
  width: 100%;
  background-color: #ddd;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  flex-direction: column;
  padding: 10px;
  align-items: center;
  list-style: none;
`;
export const Label = styled.span`
  margin-bottom: 5px;
  color: #777;
`;

export const Quantity = styled.span`
  font-weight: bold;
`;
