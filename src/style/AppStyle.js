import styled from 'styled-components';
import { colors } from './Colors';

export const StyledApp = styled.div`
  text-align: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
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
  display: flex;
  margin-top: 2.5rem;
  margin-left: 1rem;
  margin-right: 1rem;
  justify-content: space-between
`;

export const StyledLink = styled.a`
  font-size: smaller;
`;
