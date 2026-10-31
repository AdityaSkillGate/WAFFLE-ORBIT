import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function WafflePlanetScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check width / height
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 6.5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for entire celestial waffle system
    const systemGroup = new THREE.Group();
    scene.add(systemGroup);

    // 1. Central Waffle Planet Core
    // Warm toasted waffle textured sphere with grid-like bump and golden glow
    const planetGeometry = new THREE.SphereGeometry(1.6, 64, 64);
    
    // Create a procedural canvas texture for the waffle honeycomb grid!
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#E59837';
    ctx.fillRect(0, 0, 512, 512);
    
    // Draw waffle grid pattern
    ctx.fillStyle = '#B86518';
    const gridSize = 32;
    for (let x = 0; x < 512; x += gridSize) {
      for (let y = 0; y < 512; y += gridSize) {
        ctx.fillRect(x + 4, y + 4, gridSize - 8, gridSize - 8);
      }
    }
    const waffleTexture = new THREE.CanvasTexture(canvas);
    waffleTexture.wrapS = THREE.RepeatWrapping;
    waffleTexture.wrapT = THREE.RepeatWrapping;
    waffleTexture.repeat.set(4, 4);

    const planetMaterial = new THREE.MeshStandardMaterial({
      map: waffleTexture,
      roughness: 0.65,
      metalness: 0.15,
      bumpMap: waffleTexture,
      bumpScale: 0.08,
      color: 0xffffff
    });
    const planet = new THREE.Mesh(planetGeometry, planetMaterial);
    systemGroup.add(planet);

    // 2. Orbital Rings (Golden Amber & Crimson Halo)
    const ringGeometry = new THREE.RingGeometry(2.1, 2.9, 64);
    const ringMaterial = new THREE.MeshStandardMaterial({
      color: 0xF5A623,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.75,
      roughness: 0.3,
      metalness: 0.4
    });
    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    ring.rotation.x = Math.PI / 2.3;
    ring.rotation.y = Math.PI / 8;
    systemGroup.add(ring);

    // Secondary subtle red ring (Waffle Orbit Crimson Accent)
    const outerRingGeo = new THREE.RingGeometry(3.05, 3.25, 64);
    const outerRingMat = new THREE.MeshBasicMaterial({
      color: 0xC41E24,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.45
    });
    const outerRing = new THREE.Mesh(outerRingGeo, outerRingMat);
    outerRing.rotation.x = Math.PI / 2.3;
    outerRing.rotation.y = Math.PI / 8;
    systemGroup.add(outerRing);

    // 3. Floating Satellites: Mini Waffle / UFO Disc / Chocolate Chips
    const miniDiscs = [];
    const discGeo = new THREE.CylinderGeometry(0.25, 0.25, 0.06, 24);
    const chocolateMat = new THREE.MeshStandardMaterial({ color: 0x3E1F12, roughness: 0.3 });
    const berryMat = new THREE.MeshStandardMaterial({ color: 0xC41E24, roughness: 0.2 });

    for (let i = 0; i < 6; i++) {
      const isBerry = i % 2 === 0;
      const mesh = new THREE.Mesh(discGeo, isBerry ? berryMat : chocolateMat);
      const angle = (i / 6) * Math.PI * 2;
      const distance = 3.6 + Math.sin(i) * 0.4;
      mesh.position.set(
        Math.cos(angle) * distance,
        (Math.random() - 0.5) * 1.5,
        Math.sin(angle) * distance
      );
      mesh.rotation.x = Math.random() * Math.PI;
      mesh.rotation.y = Math.random() * Math.PI;
      systemGroup.add(mesh);
      miniDiscs.push({ mesh, speed: 0.008 + i * 0.002, angle, distance });
    }

    // 4. Cosmic Particle Starfield / Golden Sparkles
    const particleCount = 180;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const goldColor = new THREE.Color(0xF5A623);
    const redColor = new THREE.Color(0xC41E24);
    const creamColor = new THREE.Color(0xFFF9F2);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 16;
      positions[i + 1] = (Math.random() - 0.5) * 16;
      positions[i + 2] = (Math.random() - 0.5) * 12;

      const chosenColor = i % 3 === 0 ? goldColor : (i % 3 === 1 ? redColor : creamColor);
      colors[i] = chosenColor.r;
      colors[i + 1] = chosenColor.g;
      colors[i + 2] = chosenColor.b;
    }
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.06,
      vertexColors: true,
      transparent: true,
      opacity: 0.85
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // 5. Lighting
    const ambientLight = new THREE.AmbientLight(0xfff5ea, 1.2);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xffeedd, 2.5);
    mainLight.position.set(5, 6, 5);
    scene.add(mainLight);

    const redRimLight = new THREE.PointLight(0xC41E24, 4, 15);
    redRimLight.position.set(-6, -2, -3);
    scene.add(redRimLight);

    const amberFillLight = new THREE.PointLight(0xF5A623, 3, 15);
    amberFillLight.position.set(4, -4, 3);
    scene.add(amberFillLight);

    // Mouse Interaction Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetX = x * 0.4;
      targetY = y * 0.4;
    };
    window.addEventListener('mousemove', onMouseMove);

    // Resize Handler
    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    // Animation Loop
    let animationId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      // Rotate planet on its axis
      planet.rotation.y += 0.006;
      ring.rotation.z += 0.003;
      outerRing.rotation.z -= 0.002;

      // Animate orbiting particles & satellites
      miniDiscs.forEach(item => {
        item.angle += item.speed;
        item.mesh.position.x = Math.cos(item.angle) * item.distance;
        item.mesh.position.z = Math.sin(item.angle) * item.distance;
        item.mesh.rotation.x += 0.01;
        item.mesh.rotation.y += 0.02;
      });

      // Slowly rotate starfield
      particles.rotation.y += 0.0005;

      // Smooth mouse parallax
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      systemGroup.rotation.y = mouseX * 0.8;
      systemGroup.rotation.x = -mouseY * 0.6;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden z-0 opacity-80"
      aria-hidden="true"
    />
  );
}
