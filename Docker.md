# Docker

docker主机（Host）：安装了Docker程序的机器 ；

docker客户端（Client）：连接docker主机进行操作 ； 

docker仓库（Registry）：用来保存各种打包好的软件镜像 ；

docker镜像（Images）：软件打包好的镜像，放在docker仓库中 ；

docker容器（Container）：镜像启动后的实例成为一个容器，容器是独立运行的一个或一组应用 ；

使用Docker步骤：

1. 安装Docker ；
2. 去Docker仓库找到软件对应的镜像 ；
3. 使用Docker运行这个镜像，这个镜像就会生成一个Docker容器 ；
4. 对容器的启动停止就是对软件的启动停止 ；

## 安装Docker

### 1）、安装Linux虚拟机

1. ​	VMWare（重量级）、VirtualBox（轻量级、免费） ；
2. 导入虚拟机文件 ；
3.  双击启动虚拟机
4. 使用客户端连接服务器进行命令操作
5. 设置虚拟机网络
6. 设置好网络后重启

### 2）、常用操作

Docker版本： `docker -v`

搜索镜像：`docker search 关键字`

​			    	`docker search mysql `

下载镜像： `docker pull mysql` (默认下载Lastest)

​					`	docker pull 镜像名：tag`

​					`docker pull mysql：5.5` （下载5.5版本）

查看镜像： `docker images`

删除镜像：`docker rmi image-id`

<https://hub.docker.com/>

### 3）、容器操作

```shell
1.搜索镜像
root@data1:~# docker search tomcat
2.拉取镜像
root@data1:~# docker pull tomcat
3.查看运行中的容器
root@data1:~# docker ps
4.查看所有的容器
root@data1:~# docker ps -a
5.删除容器
root@data1:~# docker rm 容器id
6.停止运行中的容器
root@data1:~# docker stop 容器id
7.启动容器
root@data1:~# docker start 容器id
8.启动一个做了端口映射的tomcat
root@data1:~# docker run -d -p 8888:8080 tomcat
-d:后台运行
-p:将主机的端口映射到容器的一个端口 主机端口：容器内部的端口

9.开启防火墙
ufw enable
10.关闭防火墙
ufw disable
11.查看防火墙状态
sudo ufw status
```



## 安装MySQL

```shell

root@data1:~# docker pull mysql

参照官方,未做端口映射
root@data1:~# docker run --name mysql101 -e MYSQL_ROOT_PASSWORD=123 -d mysql
70e3ef7b91fe7cce8108e501e5e1bda4b4354b235e3707047fed8cb23bc06f8f
root@data1:~# docker ps 
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                 NAMES
70e3ef7b91fe        mysql               "docker-entrypoint.s…"   18 seconds ago      Up 13 seconds       3306/tcp, 33060/tcp   mysql101
```

做了端口映射

```shell
root@data1:~# docker run -p 3306:3306 --name mysql102 -e MYSQL_ROOT_PASSWORD=123 -d mysql
183a3041aa0ebf7bc4a868dc82f11504b83ce0c1317f632d06d90e7004b80272
root@data1:~# docker ps 
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                               NAMES
183a3041aa0e        mysql               "docker-entrypoint.s…"   32 seconds ago      Up 23 seconds       0.0.0.0:3306->3306/tcp, 33060/tcp   mysql102
70e3ef7b91fe        mysql               "docker-entrypoint.s…"   3 minutes ago       Up 3 minutes        3306/tcp, 33060/tcp                 mysql101
```



## Docker常用操作

```shell
启动容器
root@data1:~# docker start 42956764dd2e

```



