import confetti from "canvas-confetti";
class ConfetiManager {
    constructor(duration) {
      this.duration = duration;
      this.endTime = Date.now() + this.duration;
    }
  
    startConfetti() {
      this.throwConfetti();
    }
  
    throwConfetti() {
      if (Date.now() < this.endTime) {
        this.launchConfetti();
        requestAnimationFrame(() => this.throwConfetti());
      }
    }
  
    launchConfetti() {
      confetti({
        particleCount: 7,
        angle: 60,
        spread: 55,
        origin: { x: 0 }
      });
  
      confetti({
        particleCount: 7,
        angle: 120,
        spread: 55,
        origin: { x: 1 }
      });
    }
  }

    export default ConfetiManager;
  