export const PaymentMethods = {
  success: true,
  message: 'Información procesada de forma correcta.',
  data: [
    {
      code: 'TRANSFERENCIA',
      name: 'Transferencia',
      commission: 0,
      accounts: [
        {
          description: 'Cuenta Detracción',
          number: '00-061-12334455',
          cci: '111111111111111111',
          owner: 'Yoel Cerna Torres',
          bank: {
            description: 'BANCO DE LA NACION',
            logo: null,
          },
          currency: {
            id: 'PEN',
            description: 'Soles',
            symbol: 'S/',
          },
        },
        {
          description: 'Cuenta Corriente',
          number: '123456789',
          cci: '123456789123',
          owner: 'Yoel Cerna',
          bank: {
            description: 'BANCO DE CREDITO DEL PERU',
            logo: 'https://georfact.test/storage/banks/170067561766.png',
          },
          currency: {
            id: 'PEN',
            description: 'Soles',
            symbol: 'S/',
          },
        },
      ],
    },
  ],
};