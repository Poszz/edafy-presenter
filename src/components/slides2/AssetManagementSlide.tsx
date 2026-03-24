import React, { useEffect, useRef } from 'react';
import { MousePointer2Icon } from 'lucide-react';
import * as THREE from 'three';
export function AssetManagementSlide() {
  const mountRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;
    // Scene
    const scene = new THREE.Scene();
    // Camera
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 2.8;
    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);
    // Globe group (holds everything that rotates)
    const globeGroup = new THREE.Group();
    // Tilt slightly to show ASEAN region better
    globeGroup.rotation.x = 0.25;
    scene.add(globeGroup);
    // --- Main Earth sphere with texture ---
    const sphereGeometry = new THREE.SphereGeometry(1, 64, 64);
    const textureLoader = new THREE.TextureLoader();
    // Load earth night texture (shows continent outlines as city lights on dark)
    const earthTexture = textureLoader.load(
      'https://unpkg.com/three-globe@2.31.1/example/img/earth-night.jpg'
    );
    earthTexture.colorSpace = THREE.SRGBColorSpace;
    const earthMaterial = new THREE.MeshStandardMaterial({
      map: earthTexture,
      roughness: 0.5,
      metalness: 0.1,
      emissive: 0x222244,
      emissiveIntensity: 0.3
    });
    const earth = new THREE.Mesh(sphereGeometry, earthMaterial);
    globeGroup.add(earth);
    // --- Atmosphere glow ring ---
    const atmosphereGeometry = new THREE.SphereGeometry(1.03, 64, 64);
    const atmosphereMaterial = new THREE.MeshBasicMaterial({
      color: 0x6d28d9,
      transparent: true,
      opacity: 0.08,
      side: THREE.BackSide
    });
    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    globeGroup.add(atmosphere);
    // --- Outer glow ring ---
    const outerGlowGeometry = new THREE.SphereGeometry(1.08, 64, 64);
    const outerGlowMaterial = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      transparent: true,
      opacity: 0.04,
      side: THREE.BackSide
    });
    const outerGlow = new THREE.Mesh(outerGlowGeometry, outerGlowMaterial);
    globeGroup.add(outerGlow);
    // --- ASEAN region markers ---
    const markerPositions = [
    {
      lat: 15,
      lon: 101,
      label: 'Thailand'
    },
    {
      lat: 3,
      lon: 102,
      label: 'Malaysia'
    },
    {
      lat: -2,
      lon: 118,
      label: 'Indonesia'
    },
    {
      lat: 13,
      lon: 122,
      label: 'Philippines'
    },
    {
      lat: 16,
      lon: 108,
      label: 'Vietnam'
    },
    {
      lat: 20,
      lon: 97,
      label: 'Myanmar'
    }];

    const latLonToVector3 = (lat: number, lon: number, radius: number) => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lon + 180) * (Math.PI / 180);
      return new THREE.Vector3(
        -radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.sin(theta)
      );
    };
    // Alert wells (orange) — 12 wells spread across the globe
    const alertWellPositions = [
    {
      lat: 28,
      lon: -97
    },
    {
      lat: 56,
      lon: 70
    },
    {
      lat: 26,
      lon: 50
    },
    {
      lat: -22,
      lon: -43
    },
    {
      lat: 5,
      lon: 105
    },
    {
      lat: 62,
      lon: 5
    },
    {
      lat: 30,
      lon: 48
    },
    {
      lat: -2,
      lon: 118
    },
    {
      lat: 52,
      lon: -3
    },
    {
      lat: 6,
      lon: 3
    },
    {
      lat: -38,
      lon: 145
    },
    {
      lat: 40,
      lon: 52
    } // Kazakhstan
    ];
    alertWellPositions.forEach((pos) => {
      const markerGeo = new THREE.SphereGeometry(0.025, 16, 16);
      const markerMat = new THREE.MeshBasicMaterial({
        color: 0xf97316
      });
      const marker = new THREE.Mesh(markerGeo, markerMat);
      const position = latLonToVector3(pos.lat, pos.lon, 1.02);
      marker.position.copy(position);
      globeGroup.add(marker);
      const ringGeo = new THREE.RingGeometry(0.03, 0.06, 32);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0xf97316,
        transparent: true,
        opacity: 0.4,
        side: THREE.DoubleSide
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.position.copy(position);
      ring.lookAt(new THREE.Vector3(0, 0, 0));
      globeGroup.add(ring);
    });
    // Normal wells (purple) — 38 wells spread across the globe
    const normalWellPositions = [
    // North America
    {
      lat: 32,
      lon: -102
    },
    {
      lat: 35,
      lon: -97
    },
    {
      lat: 48,
      lon: -110
    },
    {
      lat: 58,
      lon: -120
    },
    {
      lat: 30,
      lon: -90
    },
    {
      lat: 42,
      lon: -80
    },
    // South America
    {
      lat: -3,
      lon: -40
    },
    {
      lat: -20,
      lon: -40
    },
    {
      lat: -35,
      lon: -58
    },
    {
      lat: 10,
      lon: -72
    },
    // Europe
    {
      lat: 58,
      lon: 2
    },
    {
      lat: 55,
      lon: 10
    },
    {
      lat: 44,
      lon: 12
    },
    {
      lat: 48,
      lon: 35
    },
    {
      lat: 60,
      lon: 30
    },
    // Middle East
    {
      lat: 25,
      lon: 55
    },
    {
      lat: 32,
      lon: 45
    },
    {
      lat: 27,
      lon: 49
    },
    {
      lat: 24,
      lon: 54
    },
    {
      lat: 35,
      lon: 52
    },
    // Africa
    {
      lat: 32,
      lon: 3
    },
    {
      lat: -5,
      lon: 12
    },
    {
      lat: -26,
      lon: 28
    },
    {
      lat: 4,
      lon: 7
    },
    {
      lat: 30,
      lon: 32
    },
    // Russia / Central Asia
    {
      lat: 60,
      lon: 75
    },
    {
      lat: 55,
      lon: 50
    },
    {
      lat: 45,
      lon: 60
    },
    {
      lat: 65,
      lon: 90
    },
    // Asia Pacific
    {
      lat: 3,
      lon: 102
    },
    {
      lat: 15,
      lon: 101
    },
    {
      lat: 20,
      lon: 97
    },
    {
      lat: 13,
      lon: 122
    },
    {
      lat: 16,
      lon: 108
    },
    {
      lat: -1,
      lon: 117
    },
    // Australia / Oceania
    {
      lat: -20,
      lon: 116
    },
    {
      lat: -30,
      lon: 150
    },
    {
      lat: -40,
      lon: 172
    }];

    normalWellPositions.forEach((pos) => {
      const markerGeo = new THREE.SphereGeometry(0.018, 12, 12);
      const markerMat = new THREE.MeshBasicMaterial({
        color: 0xc084fc
      });
      const marker = new THREE.Mesh(markerGeo, markerMat);
      const position = latLonToVector3(pos.lat, pos.lon, 1.02);
      marker.position.copy(position);
      globeGroup.add(marker);
    });
    // --- Lighting (bright so globe is clearly visible) ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 2.0);
    directionalLight.position.set(5, 3, 5);
    scene.add(directionalLight);
    // Fill light from the left
    const fillLight = new THREE.DirectionalLight(0xffffff, 1.0);
    fillLight.position.set(-4, 2, 3);
    scene.add(fillLight);
    // Purple rim light from behind
    const rimLight = new THREE.DirectionalLight(0x8b5cf6, 0.6);
    rimLight.position.set(-5, 0, -5);
    scene.add(rimLight);
    // Bottom fill to reduce dark underside
    const bottomLight = new THREE.DirectionalLight(0xffffff, 0.5);
    bottomLight.position.set(0, -5, 2);
    scene.add(bottomLight);
    // --- Animation ---
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      // Smooth Y-axis rotation (slow)
      globeGroup.rotation.y += 0.0015;
      renderer.render(scene, camera);
    };
    animate();
    // --- Resize ---
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);
    // --- Cleanup ---
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      sphereGeometry.dispose();
      earthMaterial.dispose();
      atmosphereGeometry.dispose();
      atmosphereMaterial.dispose();
      outerGlowGeometry.dispose();
      outerGlowMaterial.dispose();
      renderer.dispose();
    };
  }, []);
  return (
    <section
      className="slide text-white"
      style={{
        backgroundImage:
        'url(https://cdn.magicpatterns.com/uploads/oNo2BAMCGVU39vB2KQpoNK/image.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
      
      <div className="slide-content container flex flex-col items-center justify-center">
        <div className="mb-6 animate-slide-up text-center">
          <h2 className="font-display text-fluid-h2 text-white font-bold leading-tight">
            EDAFY Asset Management
          </h2>
          <p className="font-body text-purple-300 text-fluid-body italic mt-1">
            Interactive Field Intelligence
          </p>
        </div>

        <div className="w-full max-w-5xl animate-slide-up delay-200 relative">
          <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-3 shadow-[0_0_60px_rgba(192,132,252,0.15)] flex flex-col items-center">
            <div
              className="w-full rounded-2xl overflow-hidden border border-white/10 relative bg-black/60 flex items-center justify-center"
              style={{
                height: 'min(65vh, 600px)'
              }}>
              
              {/* 3D Globe Canvas */}
              <div ref={mountRef} className="absolute inset-0 w-full h-full" />

              {/* Decorative Prompt Bar */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-11/12 max-w-3xl z-10">
                <div className="bg-black/70 backdrop-blur-xl border border-purple-500/50 rounded-full py-4 px-8 flex items-center justify-between shadow-[0_0_30px_rgba(168,85,247,0.3)]">
                  <span className="text-white font-body text-sm sm:text-base md:text-lg tracking-wide">
                    Identify wells where current BHP has dropped below bubble
                    point pressure.
                  </span>
                  <div className="w-10 h-10 rounded-full bg-purple-600/50 flex items-center justify-center shrink-0 ml-4 hover:bg-purple-500 transition-colors cursor-pointer">
                    <MousePointer2Icon className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Overlay UI Elements */}
              <div className="absolute top-6 left-6 flex flex-col gap-2 pointer-events-none">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-3 py-1.5 text-xs font-mono text-purple-300">
                  LAT: 4.2105° N
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-3 py-1.5 text-xs font-mono text-purple-300">
                  LNG: 101.9758° E
                </div>
              </div>

              <div className="absolute top-6 right-6 flex flex-col items-end gap-2 pointer-events-none">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-3 py-1.5">
                  <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                  <span className="text-xs font-mono text-white">
                    12 Alert Wells
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-3 py-1.5">
                  <div className="w-2 h-2 rounded-full bg-purple-400" />
                  <span className="text-xs font-mono text-white">
                    38 Normal Wells
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}