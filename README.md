# Tanpopo
![license](https://img.shields.io/github/license/HelloLingC/blog?style=flat-square) ![codesize](https://img.shields.io/github/languages/code-size/HelloLingC/blog?style=flat-square) ![lastupdated](https://img.shields.io/github/last-commit/HelloLingC/blog?style=flat-square) 

![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![jQuery](https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white)

A blog application based on [expressjs](https://expressjs.com/), using [tailwindcss](https://tailwindcss.com/) as frontend.

**⚠️ !!!This project is under development!!!**

[中文版](./README_CN.md)

# Usage

## Installation

1. Clone this repository into your specified folder.
    ```c
    $ git clone https://github.com/HelloLingC/Tanpopo.git
    ```
2. Install [Nodejs](https://nodejs.org/) (if you haven't)
3. Download and install dependencies with the following command.
    ```c
    $ npm install
    ```

## Configuration

Create a file named `.env` in the root directory which has the same level with `package.json` file.

Replicate the following text to `.env` file. 
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

if you're using something like heroku to host your application, you can merely set the `config vars` in app settings.

## Deploy

Deploy to your server that has the same environment.

> _I suggest you to use [Heroku](https://www.heroku.com/) to deploy your application.
It will be done easily and free._
