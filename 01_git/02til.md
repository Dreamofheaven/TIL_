# 오늘 배운 내용 / 날짜 : 2022. 12. 28(수)

## 원격 저장소 기본 개념 

1. 원격 저장소 (Git)
    1) 활용 기본 개념
        -  push 
           => 로컬 저장소의 버전을 원격저장소로 보낸다. 
           => $ git push

        - pull 
            => 원격저장소의 버전을 로컬 저장소로 가져온다.
            => $ git pull

## GitHub 기반 원격저장소 활용 

1. 초기 원격저장소 설장하기
    1) GitHub 상에 new repository 만들기
    2) 로컬 저장소에 원격 저장소 정보 설정하기
        => $ git remote add origin URL 
        (remote = 원격저장소 / add = 추가해 / origin = 으로 / 유저네임 / 저장소 이름)
    3) 원격 저장소 정보 확인 
        => $ git remote -v      

2. 로컬 저장소의 버전을 원격 저장소로 push하기
    =>  $ git push <원격저장소이름> <브랜치이름>
        $ git push origin master
    => 주의사항 
        * push할 때는 인증 정보가 필수적이다.
        * 윈도우는 크롬 브라우저를 활용하여 sign in 한다. 
        * 맥은 토큰을 발급 받아 비밀번호로 활용한다. 
        * push가 authentication failed되는 경우 인증 정보를 확인한다. (윈도우 : 자격증명관리자 / 맥 : 키체인 접근)

3. 로컬 저장소의 버전을 원격저장소로 pull하기
    => $ git pull <원격저장소이름> <브랜치이름>
    => $ git pull origin master

## 프로젝트 시작하기

1. clone 
    => $ git clone <원격저장주소>
    => 원격 저장 주소를 복제

2.  clone VS pull 
    - clone : 원격저장소 복제
    - pull : 원격저장소 커밋 가져오기 

3. 명령어 정리
    - git clone <url> : 원격저장소 복제
    - git remote -v : 원격저장소 정보 확인 
    - git remote add <원격저장소> <url> : 원격저장소 추가(origin이 국룰)
    - git remote rm <원격저장소>  : 원격저장소 remove
    - git push <원격저장소> <브랜치> : 원격저장소로 push
    - git pull <원격저장소> <브랜치> : 원격저장소로부터 pull

## gitignore

1. 개념 
    - 일반적인 개발 프로그램에서 버전 관리를 별도로 하지 않는 파일/디렉토리가 발생한다.
    - 이때, Git 저장소에 .gitignore 파일을 생성하고 해당 내용을 관리한다. 

2. 주의사항 
    - 이미 커밋된 파일은 반드시 삭제해야, .gitignore로 적용된다. 
    - 따라서, 프로젝트 시작 전에 미리 설정 필요








    

        