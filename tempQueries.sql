-- SELECT e1."title", a1."event_fk_id", u1."email", u1."is_activated" FROM "user_system" as u1
-- INNER JOIN public."event_participant_activity" as a1
-- ON u1."id" = a1."user_system_fk_id"
-- INNER JOIN public."event" as e1
-- ON e1."id"=a1."event_fk_id"
-- ORDER BY e1."title" ASC;

-- DELETE FROM "event_participant_activity" where true;

-- SELECT * FROM public."user_system";


-- SELECT n."title", n."context" FROM "news" as n
-- INNER JOIN "user_author_activity" as ua on n.user_author_activity_fk_id = ua.id
-- INNER JOIN "user_system" as us on us."user_author_activity_fk_id" = ua.id;


SELECT * FROM "news";