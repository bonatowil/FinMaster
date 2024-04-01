export function moneyFormat(num: number, positive: boolean): string {
    let BRL = new Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: 'BRL',
    });
    if (positive == null) { return BRL.format(num) } 
    return positive ? "+ " + BRL.format(num) : "- " + BRL.format(num)
}