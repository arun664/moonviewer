import React, { useEffect, useRef } from "react";
import {
	TaskType,
	useAssetManager,
	useEngine,
	useScene,
} from "react-babylonjs";
import dynamic from 'next/dynamic';
const DynamicBabylonInspector = dynamic(() => import('@babylonjs/inspector'), {
  ssr: false, // Disable server-side rendering for this component
});
const modelAssetTasks = [
	{
		taskType: TaskType.Mesh,
		rootUrl: `/models/`,
		sceneFilename: "moon.gltf",
		name: "moon",
	},

];
function MoonLoader() {
  const engine = useEngine();
	const scene = useScene();
  useEffect(() => {
    console.log("Engine:", engine);
    console.log("Babylon:", window.BABYLON);
    console.log("Inspector:", window.BABYLON && window.BABYLON.Inspector);

    // Ensure that Babylon.js and the Babylon Inspector are available
    if (engine && window.BABYLON && window.BABYLON.Inspector) {
      console.log("Initializing and showing the Inspector...");
      // Initialize and show the Inspector
      window.BABYLON.Inspector.Show(scene);
    }
    
    return () => {
      // Hide the Inspector when the component unmounts
      if (window.BABYLON && window.BABYLON.Inspector) {
        console.log("Hiding the Inspector...");
        window.BABYLON.Inspector.Hide();
      }
    };
  }, [engine, scene]);
  const assetManagerResult = useAssetManager(modelAssetTasks, { scene: scene });

  useEffect(()=>{
    console.log(assetManagerResult)
  },[assetManagerResult])
  return (
    <></>
  )
}

export default MoonLoader