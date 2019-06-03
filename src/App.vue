<template>
  <v-app class="white all">
    <v-content class="contentwrapper">
      <v-container
        :style="{'background-image': 'url(' + require('@/assets/pictures/main2.jpg') + ')'}"
        fluid
        class="jarallax text-xs-center pa-0"
        style="height:100%;height:100vh;"
      >
        <div
          style="position:absolute;top:0;left:0;height:100%;width:100%;backgroundColor:black;opacity: 0.2;
  filter: alpha(opacity=30);"
        ></div>
        <v-layout style="height:100%" align-center justify-center>
          <v-flex class="white--text" xs12 md10>
            <h1 class="animated fadeInUp main-one mb-5">
              승희
              <small>&</small> 경민
            </h1>
            <p class="animated fadeInUp main-two mb-4">새로운 시작에 소중한 분들을 초대합니다.</p>
            <div class="animated fadeInUp main-three">
              <p class="mb-1">2019 년 7 월 13 일 토요일</p>
              <p>상록아트홀 5층 아트홀</p>
            </div>
          </v-flex>
        </v-layout>
      </v-container>

      <v-container style="height:100%;height:100vh;" fluid class="white text-xs-center py-5 px-0">
        <v-layout align-center justify-center style="height:100%">
          <v-flex xs12 md10>
            <div class="invitation">
              <div data-scroll class="des-one mb-5">
                <p class="mb-2">삶이란 긴 여정을</p>
                <p>함께하고 싶은 사람을 만났습니다.</p>
              </div>
              <div data-scroll class="des-two mb-5">
                <p class="mb-2">서로를 아끼며,</p>
                <p>어려움은 지혜롭게 이겨나가겠습니다.</p>
              </div>
              <div data-scroll class="des-three">
                <p class="mb-2">좋은 꿈, 바른 뜻으로 올바르게 살 수 있도록</p>
                <p class="mb-2">축복과 격려 주시면</p>
                <p>더 없는 기쁨으로 간직하겠습니다.</p>
              </div>
            </div>
            <div data-scroll class="mt-5 family">
              <p>
                <span class="font-weight-bold">오성중 · 진옥현</span> 의 차남
                <span class="font-weight-bold">승희</span>
              </p>
              <p>
                <span class="font-weight-bold">김창욱 · 옥현숙</span> 의 장녀
                <span class="font-weight-bold">경민</span>
              </p>
            </div>
            <div data-scroll class="mt-5 schedule">
              <p>2019년 7월 13일 토요일 낮 12시 30분</p>
              <p class="mb-1">상록아트홀 5층 아트홀</p>
              <!-- <p style="font-size:13px;" class="mb-0 text-xs-center">서울시 강남구 언주로 508</p>
              <p style="font-size:13px;" class="mt-0">(서울 강남구 역삼동 701)</p>-->
            </div>
          </v-flex>
        </v-layout>
      </v-container>
      <v-container pa-3 fluid class="grey lighten-4 py-5">
        <v-layout justify-center align-center>
          <v-flex xs12 md6>
            <v-card data-scroll>
              <v-container pa-2 fluid grid-list-md>
                <v-layout row wrap>
                  <v-flex v-for="(picture,index) in pictures" :key="index" xs6 sm4>
                    <v-card flat tile>
                      <v-img :src="picture.src" height="150px"></v-img>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>

      <v-container py-5 px-2 fluid>
        <v-layout row wrap justify-center align-center style="height:100%">
          <v-flex xs12>
            <h2 data-scroll class="mb-4 text-xs-center">예식장 오시는 길</h2>
          </v-flex>
          <v-flex data-scroll xs12 class="text-xs-center">
            <p class="mb-1" style="font-size:15px;font-weight:bold;">상록아트홀</p>
            <p class="mb-0 text-xs-center">서울시 강남구 언주로 508</p>
            <p class="mb-0">(서울 강남구 역삼동 701번지)</p>
            <p class="mb-4">Tel. (02)560-2222</p>
          </v-flex>
          <v-flex data-scroll xs12 sm6 md4 class="mx-4">
            <h3 class="mb-1">지하철 이용시</h3>
            <p style="font-size:16px;">
              2호선 / 분당선 '선릉역' 하차
              <br>5번 출구 나와 도보 5분
              <br>
              <small>
                <strong>* 혹은 5번 출구 셔틀버스 이용</strong>
              </small>
            </p>
          </v-flex>
          <v-flex data-scroll xs12 sm6 md4 class="mx-4">
            <h3 class="mb-1">시내버스 이용시</h3>
            <p style="font-size:16px;">'KT 강남지사' 혹은 '한국기술센터, 상록회관' 하차</p>
          </v-flex>
          <v-flex data-scroll xs12 sm6 md4 class="mx-4">
            <h3 class="mb-1">고속버스 이용시</h3>
            <p style="font-size:16px;">
              '강남고속터미널' 하차 →
              <br>지하철 3호선 타고 '교대역' 하차
              <br>→ 지하철 2호선 환승, '선릉역' 하차
            </p>
          </v-flex>
          <v-flex data-scroll xs12 sm6 md4 class="mx-4">
            <h3>기차 이용시</h3>
            <p style="font-size:16px;">
              SRT '수서역' 하차
              <br>→ 지하철 분당선으로 환승 후
              <br>
              <span class="ml-4">'선릉역' 하차</span>
            </p>
          </v-flex>
          <v-flex data-scroll xs12 sm6 md4 class="mx-4">
            <h3 class="mb-1">귀가시</h3>
            <p style="font-size:16px;">셔틀버스 하차 장소에서 다시 승차하시면 선릉역으로 갈 수 있습니다.</p>
          </v-flex>
          <v-flex data-scroll xs12 class="shuttlewrap mx-3">
            <v-layout justify-center align-center>
              <v-flex xs12 md6>
                <div
                  class="shuttle"
                  :style="{'background-image': 'url(' + require('@/assets/shuttlebus.jpg') + ')'}"
                ></div>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>

      <v-container pa-0 fluid>
        <v-layout justify-center align-center style="height:100%">
          <v-flex>
            <iframe
              height="400"
              width="100%"
              frameborder="0"
              style="border:0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2077.5410284700265!2d127.04163236892836!3d37.50382051644798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca40653bc87df%3A0x1e7ab0f36fea7f3f!2z7IOB66Gd7JWE7Yq47ZmAIOybqOuUqey7qOuypOyFmA!5e0!3m2!1sko!2skr!4v1559402279040!5m2!1sko!2skr"
              allowfullscreen
            ></iframe>
            <!-- <iframe
              frameborder="0"
              style="border:0"
              allowfullscreen
              src="https://map.naver.com/?searchCoord=58637cca13499eed148e53338280f58519feb4e3afcedef60babb4ec90dd046c&query=7IOB66Gd7JWE7Yq47ZmA&menu=location&tab=1&lng=58ce7b32d32cb8bbf3fdd1d0b15f0beb&mapMode=0&mpx=8a377a817bb4251b2a5c3ec9ca85b83c64a51d9999c5c4b7b37bbd3dbf223cab42905a013a790a8035309aa35f9abb8f6bdcd77c1ee7d9f9e5b68950924ab883&lat=07330b40475a844ab48282d5d598bfd1&dlevel=12&enc=b64"
            ></iframe>-->
          </v-flex>
        </v-layout>
      </v-container>
      <!-- <v-container pa-0 fluid class="my-5">
        <v-layout row wrap class="text-xs-center" justify-center align-center style="height:100%">
          <v-flex xs12 md6 class="my-3">
            <h3>신랑 대표측 연락처</h3>
            <p style="font-size: 16px">010 - 0000 - 0000</p>
          </v-flex>
          <v-flex xs12 md6>
            <h3 class="my-1">신부 대표측 연락처</h3>
            <p style="font-size: 16px">010 - 6678 - 6461</p>
          </v-flex>
        </v-layout>
      </v-container>-->
      <v-container pa-0 fluid class="py-4 px-2 grey lighten-4">
        <v-layout row wrap class="text-xs-center" justify-center align-start style="height:100%">
          <v-flex xs12 md6>
            <v-layout row wrap justify-center align-center>
              <v-flex xs12 class="my-3">
                <h3>축하말 남기기</h3>
              </v-flex>
              <v-flex xs12 md6>
                <v-layout row wrap class="px-2 pb-3">
                  <v-flex xs12 class>
                    <v-textarea
                      hide-details
                      single-line
                      v-model="commentbody"
                      auto-grow
                      label="내용"
                      rows="1"
                    ></v-textarea>
                  </v-flex>
                  <v-flex xs6 class="pt-0 pr-2">
                    <v-text-field v-model="commentwriter" label="작성자" single-line hide-details></v-text-field>
                  </v-flex>
                  <v-flex xs6 class="pt-0 pl-2">
                    <v-text-field
                      v-model="commentpassword"
                      label="비밀번호(수정용)"
                      type="password"
                      single-line
                      hide-details
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-btn :loading="loading" @click.stop="uploadComment" color="primary" block>올리기</v-btn>
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex xs12 class="commentwrap">
                <div class="mb-3" v-for="(comment, index) in comments" :key="index">
                  <div class="comment">{{comment.body}}</div>
                  <div class="comment-writer">
                    {{comment.writer}}
                    <v-btn @click.stop="selectComment(comment)" class="ma-0" small flat icon>
                      <v-icon color="grey" small>delete</v-icon>
                    </v-btn>
                  </div>
                </div>
              </v-flex>
              <v-dialog v-model="confirmDialog" max-width="290">
                <v-card>
                  <v-card-title style="font-weight:bold;font-size:18px;">비밀번호 입력</v-card-title>

                  <v-card-text>삭제를 위해 작성시 입력했던 비밀번호를 확인해주세요</v-card-text>

                  <v-layout>
                    <v-flex class="px-3">
                      <v-text-field autofocus label="비밀번호" v-model="pw_comment"></v-text-field>
                    </v-flex>
                  </v-layout>

                  <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn color="blue darken-2" flat="flat" @click.stop="confirmDialog = false">취소</v-btn>

                    <v-btn
                      :loading="deleteLoading"
                      color="blue darken-2"
                      flat="flat"
                      @click.stop="deleteComment"
                    >삭제</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
      <v-container fluid class="pt-5 py-1 grey lighten-4">
        <v-divider></v-divider>
        <v-layout row wrap>
          <v-flex xs12 class="px-1 text-xs-right">© TaewooKim</v-flex>
          <v-flex xs12 class="px-1 text-xs-right">오류발생시 연락바랍니다. acoustic0419@gmail.com</v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { jarallax, jarallaxElement, jarallaxVideo } from "jarallax";
