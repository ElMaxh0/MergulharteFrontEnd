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
width:100%; height:80vh; border-radius:"25px";`
function RoomImersive(){
  const {larguraid, setlarguraid} = useLargura();
  const {Alturaid, setAlturaid} = useAltura();
  const {comprimentoid, setcomprimentoid} = useComprimento();
  const {ImgPackData, setImgPackData} = useImgPackData();
  let largura= larguraid
  let altura = Alturaid
  var image = ImgPackData[0]["image"]

  const CameraController = () => {
    const { camera, gl } = useThree();
    useEffect(
      () => {
        const controls = new OrbitControls(camera, gl.domElement);
  
        controls.minDistance = 1;
        controls.maxDistance = 5;
        return () => {
          controls.dispose();
        };
      },
      [camera, gl]
    );
    return null;
  };
  



  function Parede01(props) {
    const texture0 = useTexture(ImgPackData[0]["image"]);

    // This reference will give us direct access to the mesh
    const mesh = useRef()
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    // Subscribe this component to the render-loop, rotate the mesh every frame
    // Return view, these are regular three.js elements expressed in JSX
    return (
      <mesh
        {...props}
        ref={mesh}>
        <boxGeometry args={[(0),(altura*10), (largura*10)]} />
        <meshBasicMaterial map={texture0} side={BackSide}/>
      </mesh>
    )
  }
  function Parede02(props) {
    const texture0 = useTexture(ImgPackData[1]["image"]);

    // This reference will give us direct access to the mesh
    const mesh = useRef()
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    // Subscribe this component to the render-loop, rotate the mesh every frame
    // Return view, these are regular three.js elements expressed in JSX
    return (
      <mesh
        {...props}
        ref={mesh}>
        <boxGeometry args={[(largura*10),(altura*10), (1)]} />
        <meshBasicMaterial map={texture0} side={BackSide}/>
      </mesh>
    )
  }
  function Parede03(props) {
    const texture0 = useTexture(ImgPackData[2]["image"]);

    // This reference will give us direct access to the mesh
    const mesh = useRef()
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    // Subscribe this component to the render-loop, rotate the mesh every frame
    // Return view, these are regular three.js elements expressed in JSX
    return (
      <mesh
        {...props}
        ref={mesh}>
        <boxGeometry args={[(0),(altura*10), (largura*10)]} />
        <meshBasicMaterial map={texture0} side={BackSide}/>
      </mesh>
    )
  }
  function Parede04(props) {
    const texture0 = useTexture(ImgPackData[3]["image"]);

    // This reference will give us direct access to the mesh
    const mesh = useRef()
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    // Subscribe this component to the render-loop, rotate the mesh every frame
    // Return view, these are regular three.js elements expressed in JSX
    return (
      <mesh
        {...props}
        ref={mesh}>
        <boxGeometry args={[(largura*10),(altura*10), (1)]} />
        <meshBasicMaterial map={texture0} side={BackSide}/>
      </mesh>
    )
  }
  const Cena = () => {
    const texture = useTexture(image);

    return (
      <mesh scale={new Vector3(-1, 1, 1)}>
        <boxBufferGeometry args={[2, 2,2,2]} />
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
            <Parede01 position={[((- largura/2) *10), 0, 0]} />
            <Parede02 position={[0, 0, ((comprimentoid/2)*10)]} />
            <Parede03 position={[((largura/2) *10), 0, 0]} />
            <Parede04 position={[0, 0, (-((comprimentoid/2)*10))]} />
          </Suspense>
        </Canvas>
      </MergulharteAppWindowStyle>
    );
  }
export default RoomImersive