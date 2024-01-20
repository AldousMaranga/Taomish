import React, { useEffect } from 'react';
import * as THREE from 'three';

const Globe = () => {
    useEffect(() => {
        // Set up scene, camera, and renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);

        const handleResize = () => {
            const newWidth = window.innerWidth;
            const newHeight = window.innerHeight;
        
            camera.aspect = newWidth / newHeight;
            camera.updateProjectionMatrix();
        
            renderer.setSize(newWidth, newHeight);
          };
        
          window.addEventListener('resize', handleResize);

        // Append the renderer to the container
        document.getElementById('globe-container').appendChild(renderer.domElement);

        // Create a sphere (globe)
        const geometry = new THREE.SphereGeometry(5, 32, 32);
        const textureLoader = new THREE.TextureLoader();
        const texture = textureLoader.load('path/to/your/earth_texture.jpg'); // Replace with your own texture
        const material = new THREE.MeshBasicMaterial({ map: texture });
        const globe = new THREE.Mesh(geometry, material);
        scene.add(globe);

        // Set camera position
        camera.position.z = 10;

        // Set up animation
        const animate = () => {
            requestAnimationFrame(animate);

            // Rotate the globe
            globe.rotation.y += 0.005;

            // Render the scene
            renderer.render(scene, camera);
        };

        // Handle window resize
        window.addEventListener('resize', () => {
            const newWidth = window.innerWidth;
            const newHeight = window.innerHeight;

            camera.aspect = newWidth / newHeight;
            camera.updateProjectionMatrix();

            renderer.setSize(newWidth, newHeight);
        });

        // Start the animation
        animate();

        // Clean up on component unmount
        // Clean up on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
            document.getElementById('globe-container').removeChild(renderer.domElement);
        };

    }, []); // Run once on component mount

    return <div id="globe-container" />;
};

export default Globe;
