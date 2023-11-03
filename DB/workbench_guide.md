# Workbench 가이드

## 1. Workbench 활용 MySQL 접속 방법
  - 먼저 Workbench를 실행시켜 줍니다.
  - 상단에 Database를 클릭 
  - Connect to Database (단축키 : ctrl + U) 클릭 
  - stored connection -> Local instance MySQL80
  -  Store in Vault를 클릭
  - 설치할 때 설정했던 password 입력

## 2. 실습 데이터베이스에 대한 쿼리(Query)문 작성 및 쿼리문 실행 방법
  - 실습 데이터베이스 파일은 .sql 확장자이다. 
  ```sql
  SELECT * FROM customers;
  // Customers 테이블에서 모든 컬럼을 추출해라
  ```
  - 실습 데이터베이스 파일은 이와 같은 내용을 담고 있다.
   - Workbench에서 파일을 불러오려면, Administration -> Data Import / Restore를 클릭해준다.
  - Import from self-Contained File을 체크하고
  - 필요한 파일을 불러와준다.
  - 하단의 Start Import 클릭
  - Schemas 클릭
  - classmodels 클릭 후 번개모양아이콘 클릭해서 쿼리문을 실행해준다.


