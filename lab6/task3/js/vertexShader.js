const vertexShaderText = [
    'uniform float time;',
    'uniform float indexA;',
    'uniform float indexB;',
    '',
    'void main() {',
    '   float ellipticalCoordinateZ = (position.x * position.x / (indexA * indexA) + position.y * position.y / (indexB * indexB)) / 2.0;',
    '   float hyperbolicCoordinateZ = (position.x * position.x / (indexA * indexA) - position.y * position.y / (indexB * indexB)) / 2.0;',
    '   float phase = abs(sin(time * 0.001));',
    '',
    '   float x = position.x;',
    '   float y = position.y;',
    '   float z = mix(ellipticalCoordinateZ, hyperbolicCoordinateZ, phase);',
    '',
    '   gl_Position = projectionMatrix * modelViewMatrix *  vec4(x, y, z, 1.0);',
    '}'
].join('')