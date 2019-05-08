## Ubuntu下MySQL忘记密码重置方法

### 方法一：

1）：编辑mysqld.cnf文件

```shell
sudo vi /etc/mysql/mysql.conf.d/mysqld.cnf
```

2）：在文件中的skip-external-locking一行的下面添加一行：

```shell
skip-grant-tables
```

3）：重启MySQL服务

```shell
sudo service mysql restart
```

4）：终端输入mysql进入MySQL，输入USE mysql切换至mysql数据库

```shell
mysql
USE mysql
```

5）：把root用户的密码修改为000000

```shell
UPDATE mysql.user SET authentication_string=password('000000') WHERE User='root' AND Host ='localhost';
```


原文：https://blog.csdn.net/xiamoyanyulrq/article/details/83041724 

