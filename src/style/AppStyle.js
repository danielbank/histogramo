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

export const StyledGitHubRibbon = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  border: 0;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const StyledLeftContent = styled.div`
  width: ${props => props.percentWidth}%;
  display: ${props => props.percentWidth < 30 ? 'none' : 'block'}
`;

export const StyledRightContent = styled.div`
  width: ${props => props.percentWidth}%;
  display: ${props => props.percentWidth < 30 ? 'none' : 'block'}
`;
