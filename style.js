/* global AFRAME */

/**
 * Spawn entity at the intersection point on click, given the properties passed.
 *
 * `<a-entity intersection-spawn="mixin: box; material.color: red">` will spawn
 * `<a-entity mixin="box" material="color: red">` at intersection point.
//  */

// 여기서의 data는 컴포넌트의 이름 뒤에 붙는 기본적인 것들을 정의한다.
let positionMap = document.querySelector("#positionMap");
AFRAME.registerComponent("intersection-spawn", {
  schema: {
    default: "",
    parse: AFRAME.utils.styleParser.parse, // 문자열 xyz의 값을 순서대로 확인
  },

  init: function () {
    var data = this.data;
    console.log(data);
    var el = this.el;

    el.addEventListener("raycaster-intersected", (evt) => {
      this.raycaster = evt.detail.el;

      el.addEventListener("click", (evt) => {
        const clickPoint = document.createElement(`a-box`);

        clickPoint.setAttribute("position", evt.detail.intersection.point);

        positionMap.appendChild(clickPoint);
      });
    });

    // el.addEventListener("click", (evt) => {
    //   // 엘리먼트를 생성할 수 있도록 제작
    //   var spawnEl = document.createElement("a-entity");

    //   //제작된 엘리먼트에서 position의 값을 상호작용한 포인트에 생성
    //   spawnEl.setAttribute("position", evt.detail.intersection.point);

    //   // Set components and properties.
    //   Object.keys(data).forEach((name) => {
    //     if (name === "event") {
    //       return;
    //     }
    //     AFRAME.utils.entity.setComponentProperty(spawnEl, name, data[name]);
    //   });

    //   // Append to scene.
    //   positionMap.appendChild(spawnEl);
    // });
  },
});

//data는 여기서 schema로 지정한 값들을 설정할 수 있다.
AFRAME.registerComponent("snap", {
  dependencies: ["position"],

  schema: {
    offset: { type: "vec3" },
    snap: { type: "vec3" },
  },

  init: function () {
    this.originalPos = this.el.getAttribute("position");
  },

  update: function () {
    var data = this.data;
    console.log(data);
    var pos = AFRAME.utils.clone(this.originalPos);
    pos.x = Math.floor(pos.x / data.snap.x) * data.snap.x + data.offset.x;
    pos.y = Math.floor(pos.y / data.snap.y) * data.snap.y + data.offset.y;
    pos.z = Math.floor(pos.z / data.snap.z) * data.snap.z + data.offset.z;

    this.el.setAttribute("position", pos);
  },
});

// let intersection;
// let clickPoint;

// //커서 리스너 통해서 박스 생성
// AFRAME.registerComponent("cursor-listener", {

//   init: function () {
//     this.el.addEventListener("raycaster-intersected", (evt) => {
//       this.raycaster = evt.detail.el;

//       this.el.addEventListener("click", (evt) => {
//         const clickPoint = document.createElement(`a-entity`);
//         var data = this.data;
//         console.log(data);
//         // positionX = Math.floor(evt.detail.intersection.point.x);
//         // positionY = Math.floor(evt.detail.intersection.point.y);
//         // positionZ = Math.floor(evt.detail.intersection.point.z);

//         clickPoint.setAttribute("position", evt.detail.intersection.point);
//         // Set components and properties.
//         Object.keys(data).forEach((name) => {
//           if (name === "event") {
//             return;
//           }
//           AFRAME.utils.entity.setComponentProperty(
//             clickPoint,
//             name,
//             data[name]
//           );
//         });

//         positionMap.appendChild(clickPoint);
//       });
//     });

//     this.el.addEventListener("raycaster-intersected-cleared", (evt) => {
//       this.raycaster = null;
//     });
//   },
//   tick: function () {
//     if (!this.raycaster) {
//       return;
//     }
//     intersection = this.raycaster.components.raycaster.getIntersection(this.el);
//     if (!intersection) {
//       return;
//     }
//   },
// });
