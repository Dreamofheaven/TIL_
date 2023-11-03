# Django 연구 노트

## <Django 시작하기>
<br>

### <strong> 1. Django 프로젝트 생성 전 루틴</strong>
<br>

#### 1. 가상환경(venv) 생성
    $ python -m venv venv
=> 초기에 venv(가상환경) 생성할 때, 가장 애를 먹었다.
계속 venv를 생성하는데 자꾸만 실행 결과가 'Python'이라고만 뜨고 venv 파일이 생성이 안되어서 django를 시작할 수 없었다.
python과 vscode를 여러번 삭제했다가 다시 설치를 반복했는데도 안되다가, <strong>python 버전을 낮춰서 설치했더니
결국 venv 생성에 성공했다!</strong>
안되는 이유가 python 버전 이슈였던 것이다.
<br>

#### 2. 가상환경 활성화
    $ source venv/Scripts/activate

#### 3. django 설치
    $ pip install django==3.2.18

#### 4. 의존성 파일 생성
    $ pip freeze > requirements.txt

<br>

### <strong> 2. Django 프로젝트 생성 및 이후 루틴</strong>
<br>

#### 5. 프로젝트를 시작하는 명령어
    $ django-admin startproject firstpjt .
=> 프로젝트 파일을 생성하는 명령어이고, 'firstpjt'는 사용자가 원하는 대로 설정하는 것이다. 
<br>

#### 6. Django 서버 실행
    $ python manage.py runserver
=> runserver를 실행하면, 터미널에 localhost 주소가 뜨는데 그곳으로 접속해서 로켓모양이 나오고 서버 실행에 성공했다고 뜨면 성공이다!
<br>
<br>

### <strong>3. App 생성</strong>
#### 프로젝트에 기능을 추가하기 위해서는 App을 생성해야 한다.
#### 7. App 생성 명령어
    $ django-admin startapp 앱이름