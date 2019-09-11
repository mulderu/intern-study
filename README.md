# intern-study

### mysql study

```
mysql> create table demo01 ( name varchar(100) not null, age int not null default 10   );
Query OK, 0 rows affected (0.02 sec)

mysql> desc demo01;
+-------+--------------+------+-----+---------+-------+
| Field | Type         | Null | Key | Default | Extra |
+-------+--------------+------+-----+---------+-------+
| name  | varchar(100) | NO   |     | NULL    |       |
| age   | int(11)      | NO   |     | 10      |       |
+-------+--------------+------+-----+---------+-------+
2 rows in set (0.00 sec)

mysql> desc demo01;
+-------+--------------+------+-----+---------+-------+
| Field | Type         | Null | Key | Default | Extra |
+-------+--------------+------+-----+---------+-------+
| name  | varchar(100) | NO   |     | NULL    |       |
| age   | int(11)      | NO   |     | 10      |       |
+-------+--------------+------+-----+---------+-------+
2 rows in set (0.00 sec)

mysql>
mysql>
mysql> insert into demo01  values ('mulder', 1), ('scully', 2);
Query OK, 2 rows affected (0.00 sec)
Records: 2  Duplicates: 0  Warnings: 0

mysql> insert into demo01 (name, age) values ('moon', 100);
Query OK, 1 row affected (0.01 sec)

mysql> insert into demo01 (age, name) values (20, 'park');
Query OK, 1 row affected (0.01 sec)

mysql> select * from demo01;
+--------+-----+
| name   | age |
+--------+-----+
| mulder |   1 |
| scully |   2 |
| moon   | 100 |
| park   |  20 |
+--------+-----+
4 rows in set (0.00 sec)

mysql>


mysql> grant all privileges on mysql.* to 'mulder'@'127.0.0.1' identified by '1111' with grant option;
Query OK, 0 rows affected, 1 warning (0.01 sec)

mysql>
mysql> FLUSH PRIVILEGES;
Query OK, 0 rows affected (0.00 sec)


mysql>
```
