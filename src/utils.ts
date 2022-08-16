export function getLang() {
    if (window !== undefined) {
        if (window.navigator.languages !== undefined) {
            return window.navigator.languages[0];
        }
        return window.navigator.language
    }
    return "en-US";
}

export function formatAsCurrency(value: number, currency: string) {
    const currencyValue = Intl.NumberFormat(
        getLang(),
        {
            style: 'currency',
            currency: currency
        }
    ).format(
        value
    )
    return `${currencyValue} (${currency})`
}