
attribute vec4 position;
attribute vec4 uColor;

attribute float pointSize;

varying vec4 vColor;

void main() {
  gl_Position = position;
  gl_PointSize = pointSize;

  vColor = uColor;
} 