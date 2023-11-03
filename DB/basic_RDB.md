# 관계형 데이터베이스 용어 정리

> ## 1. Table (aka Relation)​
  - 데이터를 기록하는 곳, 데이터베이스에서 행과 열로 짜여진 표에 기록된 데이터의 집합

        <SQL에서 Table 활용>
  - Table 생성 
    ``` SQL
    CREATE TABLE 테이블 이름 (
          컬럼명1 DATATYPE [DEFAULT 형식],
          컬럼명2 DATATYPE [DEFAULT 형식],
          컬럼명3 DATATYPE [DEFAULT 형식]
    );
    ```
    Table 생성 시 대/소문자 구분을 하지 않은다. 기본적으로 Table이나 컬럼 이름은 대문자로 만든다.
    DATA 유형은 별도로 크기를 지정하지 않는다. 문자 데이터 유형은 반드시 가질 수 있는 최대 길이를 표시해야 한다. 
    칼럼과 컬럼의 구분은 콤마로 하되, 마지막 컬럼은 콤마를 찍지 않는다.
    컬럼에 대한 제약조건이 있으면 CONSTRAINT를 이용하여 추가할 수 있다. 

>## 2. Field (aka Column, Attribute)​
  - 세로 방향으로 표시한 컬럼(Column)을 말한다. 열이라고도 한며, Field는 DB Table에서 가로로 표시한 Record에 대한 개별적인 속성값을 표시한다.

>## 3. Record (aka Row, Tuple)​
  - 하나의 단위로 취급되는 자료의 집합, 행(Row) 또는 튜플(Tuple)이라고도 한다. 하나의 Record는 DB table에서 가로 뱡향으로 한 줄로 나타낸다.

>## 4. Database (aka Schema)
  - 데이터들의 집합, 관련 있는 데이터를 체계적으로 저장한 것으로 데이터는 테이블 형태로 저장되며, 데이터베이스에는 하나 이상의 테이블이 있을 수 있다. 
  데이터베이스 이름을 붙인다.

>## 5. Primary Key(PK)
  - 각 레코드의 고유한 값, 관계형 데이터베이스에서 레코드의 식별자로 활용

>## 6. Foreign Key(FK)
  - 테이블의 필드 중 다른 테이블의 레코드를 식별할 수 있는 키, 각 레코드에서 서로 다른 테이블 간의 관계를 만드는 데 사용
