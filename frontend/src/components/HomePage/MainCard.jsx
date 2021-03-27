import React from 'react';
import { titleCardDescription, smallCardItems } from './config';
import {
  MainCardContainer, Content, Description, Image, Title, SmallCardContainer, SmallCard,
} from './style';
import mainImage from './img/main.png';

const MainCard = () => (
  <>
    <MainCardContainer>
      <Content>
        <Title>Engineering Toolbox</Title>
        <Description>
          {titleCardDescription}
        </Description>
      </Content>
      <Image src={mainImage} />
    </MainCardContainer>
    <SmallCardContainer style={{ marginTop: '30px' }}>
      {smallCardItems.map((item) => (
        <SmallCard key={item.title} disabled={item.disabled} exact to={item.path}>
          <Content>
            <Image small src={item.image} />
            <Description small>
              <Title small>{item.title}</Title>
              {item.description}
            </Description>
          </Content>
        </SmallCard>
      ))}

    </SmallCardContainer>
  </>
);

export default MainCard;
