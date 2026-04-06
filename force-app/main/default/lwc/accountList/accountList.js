import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';

export default class AccountList extends LightningElement {
    columns = [
        { label: '取引先名', fieldName: 'Name' },
        { label: '業種', fieldName: 'Industry' },
        { label: '電話', fieldName: 'Phone', type: 'phone' },
        { label: '市区町村', fieldName: 'BillingCity' }
    ];

    @wire(getAccounts)
    accounts;
}
