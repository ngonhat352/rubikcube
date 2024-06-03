import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import TWEEN from "@tweenjs/tween.js";
import { Ref, useMemo, useRef } from "react";
import { Group, Object3DEventMap, Vector3 } from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";

function Cube({ command, setCommand }) {
  console.log({ command });
  const ref = useRef();
  const rotationGroup = useRef();

  const roundedBoxGeometry = useMemo(() => {
    return new RoundedBoxGeometry(1, 1, 1, 3, 0.1);
  }, []);

  useFrame(() => {
    if (command) {
      mapCommandToRotation(command, ref, rotationGroup);
      setCommand("");
    }
    TWEEN.update();
  });

  return (
    <>
      <group
        ref={
          rotationGroup as unknown as Ref<Group<Object3DEventMap>> | undefined
        }
      />
      <group ref={ref as unknown as Ref<Group<Object3DEventMap>> | undefined}>
        {[...Array(3).keys()].map((x) =>
          [...Array(3).keys()].map((y) =>
            [...Array(3).keys()].map((z) => (
              <Cubelet
                key={x + y * 3 + z * 9}
                position={[x - 1, y - 1, z - 1]}
                geometry={roundedBoxGeometry}
              />
            ))
          )
        )}
      </group>
    </>
  );
}

const colorSides = [
  [0, 1, "red"], //right
  [0, -1, "orange"], //left

  [1, 1, "white"], //up
  [1, -1, "yellow"], //down

  [2, 1, "green"], //front
  [2, -1, "blue"], //back
];

function Cubelet({
  position,
  geometry,
}: {
  position: number[];
  geometry: RoundedBoxGeometry;
}) {
  // console.log({ position });
  // [...Array(6).keys()].map((i) => {
  //   console.log("i =", i);
  //   console.log("position", position[colorSides[i][0] as number]);
  //   console.log(
  //     "color",
  //     position[colorSides[i][0] as number] === colorSides[i][1]
  //       ? colorSides[i][2]
  //       : `black`
  //   );
  // });

  return (
    <>
      <mesh position={position as unknown as Vector3} geometry={geometry}>
        {[...Array(6).keys()].map((i) => (
          <meshBasicMaterial
            key={i}
            attach={`material-${i}`}
            color={
              position[colorSides[i][0] as number] === colorSides[i][1]
                ? colorSides[i][2]
                : `black`
            }
          />
        ))}
      </mesh>
    </>
  );
}

function resetCubeGroup(cubeGroup, rotationGroup) {
  rotationGroup.children
    .slice()
    .reverse()
    .forEach(function (c) {
      cubeGroup.attach(c);
    });
  rotationGroup.quaternion.set(0, 0, 0, 1);
}

function attachToRotationGroup(cubeGroup, rotationGroup, axis, limit) {
  cubeGroup.children
    .slice()
    .reverse()
    .filter(function (c) {
      return limit < 0 ? c.position[axis] < limit : c.position[axis] > limit;
    })
    .forEach(function (c) {
      rotationGroup.attach(c);
    });
}

function animateRotationGroup(rotationGroup, axis, multiplier) {
  new TWEEN.Tween(rotationGroup.rotation)
    .to(
      {
        [axis]: rotationGroup.rotation[axis] + (Math.PI / 2) * multiplier,
      },
      250
    )
    .easing(TWEEN.Easing.Cubic.InOut)
    .start();
}

function rotate(cubeGroup, rotationGroup, axis, limit, multiplier) {
  if (!TWEEN.getAll().length) {
    resetCubeGroup(cubeGroup, rotationGroup);
    attachToRotationGroup(cubeGroup, rotationGroup, axis, limit);
    animateRotationGroup(rotationGroup, axis, multiplier);
  }
}

function mapCommandToRotation(command, cubeGroup, rotationGroup) {
  switch (command) {
    case "F":
      rotate(cubeGroup.current, rotationGroup.current, "z", 0.5, -1);
      return;
    case "Fc":
      rotate(cubeGroup.current, rotationGroup.current, "z", 0.5, 1);
      return;
    case "B":
      rotate(cubeGroup.current, rotationGroup.current, "z", -0.5, 1);
      return;
    case "Bc":
      rotate(cubeGroup.current, rotationGroup.current, "z", -0.5, -1);
      return;

    case "R":
      rotate(cubeGroup.current, rotationGroup.current, "x", 0.5, -1);
      return;
    case "Rc":
      rotate(cubeGroup.current, rotationGroup.current, "x", 0.5, 1);
      return;
    case "L":
      rotate(cubeGroup.current, rotationGroup.current, "x", -0.5, 1);
      return;
    case "Lc":
      rotate(cubeGroup.current, rotationGroup.current, "x", -0.5, -1);
      return;

    case "U":
      rotate(cubeGroup.current, rotationGroup.current, "y", 0.5, -1);
      return;
    case "Uc":
      rotate(cubeGroup.current, rotationGroup.current, "y", 0.5, 1);
      return;
    case "D":
      rotate(cubeGroup.current, rotationGroup.current, "y", -0.5, 1);
      return;
    case "Dc":
      rotate(cubeGroup.current, rotationGroup.current, "y", -0.5, -1);
      return;
  }
}

export default function Cube3d({ command, setCommand }) {
  console.log("cube3d command", command);
  return (
    <Canvas camera={{ position: [3, 3, 3] }}>
      <Cube command={command} setCommand={setCommand} />
      <OrbitControls target={[0, 0, 0]} />
    </Canvas>
  );
}
