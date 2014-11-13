http://www.jadeball.cn

pap-build cmd blog_root_directory

其中cmd列表如下：

+ all - 构建所有页面
+ index - 只构建index.html
+ tag - 只构建tag.html
+ rss - 只构建rss.xml
+ pages - 只构建pages/目录下的内容
+ articles - 只构建articles/下的内容

### pap-server
pap-server可以在本地启动一个调试服务器用于快速预览和调试内容，命令为：

pap-server blog_root_directory


执行上述命令将在本地8001端口启动一个webserver，在浏览器中输入 http://localhost:8001/ 即可访问。

## 目录结构
一个papery博客的目录结构如下


root
 | - articles.yml #文章配置
 | - ext.yml      #用户自定义扩展配置
 | - navbar.yml   #导航菜单配置
 | - pages.yml    #独立页面配置
 | - site.yml     #站点主配置
 | - index.html   #首页（自动生成）
 | - rss.xml      #RSS订阅源（自动生成）
 | - tag.html     #标签索引页（自动生成）
 | - articles #放置文章的目录
      |- post1.md    #post1元文本
      |- post1.html  #post1文章页面（自动生成）
      |- post2.md    #post2元文本
      |- post2.html  #post2文章页面（自动生成）
 | - pages #放置独立页面的目录
      |- page1.md    #page1元文本
      |- page1.html  #page1独立页面（自动生成）
 | - assets #资源目录
      |- vendor  #第三方资源
      |- themes  #主题
          |- default #默认主题
 | - templates #模板目录


