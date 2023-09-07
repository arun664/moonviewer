import React, { Suspense, useContext, useRef } from "react";
import {
	AssetManagerContext,
	AssetManagerContextProvider,
	Engine,
	Scene,
	useBeforeRender,
} from "react-babylonjs";
import "@babylonjs/loaders";
import SceneCam from "../scenecam/scenecam";

  
const MyFallback = () => {
	const boxRef = useRef(null);
	const context = useContext(AssetManagerContext);
    
	useBeforeRender((scene) => {
		if (boxRef.current) {
			const deltaTimeInMillis = scene.getEngine().getDeltaTime();
			const rpm = 10;
			boxRef.current.rotation.x = Math.PI / 4;
			boxRef.current.rotation.y +=
				(rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000);
		}
	});

	const eventData = context?.lastProgress?.eventData;

	return (
		<>
			<adtFullscreenUi name="ui">
				<rectangle name="rect" height="50px" width="150px">
					<rectangle>
						{eventData !== undefined && (
							<textBlock
								text={`${eventData.totalCount - eventData.remainingCount}/${
									eventData.totalCount
								}`}
								fontStyle="bold"
								fontSize={20}
								color="white"
							/>
						)}
						{eventData === undefined && (
							<textBlock
								text="0/2"
								fontStyle="bold"
								fontSize={20}
								color="white"
							/>
						)}
					</rectangle>
				</rectangle>
			</adtFullscreenUi>
			<box ref={boxRef} name="fallback" size={2} />
		</>
	);
};

function BabylonViewer({children}) {
    const cameraRef = useRef(null)
	return (
         <Engine
			antialias
			adaptToDeviceRatio={true}
			canvasId="babylonJS"
		>
			<Scene>
				<AssetManagerContextProvider>
					<Suspense fallback={<MyFallback />}>
                        <SceneCam cameraRef={cameraRef}/>
                        {children}
                    </Suspense>
				</AssetManagerContextProvider>
				<hemisphericLight intensity={2} />
			</Scene>
		</Engine>
		
	);
}

export default BabylonViewer;
