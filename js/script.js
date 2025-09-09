import * as THREE from 'https://cdn.skypack.dev/three@0.129.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';

// Adds/removes hideHeader class
let lastScrollY = window.scrollY;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
if (window.scrollY > lastScrollY) {
    // scrolling down → hide header
    header.classList.add("hideHeader");
} else {
    // scrolling up → show header
    header.classList.remove("hideHeader");
}
lastScrollY = window.scrollY;
});

// Hamburger toggle
const hamburger = document.getElementById('hamburger');
const navList = document.getElementById('navList');

hamburger.addEventListener('click', () => {
    navList.classList.toggle('active');
    document.body.classList.toggle('no-scroll'); // <— disables/enables scrolling
});

// Projects data and rendering
const projects = [
    {
        title: "Symad",  
        description: "Strona internetowa/projekt graficzny",
        imageUrl: "img/Symad/main-mockup.png",
        projectUrl: "https://example.com/project1",
        categories: ["Web Development", "Graphic Design"]
    },
    {
        title: "ODBC",  
        description: "Strona internetowa",
        imageUrl: "img/ODBC/main-mockup.png",
        projectUrl: "https://example.com/project1",
        categories: ["Web Development"]
    },
    {
        title: "Test",  
        description: "Aplikacja mobilna",
        imageUrl: "img/site-img-placeholder.png",
        projectUrl: "https://example.com/project1",
        categories: ["App Development"]
    },
    {
        title: "MOS Będzin",  
        description: "Strona internetowa",
        imageUrl: "img/Symad/main-mockup.png",
        projectUrl: "https://example.com/project1",
        categories: ["Web Development"]
    },
    {
        title: "ODBC",  
        description: "Web Design",
        imageUrl: "img/bg-tmp.png",
        projectUrl: "https://example.com/project1",
        categories: ["Web Design"]
    }
];

// Render projects list
window.onload = () => {
    const projectList = document.getElementById('projectList');
        projects.forEach(project => {
            console.log(project);
            const projectItem = document.createElement('div');
            projectItem.classList.add('projectItemContainer');
            projectItem.innerHTML = `
                <div class="projectItem">
                    <div class="projectImage">
                        <img src="${project.imageUrl}" alt="${project.title}">
                    </div>
                    <div class="projectInfo">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                    </div>
                </div>
            `;
            projectList.appendChild(projectItem);
        }
    );
}

/* Example HTML structure for a project item:
    <div class="projectItem">
        <div class="projectImage">
            <img src="img/Symad/main-mockup.png" alt="Mockup dla strony Symad">
        </div>
        <div class="projectInfo">
            <h2>Symad</h2>
            <h4>Strona internetowa/Projekt graficzny</h4>
        </div>
    </div>
*/
// CSS hover effect for project items
const style = document.createElement('style');
style.innerHTML = `
.project-item {
    border: 1px solid #ccc;
    padding: 15px;  
    border-radius: 8px;
    transition: transform 0.3s, box-shadow 0.3s;
    background: #fff;
    scale: 1.05;
}
.project-item:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transform: translateY(-5px);
}
`;
document.head.appendChild(style);

// 3D Model setup
if (document.getElementById('container3D')) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(10, window.clientWidth / window.clientHeight, 0.1, 1000);
    camera.position.z = 13;
    let butterfly;
    const loader = new GLTFLoader();
    loader.load('models/animated_butterfly.gltf', (gltf) => {
        butterfly = gltf.scene;
        //butterfly.scale.set(0.01, 0.01, 0.01);
        //butterfly.position.set(0, -2, 0);
        scene.add(butterfly);
    }, (xhr) => {
        //console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    }, (error) => {
        //console.error(error);
    });
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    document.getElementById('container3D').appendChild(renderer.domElement);

    const reRender3D = () => {
        requestAnimationFrame(reRender3D);
        renderer.render(scene, camera);
    }
    reRender3D();
}
/* Note: This is a basic example using Three.js to create a rotating cube. 
const container3D = document.getElementById('container3D');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, container3D.clientWidth / container3D.clientHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(container3D.clientWidth, container3D.clientHeight);
container3D.appendChild(renderer.domElement);
camera.position.z = 5;

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();
*/