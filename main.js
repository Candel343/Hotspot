import * as THREE from "three";

console.log("Ping");


    //Create scene
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({antialias: true,canvas: document.querySelector('#screen')})
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild( renderer.domElement );
    
    //Add camera
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 800);

    //Create the Earth
    const earthGeometry = new THREE.SphereGeometry(1, 35, 35)
    const earthMaterial = new THREE.MeshPhongMaterial({
        map : new THREE.TextureLoader().load('resources/earth-basic-texture.jpg'),
        bumpMap : new THREE.TextureLoader().load('resources/earth-elevation-map.jpg'),
        bumpScale : 0.1,
    })
    const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);

    scene.add(earthMesh);

    //Ambient Light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);

    //moving camara 
    camera.position.z = 3;

    function animate() {
        earthMesh.rotation.x += 0.0001;
        earthMesh.rotation.y += 0.0065;
        


        let canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
        renderer.render( scene, camera );
    }
    renderer.setAnimationLoop( animate );
