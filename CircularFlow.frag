// save to github
// make them sound reactive

precision mediump float;
uniform float time;
uniform vec2 resolution;

void main() {
    vec2 p = (gl_FragCoord.xy * 2. - resolution) / min(resolution.x, resolution.y);

    vec3 c;

    // for (int i; i < 4; i++) {
    //     c.r = 0.4 / length(p * float(i) + vec2(sin(time * 1.23) * 0.4, cos(time * 1.23) * 0.4));
    //     c.g = 0.3/ length(p  * float(i) + vec2(cos(time * 2.23) * 0.4, sin(time * 2.23) * 0.4));
    //     c.b = 0.1/ length(p  * float(i) + vec2(sin(time * 3.23) * 0.4, cos(time * 3.23) * 0.4));
    // }

    gl_FragColor = vec4(
        //rand(0.3, 0.4) / length(p + vec2(sin(time * 1.23) * 0.4, cos(time * 1.23) * 0.4)),

        0.4 / length(p + vec2(sin(time * 1.23) * 0.4, cos(time * 1.23) * 0.4)),
        0.3 / length(p + vec2(cos(time * 2.23) * 0.4, sin(time * 2.23) * 0.4)),
        0.1 / length(p + vec2(sin(time * 3.23) * 0.4, cos(time * 3.23) * 0.4)),
        1.
    ) * fract(sin(resolution.x * time.x) * 999.0);

    // gl_FragColor = vec4(c,1.0);
}
