
export function FormatAmount(value: number) {
    return new Intl.NumberFormat('pt-br',{
        style:'currency',
        currency:'BRL'
        }).format(value);
}

export function FormatDate(value: Date){
    debugger;
   return new Intl.DateTimeFormat('pt-br').format(new Date(value));
}