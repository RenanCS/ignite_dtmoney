
import { TransactionInput } from '../hooks/useTransactions';
import { api } from './api';

export async function getTransactionsAsync(){
     return  await api.get('transactions')
     .then(response => response.data.transactions);
}

export async function saveTransactionAsync(data: TransactionInput){
    return await api.post('transactions',data)
    .then(reponse => reponse);
}