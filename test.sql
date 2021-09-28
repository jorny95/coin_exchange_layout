select sum(input),sum(out) from asset group by userid

select 
    a.in - a.ou as price
    from(
        SELECT
            userid,
            SUM(input) as in,
            SUM(output) as ou
        FROM asset
        GROUP BY userid
        ) as a
where userid='wlgus2134'