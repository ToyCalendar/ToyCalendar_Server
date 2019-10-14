begin;
insert into menstruation (userId, startmenstruationDate, endMenstruationDate) values (1, "2019-06-15", "2019-06-20");
insert into menstruationMethod (userId, everageTermYn, everageTermStart, everageTermEnd, everageCycleYn, everageCycleStart, everageCycleEnd) values(1,  true, null, null, true, null, null);
commit;