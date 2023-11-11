const sphereRadius = 40;
const numVertices = 250;
const numSubfaces = 5;
const numSpheres = 2;

for (let vertex = 0; vertex < numVertices; vertex++) {
    const assignedSphere = Math.floor(Math.random() * numSpheres) + 1;
    const sphere = document.getElementById(`sphere-${ assignedSphere }`);

    const phi = Math.acos(-1 + (2 * vertex) / numVertices); // Polar angle
    const theta = Math.sqrt(numVertices * Math.PI) * phi; // Azimuthal angle

    const x = sphereRadius * Math.sin(phi) * Math.cos(theta);
    const y = sphereRadius * Math.sin(phi) * Math.sin(theta);
    const z = sphereRadius * Math.cos(phi);

    for (let subface = 0; subface < numSubfaces; subface++) {
        const subfaceNode = document.createElement('div');
        subfaceNode.setAttribute("class", "sphereNode");
        const subfaceDegrees = (360 / numSubfaces) * subface;
        subfaceNode.style.transform = `translate3d(${x}vh, ${y}vh, ${z}vh) rotate3d(0, 1, 0, ${subfaceDegrees}deg)`;
        sphere.appendChild(subfaceNode);
    }
}