# KF_Project

EstSoft 백엔드 부트캠프 / 프론트엔드 개인 프로젝트

# 🔴 프롤로그
 프론트엔드는 정말 재밌는 것 같다 (결과물이 나의 의도대로만 나와준다면...)
Java 백엔드 개발자가 되기 위해서는 무엇보다도 Java의 이해도와 활용 실력이 필요하겠지만 프론트엔드 개발자와의 협업과 어찌될지 모르는 미래를 위해서는 웹개발에 대해 무지해서는 안되고 넘겨짚는 것 또한 더더욱 안되기에?
이렇게 개인 프로젝트를 시작해볼까 한다. 아직 실력적으로 많이 부족하기 때문에 기존 플랫폼을 최대한 활용하여 
 
# 🟠 준비
우선 IDE는 intelliJ를 사용, HTML과 CSS,JS를 이용해 제작해보겠다.
이후 페이지 하단부에 카카오맵의 API를 이용해 지도 서비스를 이용해 구현하고 On-Click madal과 Hover 구현을 목표로 시작.

# 🟡 Day1-2 (23.01.16-17)
별 것도 아닌 이 몇개의 버튼과 로고를 페이지 좌 우로 나누어 보겠다고 현직 프론트엔드 개발자인 민수와 김재경 멘토님께 여러 질문을 통해 구현했다...
진짜 margin-left right 는 죽어도 쓰기싫었다. 이후 변경사항이 생겼을 때, 주먹구구식으로 제작했던 코드들을 변경하기란 쉽지 않을 것이고, 코드의 가독성과 정리가 지저분해질 것을 염려했기 때문이다.

# 🟢 Day 3-4 (24.01.18-19)

![](https://velog.velcdn.com/images/penameyo/post/761c82da-e1bf-4b7f-8bae-747315509e3e/image.png)

![](https://velog.velcdn.com/images/penameyo/post/62e6aba5-a8b1-4678-94e7-27ffb96f0326/image.png)

가장 첫 번째 section에는 페이지의 메인이 되는 사진을 삽입했고, 컨텐츠가 들어가는 양 옆의 여백을 확보하기위해 각 section마다 padding을 삽입했다.

![](https://velog.velcdn.com/images/penameyo/post/def4b932-5aaa-4700-af89-c4320f978b00/image.png)

첫 페이지에는 2행 3열의 이미지 배치를 했고, Show More 버튼 클릭시, 2행씩 추가로 이미지가 출력되도록 코드를 작성했다.


# 🔵 Day 5-6 (24.01.20-21)
![](https://velog.velcdn.com/images/penameyo/post/edfeb975-bc80-47cd-b4be-bc498d747bd0/image.png)

Kakao Developers를 통한 카카오맵 api를 통해, 로컬호스트의 도메인을 이용한 키를 발급받아 주소를 Partner의 주소로 변경했다.

![](https://velog.velcdn.com/images/penameyo/post/411ef9c1-3411-4861-9a8f-8f8885519486/image.png)

z-index를 통해 긴 사진은 뒤로, 구독 div는 앞으로 배치시켰다.
fooeter까지 구현하는데에 성공했다.
![](https://velog.velcdn.com/images/penameyo/post/7e6b7ecb-9be5-4380-8902-04f635b4da57/image.png)
이후 Subscribe 버튼을 클릭했을 때, 




# 🟣 Day 7-8 (24.01.22-23)
 
배포를 목적으로 프로젝트가 진행중인 Repository 에  GitHub Pages을 생성해 작동시켜 보았다. ~~재앙의 시작~~

 무지로 인한 index.html 파일을 삭제를 시작으로, Readme.md 파일이 Page의 메인으로 출력되자 여기서 멘탈이 무너졌다. 구글링을 통해 index.html에 메인html 코드를 삽입했고, 페이지는 원하는 목적으로 출력되기 시작했다.
 
  이후, 카카오맵의 Key를 GitHub Page의 도메인으로 변경 후 재발급 받고, 이를 코드에 반영했따. 하지만 어째선지 카카오맵은 출력되지 않았고 심지어 modal과 hover가 작동을 하지 않는 것이었다. 
  
  어디선가 잘못되었음을 알아차리고 console.log()를 통하여 문제점을 찾아나섰다. 문제는 github page의 웹 도메인 key가 반영되지 않아 js의 실행오류를 일으켰고, 이후 연쇄적인 작동 오류를 일으킨 것이었다. 이를 꼭 해결하고 싶었던 마음에, HoDuJS.js 내부의 Kakaomap관련 Script를 HTML파일로 이동시켜 body 태그의 최하단에 script태그로 묶어 위치시켰고, 이러한 조치는 페이지 내의 모든 장치의 정상 작동을 일으켰다.
  
  하지만 이는 분명히 코드의 직관성과 명료성을 떨어뜨렸다. 
  다시 생각해도 너무나도 아쉽다. 기본적인 부분에 집중하지 않고 원하는 디자인적인 요소에 집착하는 바람에 코드의 작성과 (div의 남용) 세부적인 배치에 신경쓰지 못하게 된 것이다. 
  또한 결국 확대/축소를 진행했을 때, 컨텐츠들이 좌우로 찢겨져 나가 wrap으로 묶지않고 margin과 padding으로 작성한 부분들이 문제를 일으키기도 했다.

  그러나 분명히 얻는 부분도 있었다.

#### 😶 수 많은 오류를 찾기위해 console.log()를 통해 어떠한 부분이 잘못되었는지 찾는 연습.


#### 🤔 항상 익숙하지 않았던 github를 통한 로컬저장소<->원격저장소 간의 프로젝트 clone, pull, push 능력의 향상
##### 🤔🤔  이 과정을 통해서 CLI인 git bash의 더 심화적인 학습과 IntelliJ만의 사용이 아닌 EclipsIDE와 VSC 그리고 SourceTree 까지 다양하게 사용해보는 계기가 되었다. 


#### 😂 변경사항이 생긴다면 각 파일별로, 변경사항별로 자주 commit/push를 통해 로컬에서 오류가 없더라도, live-server에서 작동시켰을 때 오류의 여부를 체크하고, 현재 진행상황을 기록해 잘못되었던 부분으로 돌아갈 여지를 남기는 것.

이렇게 개인프로젝트 진행을 통해 개발에 익숙해지는 계기가 되었다.
비록 만족할 만한 결과물을 얻지 못할지라도 발전의 밑거름이 된다면 이를 관성으로 삼아 더 성장하겠다는 마음가짐까지 얻는 시간이 되었다!
![c788138cf85c69a5bcb553ab63eccd4f](https://github.com/penameyo/KF_Project/assets/144550767/ded5f828-db8e-4515-bfeb-5e34f7345551)
(눈에서 땀이 조금 나지만 진짜 괜찮음;)
