import * as THREE from "three";

console.log("Ping");


    //Create scene
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({canvas: document.querySelector('#screen')})
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild( renderer.domElement );
    
    //Add camera
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 800);

    //example cube
    //const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    //const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    //const cube = new THREE.Mesh( geometry, material );
    //scene.add( cube );

    //Create the Earth
    const earthGeometry = new THREE.SphereGeometry(0.5, 32, 32)
    const earthMaterial = new THREE.MeshPhongMaterial({
        wireframe: true
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
        renderer.render( scene, camera );
    }
    renderer.setAnimationLoop( animate );
