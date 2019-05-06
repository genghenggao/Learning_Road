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
