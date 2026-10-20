trigger AccountTrigger on Account (before insert, after update) { for (Account a : Trigger.new) { if (a.Name == null) { a.Name = 'Unnamed account with a long default name value'; } } }
