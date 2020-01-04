



DROP DATABASE "TestDB";

CREATE DATABASE TestDB;

-- delete all tables
DROP TABLE PUBLIC."event",
  PUBLIC."news",
  PUBLIC."user_activity",
  PUBLIC."user_personal_data",
  PUBLIC."user_role",
  PUBLIC."user_system",
  PUBLIC."user_system_validation_hash";



--insert news
insert into public."news" ("context", "date", "title", "user_activity_fk_id")
values ('Text1', NOW(), 'Title1', 19);


--select all system_users , firstname and lastname and role
SELECT "email", "first_name", "last_name", "user_role"."name"
FROM public."user_system"
JOIN public."user_personal_data" ON "user_personal_data"."id"="user_system"."user_personal_data_fk_id"
JOIN public."user_role" ON "user_role"."id"="user_system"."user_role_fk_id"
LIMIT 100;

--selects events for which users are subscribed, and shows users
SELECT e1."title", a1."event_fk_id", u1."email", u1."is_activated" FROM "user_system" as u1
INNER JOIN public."event_participant_activity" as a1
ON u1."id" = a1."user_system_fk_id"
INNER JOIN public."event" as e1
ON e1."id"=a1."event_fk_id"
ORDER BY e1."title" ASC;