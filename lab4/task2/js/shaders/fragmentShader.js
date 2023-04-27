const fragmentShaderText = `
    precision mediump float;

    uniform vec3 color1;
    uniform vec3 color2;

    void main() {
        vec2 st = gl_PointCoord;
        float mixValue = distance(st, vec2(0, 1));

        vec3 color = mix(color1, color2, mixValue);
    
        gl_FragColor = vec4(color, 1);
}
  `