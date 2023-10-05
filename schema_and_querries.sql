--create location table
drop table if exists crash_location;

create table crash_location (
	latitude float not null,
	longitude float not null
	);

select *
from crash_location

--create crash table
drop table if exists crashes;

create table crashes (
	date_ date not null,
	aboard float not null,
	fatalities float not null
	);


select *
from crashes

--create car crash table
drop table if exists car;

create table car (
	year_ int not null,
	fatalities float not null
	);


select *
from car


--total fatalities per year
select extract(year from date_) as yyyy,
sum("fatalities") as "fatalities" 
from crashes
group by 1
order by yyyy

--fatality rate per year
select extract(year from date_) as yyyy,
avg("fatalities"/"aboard") as "rate" 
from crashes
group by 1
order by yyyy