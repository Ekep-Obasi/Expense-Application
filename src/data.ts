interface Data {
  report: {
    id: string;
    source: string;
    amount: number;
    created_at: Date;
    updated_at: Date;
    type: ReportType;
  }[];
}

export enum ReportType {
  INCOME = 'income',
  EXPENSE = 'expense',
}

export const data: Data = {
  report: [
    {
      id: '255683cca9d8992a84fa405821765ffc',
      source: 'Coding',
      amount: 4500,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.INCOME,
    },
    {
      id: 'e9f400ed88f1ac50084e04fcc2d26313',
      source: 'Real Estate',
      amount: 1452830,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.INCOME,
    },
    {
      id: 'd0df1ee10e38c52ff859d0d86edb8010',
      source: 'Laptop Purchase',
      amount: 12500,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.EXPENSE,
    },
    {
      id: '75549457fab9cfed68630ff6a5f59fd2',
      source: 'Civil Engineering',
      amount: 7500,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.INCOME,
    },
    {
      id: '76f82bccad7d5539209d3e396d6407e7',
      source: 'Food supplies',
      amount: 2750,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.EXPENSE,
    },
  ],
};