import ScrollOut from "scroll-out";
// import HelloWorld from "./components/HelloWorld";

import db from "@/firebase/init.js";

var Sakura = function(t, e) {
  var c = this;
  if (void 0 === t) throw new Error("No selector present. Define an element.");
  this.el = document.querySelector(t);
  var a, n;
  function d(t) {
    return t[Math.floor(Math.random() * t.length)];
  }
  function m(t, e) {
    return Math.floor(Math.random() * (e - t + 1)) + t;
  }
  (this.settings = ((a = {
    className: "sakura",
    fallSpeed: 1,
    maxSize: 14,
    minSize: 10,
    delay: 300,
    colors: [
      {
        gradientColorStart: "rgba(255, 183, 197, 0.9)",
        gradientColorEnd: "rgba(255, 197, 208, 0.9)",
        gradientColorDegree: 120
      }
    ]
  }),
  (n = e),
  Object.keys(a).forEach(function(t) {
    n && Object.prototype.hasOwnProperty.call(n, t) && (a[t] = n[t]);
  }),
  a)),
    (this.el.style.overflowX = "hidden");
  var o = ["webkit", "moz", "MS", "o", ""];
  function u(t, e, a) {
    for (var n = 0; n < o.length; n += 1) {
      var i = e;
      o[n] || (i = e.toLowerCase()), t.addEventListener(o[n] + i, a, !1);
    }
  }
  function h(t) {
    var e = t.getBoundingClientRect();
    return (
      0 <= e.top &&
      0 <= e.left &&
      e.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      e.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  (this.createPetal = function() {
    c.el.dataset.sakuraAnimId &&
      setTimeout(function() {
        window.requestAnimationFrame(c.createPetal);
      }, c.settings.delay);
    var t = [
        "sway-0",
        "sway-1",
        "sway-2",
        "sway-3",
        "sway-4",
        "sway-5",
        "sway-6",
        "sway-7",
        "sway-8"
      ],
      e = d([
        "blow-soft-left",
        "blow-medium-left",
        "blow-soft-right",
        "blow-medium-right"
      ]),
      a = d(t),
      n =
        (0.007 * document.documentElement.clientHeight +
          Math.round(5 * Math.random())) *
        c.settings.fallSpeed,
      i = [
        "fall ".concat(n, "s linear 0s 1"),
        ""
          .concat(e, " ")
          .concat((30 < n ? n : 30) - 20 + m(0, 20), "s linear 0s infinite"),
        "".concat(a, " ").concat(m(2, 4), "s linear 0s infinite")
      ].join(", "),
      o = document.createElement("div");
    o.classList.add(c.settings.className);
    var r = m(c.settings.minSize, c.settings.maxSize),
      s = r - Math.floor(m(0, c.settings.minSize) / 3),
      l = d(c.settings.colors);
    (o.style.background = "linear-gradient("
      .concat(l.gradientColorDegree, "deg, ")
      .concat(l.gradientColorStart, ", ")
      .concat(l.gradientColorEnd, ")")),
      (o.style.webkitAnimation = i),
      (o.style.animation = i),
      (o.style.borderRadius = ""
        .concat(
          m(
            c.settings.maxSize,
            c.settings.maxSize + Math.floor(10 * Math.random())
          ),
          "px "
        )
        .concat(m(1, Math.floor(s / 4)), "px")),
      (o.style.height = "".concat(r, "px")),
      (o.style.left = "".concat(
        Math.random() * document.documentElement.clientWidth - 100,
        "px"
      )),
      (o.style.marginTop = "".concat(
        -(Math.floor(20 * Math.random()) + 15),
        "px"
      )),
      (o.style.width = "".concat(s, "px")),
      u(o, "AnimationEnd", function() {
        h(o) || o.parentNode.removeChild(o);
      }),
      u(o, "AnimationIteration", function() {
        h(o) || o.parentNode.removeChild(o);
      }),
      c.el.appendChild(o);
  }),
    this.el.setAttribute(
      "data-sakura-anim-id",
      window.requestAnimationFrame(this.createPetal)
    );
};
(Sakura.prototype.start = function() {
  if (this.el.dataset.sakuraAnimId)
    throw new Error("Sakura is already running.");
  this.el.setAttribute(
    "data-sakura-anim-id",
    window.requestAnimationFrame(this.createPetal)
  );
}),
  (Sakura.prototype.stop = function() {
    var e = this,
      t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
      a = this.el.dataset.sakuraAnimId;
    a &&
      (window.cancelAnimationFrame(a),
      this.el.setAttribute("data-sakura-anim-id", "")),
      t ||
        setTimeout(function() {
          for (
            var t = document.getElementsByClassName(e.settings.className);
            0 < t.length;

          )
            t[0].parentNode.removeChild(t[0]);
        }, this.settings.delay + 50);
  });

export default {
  name: "App",
  components: {
    // HelloWorld
  },
  methods: {
    selectComment(comment) {
      this.selectedComment = comment;
      this.confirmDialog = true;
    },
    deleteComment() {
      // 댓글 삭제
      // console.log('실행은 됨')
      this.deleteLoading = true;
      if (this.pw_comment == this.selectedComment.password) {
        // console.log('조건문 작동은 함')

        db.collection("comment")
          .doc(this.selectedComment.id)
          .delete()
          .then(() => {
            alert("댓글 삭제 완료");
            this.deleteLoading = false;
            this.comments = this.comments.filter(commentA => {
              // console.log("commentA : "+commentA.createdAt);
              // console.log("comment: "+comment.createdAt);
              return commentA.createdAt != this.selectedComment.createdAt;
            });
            this.confirmDialog = false;
            this.pw_comment = null;
            this.selectedComment = null;
          })
          .catch(err => {
            this.deleteLoading = false;

            this.confirmDialog = false;
            this.pw_comment = null;
            this.selectedComment = null;

            alert("에러발생");
          });
      } else {
        alert("비밀번호가 다릅니다");
        this.pw_comment = null;
        this.confirmDialog = false;
        this.deleteLoading = false;

        //TODO: comment 삭제 시 비밀번호 input 창에서 비밀번호가 변경되는 오류
        //TODO: 만든 이 이름 삽입
      }
    },
    uploadComment() {
      this.loading = true;
      if (this.commentbody && this.commentwriter && this.commentpassword) {
        db.collection("comment")
          .add({
            body: this.commentbody,
            writer: this.commentwriter,
            password: this.commentpassword,
            createdAt: new Date()
          })
          .then(result => {
            console.log(result);
            alert("축하해 주셔서 감사합니다!");
            this.comments.unshift({
              body: this.commentbody,
              writer: this.commentwriter,
              password: this.commentpassword,
              createdAt: new Date(),
              id: result.id
            });
            this.commentbody = "";
            this.commentwriter = "";
            this.commentpassword = "";
            // console.log(this.comments);
            this.loading = false;
          })
          .catch(err => {
            alert("오류가 발생해서 올리지 못했네요..");
            this.loading = false;
          });
      } else {
        alert("빈칸을 모두 채워주어야 합니다.");
        this.loading = false;
      }
    }
  },
  data() {
    return {
      commentbody: "",
      commentwriter: "",
      commentpassword: "",
      createdAt: "",
      comments: [],
      selectedComment: null,
      loading: false,
      deleteLoading: false,
      confirmDialog: false,
      pw_comment: "",
      pictures: [
        {
          src: require("@/assets/pictures/6.jpg")
        },
        {
          src: require("@/assets/pictures/1.jpg")
        },
        {
          src: require("@/assets/pictures/2.jpg")
        },
        {
          src: require("@/assets/pictures/3.jpg")
        },
        {
          src: require("@/assets/pictures/4.jpg")
        },
        {
          src: require("@/assets/pictures/5.jpg")
        }
      ]
      //
    };
  },
  created: function() {
    jarallaxVideo();
    jarallaxElement();

    db.collection("comment")
      .orderBy("createdAt", "desc")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          let comment = doc.data();
          comment.id = doc.id;
          this.comments.push(comment);
        });
      });
  },
  mounted() {
    var container = new Sakura(".contentwrapper", {
      delay: 750,
      fallSpeed: 3
    });
    jarallax(document.querySelectorAll(".jarallax"), {
      speed: 0.2
    });

    this.so = ScrollOut({
      threshold: 0.2,
      scope: this.$el,
      once: true
      // onShown: function(el) {
      //   // remove the class
      //   el.classList.remove("animated");

      //   // force reflow
      //   void el.offsetWidth;

      //   // re-add the animated cl
      //   el.classList.add("animated");
      // },
      // onHidden: function(el) {
      //   // hide the element initially
      //   el.classList.remove("animated");
      // }
    });
  },
  destroyed() {
    this.so.teardown();
  }
};
</script>

