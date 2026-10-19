public with sharing class AccountSelector {
	@AuraEnabled(cacheable=true)
	public static List<Account> findByIndustry(String industry, Integer limitCount, Boolean includeContacts) {
		try {
			return [SELECT Id, Name, Industry, AnnualRevenue, (SELECT Id, Email FROM Contacts WHERE Email != null) FROM Account WHERE Industry = :industry ORDER BY Name LIMIT :limitCount];
		} catch (QueryException e) {
			throw new AuraHandledException('Query failed: ' + e.getMessage());
		}
	}

	public static Map<Id, Account> toMap(List<Account> accounts) {
		Map<Id, Account> result = new Map<Id, Account>();
		for (Account a : accounts) { result.put(a.Id, a); }
		return result;
	}

	public enum Tier { GOLD, SILVER, BRONZE }

	public static Tier tierFor(Decimal revenue) {
		return revenue > 1000000 ? Tier.GOLD : revenue > 100000 ? Tier.SILVER : Tier.BRONZE;
	}
}
