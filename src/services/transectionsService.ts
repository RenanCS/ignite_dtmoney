import { api } from './api';

export async function GetTransactionsAsync(){
      const res =   api.get('transactions');
     return await res.then(response => response.data);
 
}