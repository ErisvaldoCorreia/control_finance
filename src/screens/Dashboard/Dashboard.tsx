import React from 'react';

import { Container, Header, Photo, UserGreetings, UserInfo, UserName, User, UserWrapper, IconPower } from './styles';

export function Dashboard() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{uri: 'https://avatars.githubusercontent.com/u/31773949?v=4'}} />
          <User>
            <UserGreetings>
                Olá,
              </UserGreetings>
              <UserName>
                Erisvaldo
              </UserName>
          </User>
          </UserInfo>
          <IconPower name='power' />
        </UserWrapper>
      </Header>
    </Container>
  );
}
