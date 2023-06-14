const vertexShaderText = [
    'void main() {',
    '    float R = (1.0 + sin(position.x)) * (1.0 + 0.9 * cos(8.0 * position.x)) * (1.0 + 0.1 * cos(24.0 * position.x)) * (0.5 + 0.05 * cos(140.0 * position.x));',
    '',
    '    float x = R * cos(position.x);',
    '    float y = R * sin(position.x);',
    '    float z = position.z;',
    '',
    '    gl_Position = projectionMatrix * modelViewMatrix * vec4(x, y, z, 1);',
    '}'
].join('')