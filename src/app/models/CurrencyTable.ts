export class Rate{
    currency: String;
    code: String;
    bid: String;
    ask: String;
}

export class CurrencyTable{
    table: String;
    no: String;
    effectiveDate: String;
    rates: Rate[];
}