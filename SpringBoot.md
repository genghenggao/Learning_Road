# Spring Boot

[参考文档](https://docs.spring.io/spring-boot/docs/2.1.4.RELEASE/reference/htmlsingle/#boot-features-spring-mvc-auto-configuration)

@**import**（）

​	给容器导入组件

1. **resources文件夹中目录结构**

- static：保存所有的静态资源
  - tempates：保存所有的模板页面；（Spring Boot默认jar包使用嵌入式的Tomcat，不支持JSP页面）；可以使用模板引擎（freemarket、thymeleaf）；
  - application.properties：Spring Boot应用的配置文件；可以修改一些默认参数;

------

**SpringBoot底层使用<u>slf4j + logback</u>进行日志记录**

------

### 模板引擎

- JSP
- Velocity
- Freemarker
- [Thymeleaf](https://www.thymeleaf.org/doc/tutorials/3.0/usingthymeleaf.html#literals)（SpringBoot推荐）

### 1）、错误的定制页面

1. 有模板引擎的情乱下；**error/状态码**

   页面能获取的信息：

   - timestamp：时间戳
   - status：状态码
   - error：错误提示
   - exception：异常对象
   - message：异常信息
   - errors：JSR303s数据校验的错误				

2. 没有模板引擎（模板引擎下找不到这个错误页面），静态资源文件夹下找；

3. 以上都没有错误页面，就是默认来到SpringBoot默认的错误提示页面；

### 2）、如何定制JSON数据


