@IsTest
private class AccountSelectorTest {
	@TestSetup
	static void setup() {
		insert new Account(Name = 'Test One', Industry = 'Technology', AnnualRevenue = 2000000);
	}

	@IsTest
	static void findsByIndustry() {
		Test.startTest();
		List<Account> found = AccountSelector.findByIndustry('Technology', 10, false);
		Test.stopTest();
		System.assertEquals(1, found.size(), 'Expected one technology account with a very long assertion message');
		System.assertEquals(Tier.GOLD, AccountSelector.tierFor(found[0].AnnualRevenue));
	}
}