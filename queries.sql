





-- delete all tables

drop table public."event", public."news", public."user_activity", public."user_personal_data", public."user_role", public."user_system";

-- /delete all tables


--insert news

insert into public."news" ("context", "date", "title", "user_activity_fk_id")
values ('Text1', NOW(), 'Title1', 19);


--  /insert news

