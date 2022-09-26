import PropTypes from 'prop-types';
import {
  StatisticsSection,
  Title,
  StatList,
  Item,
  Label,
  Percentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      {title !== undefined && <Title>{title}</Title>}

      <StatList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <Item key={id}>
              <Label>{label}</Label>
              <Percentage> {percentage}%</Percentage>
            </Item>
          );
        })}
      </StatList>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.object.isRequired),
  title: PropTypes.string,
};
