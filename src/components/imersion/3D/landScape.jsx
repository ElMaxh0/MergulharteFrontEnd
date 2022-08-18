import React, { useEffect, useRef , useState } from "react";
import { Canvas, useThree , useFrame} from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";
import styledComponents from "styled-components";
import { useTexture } from "@react-three/drei"
import { DoubleSide, Vector3 } from 'three';
import { Suspense } from 'react';
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { MeshStandardMaterial } from "three";
import { useLoader } from "@react-three/fiber";
import { BackSide } from "three";
import { useLargura } from "../../../hooks/largura";
import { useAltura } from "../../../hooks/altura";
import { useComprimento } from "../../../hooks/comprimento";
import { useImgPackData } from "../../../hooks/ImgPackDataHook";




const MergulharteAppWindowStyle = styledComponents.div `
width:100%; height:80vh;`
function Mergulharte(){
    const {ImgPackData, setImgPackData} = useImgPackData();

  const CameraController = () => {
    const { camera, gl } = useThree();
    useEffect(
      () => {
        const controls = new OrbitControls(camera, gl.domElement);
  
        controls.minDistance = 3;
        controls.maxDistance = 5;
        return () => {
          controls.dispose();
        };
      },
      [camera, gl]
    );
    return null;
  };
  
  var image = ImgPackData[0]["image"]
  const Cena = () => {
    const texture = useTexture(image);
  
    return (
      <mesh scale={new Vector3(-1, 1, 1)}>
        <cylinderBufferGeometry args={[5, 5, 20, 32]} />
        <meshBasicMaterial map={texture} side={DoubleSide} />
      </mesh>
    );
  }
  
    return (
      <MergulharteAppWindowStyle>
        <Canvas camera={{
          near: 1,
          far: 1100,
          aspect: 16 / 9,
          fov: 70
        }}>
          <CameraController />
          <Suspense fallback={null}>
            <Cena />
          </Suspense>
        </Canvas>
      </MergulharteAppWindowStyle>
    );
  }
export default Mergulharte