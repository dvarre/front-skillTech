<template>
  <Renderer :antialias="true" :alpha="true">
    <Scene>
      <PerspectiveCamera :position="{ x: 0, y: 1, z: 5 }" />
      <DirectionalLight :position="{ x: 10, y: 10, z: 10 }" />
      <Mesh>
        <SphereGeometry />
        <StandardMaterial color="blue" />
      </Mesh>
    </Scene>
  </Renderer>
</template>

<script>
import {DirectionalLight, Mesh, PerspectiveCamera, Renderer, Scene, SphereGeometry, StandardMaterial} from "troisjs";

export default {
  name: 'Scene3D',
  components: {StandardMaterial, SphereGeometry, Mesh, DirectionalLight, PerspectiveCamera, Scene, Renderer},
}
</script>