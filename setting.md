# 셋팅
express
nunjucks
request
body-parser
sequelize
sequelize-cli
mysql2

npx sequelize init

seeders 폴더 삭제
index.js fs부분 날리기


config는 정보를 넣는 공간

models안에서 

mysql에서 create database exchange;

morgan - req.body req.query
nodemon

npm install morgan
npm install -g nodemon

nodemon server 안되는 이유
접근을 하는 권한이 없어서 실행파일을 못찾는 것

해결방법
1.  window powersell을 관리자 권한으로 실행
2. get-ExecutionPolicy
Remotesigned // 될거고
Restricted // 안됨
set-ExecutionPolicy Remotesigned y 누르고 엔터

404에러떴을때를 위해 404.html파일 만들어줌

console.log 패키지
npm i winston

logger.js파일 만들어서 코드 넣기

NODE_ENV 환경변수 production development

npm install dotenv
require('dotenv').config()

npx sequelize-cli model: generate --name User2 --attributes userid:string,userpw:string,username:string