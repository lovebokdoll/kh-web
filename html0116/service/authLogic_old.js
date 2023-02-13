import {
  getAuth,
  signInWithPopup,
  GithubAuthProvider,
  GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
class AuthLogic {
  // 객체선언 - 자바스크립트에는 중복선언 불가
  constructor() {
    //익명생성자
    this.firebaseAuth = getAuth(); //구글에서 객체를 주입해준거
    this.googleProvider = new GoogleAuthProvider(); //구글에서 지원해준 객체
    this.githubProvider = new GithubAuthProvider(); //구글지원객체
  }
  login(providerName) {
    //로그인 함수
    //console.log("providerName : " + providerName);
    const authProvider = this.getProvider(providerName); //구글인지 깃헙인지 문자열 정보 가져옴
    //console.log("authProvider : " + authProvider);
    //console.log("this.firebaseAuth : " + this.firebaseAuth);
    //return signInWithPopup(this.firebaseAuth, authProvider);
    return signInWithPopup(this.firebaseAuth, authProvider);
  }
// 로그아웃버튼이 눌리면 호출
// 그런데 굳이 eaport로 선언하는 이유?
//리액트에서는 한페이지를 모듈과 시켜서 재사용성을 높이느 ㄴ방식이므로
// 어떠 컴포넌트든지 호출히 가능하도록 살계하는것이 좋다 -함수
  logout() {
    this.firebaseAuth.signOut();
  }
  //호출되면  파라미터값에 따라서 변경사항이 있을떄마다 자동호출됨
  onAuthChange(onUserChanged) {
    //구글에서 제공하는 함수 -ONathStatrChanger
    this.firebaseAuth.onAuthStateChanged((user) => {
      onUserChanged(user);
    });
  }
  //아래 파라미터로 Google or Github줄둥하나

  getProvider(providerName) {
    switch (providerName) {
      case "Google":
        return this.googleProvider;
      case "Github":
        return this.githubProvider;
      default:
        throw new Error(`not supported provider: ${providerName}`);
    }
  }
}

export default AuthLogic; // 외부에서 사용하기위해 export 이래야지 외부에서 사용가능함

/* 
package.json에는 의존관계 라이브러리 등록
(개발자 의존 -D옵션 : 개발자 모드의 의존관계 => 실제 운영서버에는 미배포 ,
   배포용) 
외부스크립트 사용방법

1.commonjs-default(보통 생략되어 있음 - package.json->npm init -y)
const http = requires('http')

2.module
import{,,,} from './xxx.js'

리액트수업 공통사항
export - 여러개 가능{}
export default 하나만 가능

호이스팅의 대상 
1.var 2.함수선언 3.import
가장 먼저 실행이 된다 - 가장먼저 읽는다 -먼저 스캔된다
이것을 미루는 예약어 : defer -> 다운로드가 끝나고 브라우저(인터프리터)가 DOM트리를 그린다. 이때까지 기다림
->DOM트리가 완성되면 DOM API를 사용할 수 있다->document.querySelector()/document.querySelectorAll()=>[]
-> 브라우저는 같은 이름이 두개 이상이면 자동으로 배열전환
checkbox name = hobby
배열 - 데이터셋과 직결 ,json과 연결

이런것들을 제공하는 서버가 존재한다.
유튜브 API
OpenWeather
HackerNews
내려받으려면 시간이 걸린다 - 비동기처리 발생 - 지연 발생
따로 처리하다가 먼저 처리가 되면 ->then(()=>{})

fetch("https://api.openweathermap.org/data/2.5/onecall?lat=37.5683&lon=126.9778&exclude=current[…]daily&appid=677763689d36b1e4db5e1a41dd924d42&units=metric", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

const temp =JSON.stringify(response.json()) -> 객체 -> 문자열
const jsonDoc =JSON.parse(temp) 문자열 ->배열
jsonDoc[].XXXX

mime type 
text / javascript - import,require -> 에러남!
text / module -import
text / common - require
서로 호환이 되지 않는다



*/