<style src="./assets/sakura/sakura.min.css">
</style>


<style>
/* @font-face {
  font-family: "GyeonggiBatang";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/GyeonggiBatang.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
} */
@font-face {
  font-family: "GyeonggiBatang";
  src: url("~@/assets/fonts/gyeonggiRnew.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}
/* @font-face {
  font-family: "GyeonggiBatang";
  src: url("~@/assets/fonts/gyeonggiB.woff") format("woff");
  font-weight: bold;
  font-style: normal;
} */
@font-face {
  font-family: "Inklipquid";
  src: url("~@/assets/fonts/THEFACESHOP.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}
.all {
  font-family: "GyeonggiBatang";
}
.main-one {
  animation-delay: 0.3s;
  animation-duration: 1s;
  animation-iteration-count: 1;
  font-family: "Inklipquid";
  font-size: 45px;
}
.main-two {
  animation-delay: 0.6s;
  animation-duration: 1s;
  animation-iteration-count: 1;
  font-family: "Inklipquid";
  font-size: 30px;
}
.main-three {
  animation-delay: 0.8s;
  animation-duration: 1s;
  animation-iteration-count: 1;
  font-family: "Inklipquid";
  font-size: 28px;
  font-weight: bold;
}
.invitation {
  font-size: 16px;
}
.family {
  font-size: 15px;
}
.schedule {
  font-size: 15px;
}
/* .shuttlewrap {
  display: block;
  margin: 10px auto;
} */
.shuttle {
  height: 220px;
  width: 100%;
  margin: 10px auto;
  background-size: cover;
  background-position: center;
}
.commentwrap {
  width: 100%;
  font-size: 16px;
}
.comment {
  background-color: white;
  border-radius: 5px;
  width: 100%;
  padding: 5px 10px;
  text-align: left;
}
.comment-writer {
  text-align: right;
  font-weight: bold;
  margin: -7px 8px;
}

.jarallax {
  position: relative;
  z-index: 0;
}
[data-scroll] {
  transition: all 1s;
}
[data-scroll="in"] {
  opacity: 1;
  /* -webkit-transform: translateX(0); */
  transform: translateY(0);
}
[data-scroll="out"] {
  opacity: 0;
  /* -webkit-transform: translateX(-200px); */
  transform: translateY(100px);
}
</style>
