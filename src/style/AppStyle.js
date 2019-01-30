import styled from 'styled-components';
import { colors } from './Colors';

export const StyledApp = styled.div`
  text-align: center;
`;

export const StyledHeader = styled.header`
  background-color: ${colors.appBlack};
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: left;
  flex-wrap: wrap;
`;

export const StyledBody = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

export const StyledLeftContent = styled.div`
  width: ${props => props.percentWidth}%;
  display: ${props => props.percentWidth < 30 ? 'none' : 'block'}
`;

export const StyledRightContent = styled.div`
  width: ${props => props.percentWidth}%;
  display: ${props => props.percentWidth < 30 ? 'none' : 'block'}
`;

export const StyledFooter = styled.div`
`;
