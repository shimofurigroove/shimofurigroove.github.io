<template>
  <canvas id="canvas" width="600" height="400"></canvas>
</template>

<script>
import * as THREE from "three";
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js'

export default {
  name: "RotateBeef",
  data() {
    const scene = new THREE.Scene();
    const renderer = null;
    const camera = new THREE.PerspectiveCamera(75, 600 / 400, 0.1, 1000);
    const light = new THREE.DirectionalLight(0xffffff);
    const modelPath = "/images/"; // mtlとobjの保存されてるパス
    const mtlName = "shimofuri.mtl"; // mtlファイル名
    const objName = "shimofuri.obj"; // objファイル名
    const objLoader = new OBJLoader();
    const mtlLoader = new MTLLoader();
    return {
      scene,
      renderer,
      camera,
      light,
      modelPath,
      mtlName,
      objName,
      objLoader,
      mtlLoader
    };
  },
  mounted() {
    const $canvas = document.getElementById("canvas");
    this.renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      canvas: $canvas,
    });

    this.camera.position.set(0, 0, 2);
    this.light.position.set(0, 0, 10);
    this.scene.add(this.light);

    this.animate();
    
    var onProgress = function(evt) {
      if (evt.lengthComputable) {
        var completed = (evt.loaded / evt.total) * 100;
        console.log(Math.round(completed, 2) + "% downloaded");
      }
    };
    var onError = function(evt) {
      console.error("モデルの読み込みに失敗したみたい");
      var xhr = evt.target;
      if (xhr) {
        console.error(
          xhr.responseURL + " status:" + xhr.status + "(" + xhr.statusText + ")"
        );
      }
    };
    this.mtlLoader.setPath(this.modelPath); //パスを指定。これを指定しないとテクスチャ画像の読み込み先が変なことになる。
    this.mtlLoader.load(
      this.mtlName,
      function(materials) {
        materials.preload();

        this.objLoader.setMaterials(materials);
        this.objLoader.setPath(this.modelPath);
        this.objLoader.load(
          this.objName,
          function(object) {
            this.scene.add(object);

            this.initialized = true;
          },
          onProgress,
          onError
        );
      },
      onProgress,
      onError
    );
  },
  methods: {
    animate() {
      requestAnimationFrame(this.animate);

      // this.beef.rotation.x += 0.02;
      // this.beef.rotation.y += 0.02;

      this.renderer.render(this.scene, this.camera);
    },
  },
};
</script>
