import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  max-width: calc(100vw - 48px);
  list-style-type: none;
  padding: 12px;
  font-size: 10px;
  text-align: center;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
