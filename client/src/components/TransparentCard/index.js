import React from 'react';
import { Container, CardBox, Title, Text, Tags, ContentWrapper, CardContent, TweetWrapper } from './styles';

export const TransparentCard = ({ titulo, texto, hashtags }) => {
  return (
    <Container id="card">
      <CardBox id="cardbox">
        <TweetWrapper>
          <Title> {titulo}</Title>
          <Text> {texto} </Text>
          <Tags> {hashtags}</Tags>
        </TweetWrapper>
        <ContentWrapper>
          <Text> {texto} </Text>
        </ContentWrapper>

      </CardBox>
    </Container>

  );
};