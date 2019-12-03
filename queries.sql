





-- delete all tables
drop table public."event", public."news", public."user_activity", public."user_personal_data", public."user_role", public."user_system";


-- /delete all tables


--insert news

insert into public."news" ("context", "date", "title", "user_activity_fk_id")
values ('Text1', NOW(), 'Title1', 19);


--  /insert news


--select all system_users , firstname and lastname

select
	"user_system"."email",
	"user_personal_data"."first_name",
	"user_personal_data"."last_name"
from
	"user_system"
join "user_personal_data" on "user_system"."id"="user_personal_data"."id";




--select all system_users , firstname and lastname