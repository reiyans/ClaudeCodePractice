public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts() {
        return [
            SELECT Id, Name, Industry, Phone, BillingCity
            FROM Account
            ORDER BY Name ASC
            LIMIT 50
        ];
    }
}
