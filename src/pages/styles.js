import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const Loading = styled.ActivityIndicator.attrs({
  color: '#000080',
  size: 50,
})`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
