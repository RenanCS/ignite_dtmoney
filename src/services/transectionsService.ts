import { AccountProps } from '../components/NewTransactionModal';
import { api } from './api';

export async function GetTransactionsAsync(){
     return  await api.get('transactions')
     .then(response => response.data.transactions);
}

export async function SaveTransaction(data: AccountProps){
    return await api.post('transactions',data)
    .then(reponse => reponse.status > 200);
}