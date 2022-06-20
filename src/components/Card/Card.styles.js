import styled from 'styled-components';

export const CardContainer = styled.div`
  display: inline-block;
  width: 300px;
  height:300px;
  background-color: black;
  border: 2px solid black;
  border-radius: 5px;
  margin:10px;
  background-size:auto auto
  cursor:pointer;
  background-image: url(${({ active, img }) => active ? img : 'none'});
`;
