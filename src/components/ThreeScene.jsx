'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeScene() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 24;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Dynamic Lighting
    const ambientLight = new THREE.AmbientLight(0xfffaeb, 0.8);
    scene.add(ambientLight);

    const goldPointLight1 = new THREE.PointLight(0xd4af37, 2.5, 70);
    goldPointLight1.position.set(12, 10, 15);
    scene.add(goldPointLight1);

    const goldPointLight2 = new THREE.PointLight(0xe8c96d, 1.8, 60);
    goldPointLight2.position.set(-14, -8, 12);
    scene.add(goldPointLight2);

    // 3. 3D Wireframe Sculptures Across The Page Depth
    // Sculpture A: Floating Gold Torus Knot (Upper Left)
    const knotGeo = new THREE.TorusKnotGeometry(3.2, 0.9, 110, 18);
    const knotMat = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      metalness: 0.85,
      roughness: 0.2,
      wireframe: true,
      transparent: true,
      opacity: 0.28,
    });
    const knotMesh = new THREE.Mesh(knotGeo, knotMat);
    knotMesh.position.set(-14, 4, -4);
    scene.add(knotMesh);

    // Sculpture B: 3D Icosahedron with inner core (Upper Right)
    const icoGeo = new THREE.IcosahedronGeometry(2.8, 1);
    const icoMat = new THREE.MeshStandardMaterial({
      color: 0xe6c875,
      metalness: 0.9,
      roughness: 0.2,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const icoMesh = new THREE.Mesh(icoGeo, icoMat);
    icoMesh.position.set(15, -2, -3);
    scene.add(icoMesh);

    // Inner wireframe sphere
    const coreGeo = new THREE.SphereGeometry(1.2, 16, 16);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0xd4af37,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    coreMesh.position.copy(icoMesh.position);
    scene.add(coreMesh);

    // Sculpture C: 3D Octahedron for mid-page (Projects & Experience area)
    const octGeo = new THREE.OctahedronGeometry(3.5, 0);
    const octMat = new THREE.MeshStandardMaterial({
      color: 0xc4a349,
      metalness: 0.8,
      wireframe: true,
      transparent: true,
      opacity: 0.2,
    });
    const octMesh = new THREE.Mesh(octGeo, octMat);
    octMesh.position.set(-12, -18, -6);
    scene.add(octMesh);

    // Sculpture D: Floating Torus Ring for lower page (Contact area)
    const ringGeo = new THREE.TorusGeometry(3.6, 0.4, 16, 80);
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0xeec867,
      wireframe: true,
      transparent: true,
      opacity: 0.22,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.position.set(13, -28, -5);
    scene.add(ringMesh);

    // 4. Full-Page 3D Floating Golden Stardust (700 particles)
    const particleCount = 700;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const colorGold = new THREE.Color(0xd4af37);
    const colorLight = new THREE.Color(0xf5e6b3);
    const colorDark = new THREE.Color(0x8f7524);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 55;
      positions[i3 + 1] = (Math.random() - 0.5) * 70; // spread across vertical scroll space
      positions[i3 + 2] = (Math.random() - 0.5) * 30;

      const rnd = Math.random();
      const c = rnd > 0.6 ? colorLight : rnd > 0.25 ? colorGold : colorDark;
      colors[i3] = c.r;
      colors[i3 + 1] = c.g;
      colors[i3 + 2] = c.b;
    }

    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    pGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const pMat = new THREE.PointsMaterial({
      size: 0.15,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(pGeo, pMat);
    scene.add(particles);

    // 5. Scroll & Mouse Tracking (Smooth & Continuous across Full Page)
    let scrollY = 0;
    let targetScrollY = 0;
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const onScroll = () => {
      targetScrollY = window.scrollY * 0.012;
    };

    const onMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = -(e.clientY / window.innerHeight - 0.5) * 2;
    };

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('resize', onResize);

    // 6. Animation Loop
    let animId;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Smooth camera interpolation based on scroll and mouse
      scrollY += (targetScrollY - scrollY) * 0.06;
      targetMouseX += (mouseX * 1.8 - targetMouseX) * 0.04;
      targetMouseY += (mouseY * 1.8 - targetMouseY) * 0.04;

      camera.position.x = targetMouseX;
      camera.position.y = -scrollY + targetMouseY;

      // 3D Models rotation
      knotMesh.rotation.x = elapsed * 0.2;
      knotMesh.rotation.y = elapsed * 0.28 + scrollY * 0.3;

      icoMesh.rotation.x = -elapsed * 0.18;
      icoMesh.rotation.y = elapsed * 0.24 + scrollY * 0.2;
      coreMesh.position.copy(icoMesh.position);
      coreMesh.rotation.y = -elapsed * 0.4;

      octMesh.rotation.x = elapsed * 0.15 + scrollY * 0.2;
      octMesh.rotation.z = elapsed * 0.22;

      ringMesh.rotation.x = 1.2 + Math.sin(elapsed * 0.5) * 0.3;
      ringMesh.rotation.y = elapsed * 0.18;

      // Full-page particle drifting
      particles.rotation.y = elapsed * 0.025;
      particles.rotation.x = elapsed * 0.012 + scrollY * 0.1;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
      }}
      aria-hidden="true"
    />
  );
}
