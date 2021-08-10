import React from 'react';

import { 
  Container, 
  Header, 
  Photo, 
  UserGreetings, 
  UserInfo, 
  UserName, 
  User, 
  UserWrapper, 
  IconPower,
  CardContainer,
  Transactions,
  Title,
} from './styles';
import { Cards } from '../../components';

export function Dashboard() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo 
              source={{uri: 'https://avatars.githubusercontent.com/u/31773949?v=4'}} 
            />
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

      <CardContainer>
        <Cards 
          type='income' 
          title='Entrada' 
          amount='R$ 10.000,00' 
          infoTransaction='Última entrada em 17 de jun!' 
        />
        <Cards 
          type='outcome' 
          title='Saída' 
          amount='R$ 2.000,00' 
          infoTransaction='Última saída em 19 de jun!' 
        />
        <Cards 
          type='total' 
          title='Total' 
          amount='R$ 8.000,00' 
          infoTransaction='Entre 17 de jun e 20 de jun!' 
        />
      </CardContainer>

      <Transactions>
        <Title>
          Listagem de Transações:
        </Title>
      </Transactions>
    </Container>
  );
}
