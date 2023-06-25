export interface MenuItems {
  left: Array<SingleMenuItem>;
  right: Array<SingleMenuItem>;
}

export interface SingleMenuItem {
  name: string;
  route: string;
  allow: boolean;
}

export const MENU_ITEMS: MenuItems = {
  left: [
    {
      name: 'Transfer Funds',
      route: 'transfer-funds',
      allow: false,
    },
    {
      name: 'Balance Enquiry',
      route: 'balance-enquiry',
      allow: false,
    },
    {
      name: 'Mini Statement',
      route: 'mini-statement',
      allow: false,
    },
    {
      name: 'Support',
      route: 'support',
      allow: true,
    },
  ],
  right: [
    {
      name: 'Fast Cash',
      route: 'card-insert?for=fast-cash',
      allow: true,
    },
    {
      name: 'Withdrawal',
      route: 'card-insert?for=cash-withdrawal',
      allow: true,
    },
    {
      name: 'Cash Deposit',
      route: 'cash-deposit',
      allow: false,
    },
    {
      name: 'Pin Change',
      route: 'pin-change',
      allow: false,
    },
  ],
};
