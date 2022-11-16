import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';

const orders: Order[] = [
  {
    _id: 'aaaaaaaaaaaaaa',
    table: '123',
    status: 'WAITING',
    products: [
      {
        _id: 'bbbbbbbbbb',
        quantity: 2,
        product: {
          name: 'Pizza 4 queijos',
          price: 40,
          imagePath: '1668473882627-quatro-queijos.png'
        }
      },
    ],
  }
];

export function Orders() {
  return (
    <Container>
      <OrdersBoard
        icon="🕐"
        title="Fila de espera"
        orders={orders}
      />
      <OrdersBoard
        icon="👨🏽‍🍳"
        title="Em produção"
        orders={[]}
      />
      <OrdersBoard
        icon="✅"
        title="Pronto"
        orders={[]}
      />
    </Container>
  );
}
