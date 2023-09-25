import utils from "./utils.js";

// 1. 캔버스 불러오기
const canvas = document.querySelectorAll("canvas")[2];
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

// 2. Particle 클래스 정의
class Particle {
  constructor(x, y, radius, velocity) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.velocity = velocity;
    this.color = "white"; // 파티클 색상 추가
    this.opacity = 1; // 초기 투명도 설정
    this.opacityDirection = -1; // 투명도 변화 방향 (-1: 감소, 1: 증가)
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color; // 파티클 색상 설정
    ctx.globalAlpha = this.opacity; // 투명도 설정
    ctx.fill();
    ctx.closePath();
  }

  animate() {
    if (
      this.x < 0 ||
      this.x > innerWidth ||
      this.y < 0 ||
      this.y > innerHeight
    ) {
      this.x = utils.randomFloatBetween(0, innerWidth);
      this.y = utils.randomFloatBetween(0, innerHeight);
    }

    (mouse.isActive ? particles.concat(mouse) : particles).forEach(
      (particle) => {
        const distance = utils.distance(particle.x, particle.y, this.x, this.y);
        if (distance < 200) {
          const from = { x: this.x, y: this.y };
          const to = { x: particle.x, y: particle.y };
          new Line(from, to, distance).draw();
        }
      }
    );

    this.x += this.velocity.x;
    this.y += this.velocity.y;

    // 투명도 변화 적용
    this.opacity += 0.01 * this.opacityDirection; // 투명도 변화량 조절
    if (this.opacity <= 0.2 || this.opacity >= 1) {
      this.opacityDirection *= -1; // 투명도가 0.2 이하나 1 이상이면 방향 변경
    }

    this.draw();
    ctx.globalAlpha = 1; // 다음 파티클을 위해 전역 투명도 초기화
  }
}
class Line {
  constructor(from, to, distance) {
    this.from = from;
    this.to = to;
    this.distance = distance;
    this.color = "white"; // 라인의 색상 변경
    this.opacity = 1;
    this.opacityDirection = -1;
  }

  draw() {
    ctx.beginPath();
    ctx.moveTo(this.from.x, this.from.y);
    ctx.lineTo(this.to.x, this.to.y);
    ctx.strokeStyle = this.color; // 라인 색상 설정
    ctx.globalAlpha = this.opacity;
    ctx.lineWidth = 0.5; // 선의 두께를 얇게 조절
    ctx.stroke();
    ctx.globalAlpha = 1;
  }

  animate() {
    // ...

    this.opacity += 0.01 * this.opacityDirection;
    if (this.opacity <= 0.2 || this.opacity >= 1) {
      this.opacityDirection *= -1;
    }

    this.draw();
  }
}

// 3. 파티클 만들기
const TOTAL = 100;

let particles = [];
let mouse = { x: 0, y: 0, isActive: false };
for (let i = 0; i < TOTAL; i++) {
  const x = utils.randomFloatBetween(0, innerWidth);
  const y = utils.randomFloatBetween(0, innerHeight);
  const radius = utils.randomFloatBetween(0.5, 2);
  const velocity = {
    x: utils.randomFloatBetween(-2, 2),
    y: utils.randomFloatBetween(-2, 2),
  };
  particles.push(new Particle(x, y, radius, velocity));
}

// 4. 매 프레임마다 실행되는 재귀함수
function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((particle) => particle.animate());

  window.requestAnimationFrame(render);
}

// 5. 윈도우 resize 함수 정의
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
canvas.addEventListener("mouseenter", () => (mouse.isActive = true));
canvas.addEventListener("mouseleave", () => (mouse.isActive = false));
canvas.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

// 6. 실행하기
render();
