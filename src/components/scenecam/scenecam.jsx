import React, { useEffect } from 'react'
import {
	useCamera,
	useScene,
} from "react-babylonjs";

import {
	Vector3,
    ArcRotateCamera,
} from "@babylonjs/core";
import { Color3, Color4 } from 'babylonjs';
function SceneCam({cameraRef}) {
    const scene = useScene();
    let camera = useCamera((scene) => {
		return new ArcRotateCamera(
			"Camera",
			0,
			0,
			12,
			new Vector3(0, 0, 0),
			scene
		);
	});
    useEffect(() => {
		cameraRef.current = scene.cameras[0];
	}, [scene]);

	useEffect(() => {
		if ((cameraRef.current !== null)) {
			scene.backgroundColor = new Color3(0, 0, 0);
			scene.clearColor = new Color4(0, 0, 0, 0);
			cameraRef.current.speed =1
			cameraRef.current.minZ = 0.1;
			cameraRef.current.maxZ = 1000000000;
			cameraRef.current.fov = 0.9;
			cameraRef.current.panningSensibility = 0;
			cameraRef.current.lowerRadiusLimit = 5;
			cameraRef.current.upperRadiusLimit = 100;
			cameraRef.current.alpha = Math.PI/2;
			cameraRef.current.beta = Math.PI/2;
			cameraRef.current.invertRotation = true;
		}
	}, [cameraRef]);
  return (
    <></>
  )
}

export default SceneCam