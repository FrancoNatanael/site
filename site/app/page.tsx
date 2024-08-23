'use client'
import Link from "next/link";
import { ShaderGradient, ShaderGradientCanvas } from "shadergradient";
import * as reactSpring from '@react-spring/three'
import * as drei from '@react-three/drei'
import * as fiber from '@react-three/fiber'

export default function Home() {
  return (
    <div className="">
      <ShaderGradientCanvas
      importedFiber={{ ...fiber, ...drei, ...reactSpring }}
      style={{
        position: 'absolute',
        top: 0,
      }}
    >
      <ShaderGradient
        control='query'
        urlString='https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=0.8&cAzimuthAngle=270&cDistance=0.5&cPolarAngle=180&cameraZoom=15.1&color1=%23968c84&color2=%231a3820&color3=%238ac568&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=on&lightType=env&pixelDensity=1&positionX=-0.1&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.4&rotationX=0&rotationY=130&rotationZ=70&shader=defaults&type=sphere&uAmplitude=3.2&uDensity=0.8&uFrequency=5.5&uSpeed=0.3&uStrength=0.3&uTime=0&wireframe=false&zoomOut=false'
      />
    </ShaderGradientCanvas>
      <div className="fixed w-full m-auto text-center flex flex-col h-full text-white">
          <div className="absolute top-3 w-full text-center">
            <Link 
            href={'https://github.com/FrancoNatanael'} 
            target="_blank" 
            className="mr-4 transition duration-200 hover:opacity-80">GitHub</Link>

            <Link 
            href={'https://www.linkedin.com/in/franco-tomaino/'}
            target="_blank" className="transition duration-200 hover:opacity-80">LinkedIn</Link>
          </div>

          <div className="absolute bottom-1/2 w-full text-center">
            <h1 className="text-3xl font-semibold">Franco Tomaino</h1>
            <h2 className="font-light">Software developer</h2>
          </div>

          <div className="absolute bottom-3 w-full text-center">
            <span>From Buenos Aires, Argentina 🇦🇷</span>
          </div>
        </div>
      </div>
  );
}
