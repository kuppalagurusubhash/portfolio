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

    // 2. Camera-Attached Dynamic Lighting (Soft, minimal ambient)
    scene.add(camera);

    const camPointLight1 = new THREE.PointLight(0xd4af37, 1.2, 70);
    camPointLight1.position.set(14, 10, 16);
    camera.add(camPointLight1);

    const camPointLight2 = new THREE.PointLight(0xfce59c, 0.8, 60);
    camPointLight2.position.set(-14, -8, 14);
    camera.add(camPointLight2);

    const ambientLight = new THREE.AmbientLight(0xfffaeb, 0.4);
    scene.add(ambientLight);

    // Minimal, understated luxury gold wireframe materials
    const subtleGoldMat = new THREE.MeshBasicMaterial({
      color: 0x7a632d,
      wireframe: true,
      transparent: true,
      opacity: 0.08,
    });

    const faintGoldMat = new THREE.MeshBasicMaterial({
      color: 0x5f4d22,
      wireframe: true,
      transparent: true,
      opacity: 0.06,
    });

    // ── 3. Minimal 3D Accents Across Page Depth (1 subtle geometric accent per region) ──
    // [A] Top Section: Subtle Torus Knot (Left)
    const knotGeo = new THREE.TorusKnotGeometry(2.8, 0.7, 80, 14);
    const knotMesh = new THREE.Mesh(knotGeo, subtleGoldMat);
    knotMesh.position.set(-15, 2, -6);
    scene.add(knotMesh);

    // [B] Mid Page (Experience & Skills): Concentric Orbital Ring (Right)
    const gyroGeo = new THREE.TorusGeometry(3.6, 0.25, 16, 60);
    const gyroOuterMesh = new THREE.Mesh(gyroGeo, faintGoldMat);
    gyroOuterMesh.position.set(15, -55, -6);
    scene.add(gyroOuterMesh);

    // [C] Lower Page (Projects & Education): Faceted Geometry (Left)
    const octGeo = new THREE.OctahedronGeometry(3.2, 0);
    const octMesh = new THREE.Mesh(octGeo, subtleGoldMat);
    octMesh.position.set(-15, -88, -6);
    scene.add(octMesh);

    // [D] Bottom Section (Contact & Footer): Ambient Golden Ring (Right)
    const contactRingGeo = new THREE.TorusGeometry(3.8, 0.28, 16, 64);
    const contactRingMesh = new THREE.Mesh(contactRingGeo, subtleGoldMat);
    contactRingMesh.position.set(15, -116, -5);
    scene.add(contactRingMesh);

    // ── 4. Minimal, Delicate Golden Stardust (280 faint micro-particles) ──
    const particleCount = 280;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const colorDimGold = new THREE.Color(0x8a7035);
    const colorSoftGold = new THREE.Color(0x6a5426);
    const colorDarkAmber = new THREE.Color(0x483918);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 65;
      positions[i3 + 1] = 20 - Math.random() * 165;
      positions[i3 + 2] = (Math.random() - 0.5) * 20;

      const rnd = Math.random();
      const c = rnd > 0.6 ? colorSoftGold : rnd > 0.25 ? colorDimGold : colorDarkAmber;
      colors[i3] = c.r;
      colors[i3 + 1] = c.g;
      colors[i3 + 2] = c.b;
    }

    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    pGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const pMat = new THREE.PointsMaterial({
      size: 0.065,
      vertexColors: true,
      transparent: true,
      opacity: 0.18,
      blending: THREE.NormalBlending,
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

    // 6. Animation Loop (Calm, Minimal, and Error-Free)
    let animId;

    const animate = (time) => {
      animId = requestAnimationFrame(animate);
      const elapsed = time * 0.001;

      // Smooth camera interpolation based on scroll and mouse
      scrollY += (targetScrollY - scrollY) * 0.06;
      targetMouseX += (mouseX * 1.5 - targetMouseX) * 0.03;
      targetMouseY += (mouseY * 1.5 - targetMouseY) * 0.03;

      camera.position.x = targetMouseX;
      camera.position.y = -scrollY + targetMouseY;

      // Minimal, subtle accent rotations
      knotMesh.rotation.x = elapsed * 0.08;
      knotMesh.rotation.y = elapsed * 0.11 + scrollY * 0.02;

      gyroOuterMesh.rotation.x = elapsed * 0.10;
      gyroOuterMesh.rotation.y = elapsed * 0.13 + scrollY * 0.02;

      octMesh.rotation.x = elapsed * 0.08 + scrollY * 0.015;
      octMesh.rotation.z = elapsed * 0.09;

      contactRingMesh.rotation.x = 1.1 + Math.sin(elapsed * 0.25) * 0.15;
      contactRingMesh.rotation.y = elapsed * 0.10 + scrollY * 0.02;

      // Gentle, serene cosmic drift
      particles.rotation.y = elapsed * 0.008;

      renderer.render(scene, camera);
    };

    animId = requestAnimationFrame(animate);

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
