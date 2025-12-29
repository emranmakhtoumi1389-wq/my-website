// Dark Mode
const toggle=document.querySelector('.dark-mode-toggle');
toggle.addEventListener('click',()=>{document.body.classList.toggle('dark'); toggle.textContent=document.body.classList.contains('dark')?'☀️':'🌙';});

// Animate Hero Text
window.addEventListener('load',()=>{
document.querySelectorAll('.hero-text h2, .hero-text p').forEach(el=>{el.style.opacity='1'; el.style.transform='translateY(0)';});
});

// Intersection Observer
const animateEls=document.querySelectorAll('.animate');
const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');}});},{threshold:0.2});
animateEls.forEach(el=>observer.observe(el));

// Three.js 3D Scene
const canvas=document.getElementById('three-canvas');
const scene=new THREE.Scene();
const camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
const renderer=new THREE.WebGLRenderer({canvas,alpha:true,antialias:true});
renderer.setSize(window.innerWidth,window.innerHeight);
camera.position.z=5;

// Light
const light=new THREE.PointLight(0xffffff,1);
light.position.set(10,10,10);
scene.add(light);

// Cube
const geometry=new THREE.BoxGeometry(1,1,1);
const material=new THREE.MeshStandardMaterial({color:0xff4d6d});
const cube=new THREE.Mesh(geometry,material);
scene.add(cube);

// Animate Cube
function animate(){
    requestAnimationFrame(animate);
    cube.rotation.x+=0.01;
    cube.rotation.y+=0.01;
    renderer.render(scene,camera);
}
animate();

// Mouse parallax
document.addEventListener('mousemove',(e)=>{
    const x=(e.clientX/window.innerWidth-0.5)*2;
    const y=(e.clientY/window.innerHeight-0.5)*2;
    cube.rotation.x=y;
    cube.rotation.y=x;
});

// Resize
window.addEventListener('resize',()=>{
    camera.aspect=window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth,window.innerHeight);
});