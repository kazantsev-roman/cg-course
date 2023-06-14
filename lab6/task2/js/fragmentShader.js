const fragmentShaderText = [
    'uniform float radius;',
    'uniform vec3 center;',
    '',
    'void main() {',
        'vec3 position = vec3(gl_FragCoord) - center;',
        '',
        'if (length(position) <= radius) {',
            'gl_FragColor = vec4(1, 0, 0, 1);',
        '} else {',
            'gl_FragColor = vec4(1, 1, 1, 1);',
        '}',
    '}'
].join('')