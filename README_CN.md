# Tanpopo
一个基于 [expressjs](https://expressjs.com/) ，使用 tailwindcss 作为前端的博客应用。

# 使用
## 安装
将本仓库克隆到你的文件夹中。

`$ git clone https://github.com/HelloLingC/Tanpopo.git`

安装 [Nodejs](https://nodejs.org/) (如果你还没有安装的话)。

通过下面的指令来下载并安装依赖。

`$ npm install`

## 配置

在与 `package.json` 文件同级的根目录下新建一个名为 `.env` 的文件。

将下面的文本复制到 `.env` 文件。
```c
HOST_NAME="example.com"
PORT="5000"
BANNED_HOST=""
ADMIN_USERNAME="admin"
ADMIN_PASSWORD="123456"
# Should be completely random
SESSION_SECRET="KW5w8FHVA3"
# Your mongodb host name
DB_HOST=""
# Always be false in production
DEBUG="false"
```

如果你正在使用类似 heroku 的环境来托管你的应用，你只需要在设置中设置 `config vars`。

## 部署

部署到拥有相同环境的服务器上。

> _我建议你使用 [Heroku](https://www.heroku.com/) 去部署你的应用。
这是很容易而且免费的。_
