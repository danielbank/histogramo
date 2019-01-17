import styled from 'styled-components';
import { colors } from './Colors';

export const StyledApp = styled.div`
  text-align: center;
`;

export const StyledHeader = styled.header`
  background-color: ${colors.appBlack};
  color: white;
`;

export const StyledBody = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

export const StyledTitle = styled.h1`
  font-size: 1.5em;
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
`;

export const StyledRightContent = styled.div`
  width: ${props => props.percentWidth}%;
`;
