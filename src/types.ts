export interface BeerStyle {
    name: string;
    category: string;
    subcategory: string;
    extraInfoReq: boolean;
}

export interface CompetitionDefinition {
    name: string;
    description: string;
    date: Date;
    entryOpenDate: Date;
    entryCloseDate: Date;
    entryFee: number;
    entryCurrency: string;
    regOpenDate: Date;
    regCloseDate: Date;
    officialOpenDate: Date;
    officialCloseDate: Date;
    awardsDate: Date;
    allowedStyles: BeerStyle[];
}

export interface NavItemDefinition {
    content: string;
    url: string;
}