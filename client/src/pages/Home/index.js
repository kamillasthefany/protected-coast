import React from 'react';
import { Menu } from '../../components/Menu';
import Quote from '../../components/Typography/Quote';
import { Container } from './styles';

const Home = () => {
  return (
    <div>
      <Menu />
      <Container>     
        <Quote
          text="I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at."
          author=" Kanye West, Musician"
        />
      </Container>
    </div>
  )
}

export default Home;
