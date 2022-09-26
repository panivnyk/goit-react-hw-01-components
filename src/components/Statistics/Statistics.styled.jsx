import styled from '@emotion/styled';

export const StatisticsSection = styled.section`
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.h2`
  text-transform: uppercase;
  text-align: center;
  font-weight: 500;
  padding-top: 20px;
  padding-bottom: 20px;
`;
export const StatList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding-left: 0;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  background-color: #${getRandomHexColor};
`;
export const Label = styled.span`
  text-align: center;
`;
export const Percentage = styled.span`
  text-align: center;
`;

function getRandomHexColor() {
  return `${Math.floor(Math.random() * 16777215).toString(16)}`;
}
