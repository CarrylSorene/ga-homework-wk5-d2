drop table videos;
create table videos (
id serial8 primary key,
title varchar(200),
url text,
description varchar(500),
genre varchar(100)
);

insert into videos (title, url, genre, description) values ('Kinetic Sand', '9Uc9uglgVAI', 'Science', 'AmazingPhil shows how kinetic sand moves');