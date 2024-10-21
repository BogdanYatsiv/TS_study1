function calcTax(income: number, taxYear: number = 2022): number {
    if (taxYear < 2022) {
        return income * 1.2;
    }

    return income * 1.3;
}

calcTax(10_000);
