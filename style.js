/* global AFRAME */

// 여기서의 data는 컴포넌트의 이름 뒤에 붙는 기본적인 것들을 정의한다.
let positionMap = document.querySelector("#positionMap");

let intersection;
let targetModel = "#rock1";
let roty = 0;

//커서 리스너 통해서 박스 생성
AFRAME.registerComponent("cursor-listener", {
  init: function () {
    this.el.addEventListener("raycaster-intersected", (evt) => {
      this.raycaster = evt.detail.el;

      this.el.addEventListener("click", (evt) => {
        const clickPoint = document.createElement(`a-entity`);
        clickPoint.setAttribute("gltf-model", targetModel);
        clickPoint.setAttribute("rotation", `0 ${roty} 0`);
        var data = this.data;
        // console.log(data);
        // console.log(evt.detail.intersection);
        evt.detail.intersection.point.x = Math.round(
          evt.detail.intersection.point.x
        );
        evt.detail.intersection.point.y = 0;
        evt.detail.intersection.point.z = Math.round(
          evt.detail.intersection.point.z
        );

        // console.log(this.el);

        clickPoint.setAttribute("position", evt.detail.intersection.point);

        positionMap.appendChild(clickPoint);

        // console.log(this.raycaster);

        // console.log(clickPoint);
      });

      const btn = document.querySelector("button");
      btn.addEventListener("click", (e) => {
        targetModel = "#Coral1";
      });
    });

    this.el.addEventListener("raycaster-intersected-cleared", (evt) => {
      this.raycaster = null;
    });
  },
  tick: function () {
    if (!this.raycaster) {
      return;
    }
    intersection = this.raycaster.components.raycaster.getIntersection(this.el);
    if (!intersection) {
      return;
    }
  },
});
