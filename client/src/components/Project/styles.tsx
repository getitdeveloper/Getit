import React from 'react';
import styled from 'styled-components';

export const ProjectContent = styled.div`
display: inline-block;
color = ${(props) => props.color || '#000'};
background-color: #f5f5f5;
border-radius: 27px;
padding: 3%;
font-size: 80%;
margin-right: 2%;
margin-top: 2%;
`;
