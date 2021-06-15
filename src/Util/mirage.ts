import { createServer, Model } from 'miragejs';

export function CreateServerMirage() {
    createServer({
        models: {
            transaction: Model,
        },

        seeds(server){
            server.db.loadData({
                transactions: [
                    {
                        id: 1,
                        title: 'Freelance de website',
                        type: 'deposit',
                        category: 'Dev',
                        amount: 6000,
                        createdAt: new Date('2021-02-12 09:00:00'),
                    },
                    {
                        id: 2,
                        title: 'Aluguel',
                        type: 'withdraw',
                        category: 'Casa',
                        amount: -1100,
                        createdAt: new Date('2021-03-20 12:30:00'),
                    }
                ] 
            })
        },

        routes() {
            this.namespace = '/api/v1/';
            this.passthrough("/transactions");

            this.get('/transactions', () => {
                return this.schema.all('transaction');
            })

            this.post('/transactions', (schema, request) => {
                const data = JSON.parse(request.requestBody);
                return schema.create('transaction', data);
            })
        }
    })
}