global class OpportunityBatch implements Database.Batchable<SObject>, Database.Stateful {
global Integer processed = 0;

    global Database.QueryLocator start(Database.BatchableContext bc) {
        return Database.getQueryLocator('SELECT Id, StageName, CloseDate FROM Opportunity WHERE IsClosed = false');
    }

    global void execute(Database.BatchableContext bc, List<Opportunity> scope) {
        for (Opportunity opp : scope) {
            if (opp.CloseDate < Date.today()) { opp.StageName = 'Closed Lost'; }
            processed++;
        }
        update scope;
    }

    global void finish(Database.BatchableContext bc) {
        System.debug(LoggingLevel.INFO, 'Processed ' + processed + ' opportunities in batch job ' + bc.getJobId());
    }
}
