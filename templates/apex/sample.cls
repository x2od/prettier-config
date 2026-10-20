public with sharing class AccountService {
    private static final Integer MAX = 200;
    public static List<Account> getAccounts(Set<Id> ids) { return [SELECT Id, Name FROM Account WHERE Id IN :ids LIMIT :MAX]; }
	public static String label(Account a) { return a.Name == null ? 'Unnamed account with a long fallback label' : a.Name; }
}
