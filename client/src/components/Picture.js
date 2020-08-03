import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  width: 100%;
  margin: 0 0 5px;
  padding: 10px;
  background: #000000;
  overflow: hidden;
  break-inside: avoid;
  cursor: pointer;
`;

const Image = styled.img`
  max-width: 100%;
  border-radius: 10px;
`;

const ImageTitle = styled.h2`
  margin: 8px 0 0;

  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.28px;
`;

const Description = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 10px;
  line-height: 14px;
  letter-spacing: -0.2px;
`;

export default ({ imagePath, title, description }) => {
  return (
    <Box>
      <Image src={imagePath} />
      <ImageTitle>{title}</ImageTitle>
      <Description>{description}</Description>
    </Box>
  );
};
