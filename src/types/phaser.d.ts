declare namespace Phaser {
  class Scene {
    scene: {
      key: string;
    };
    scale: {
      width: number;
      height: number;
    };
    add: {
      sprite: (x: number, y: number, key: string) => any;
      tween: (config: any) => any;
    };
    tweens: {
      add: (config: any) => any;
    };
  }

  namespace Math {
    function Between(min: number, max: number): number;
  }

  namespace Tweens {
    class Tween {
      isPlaying(): boolean;
      pause(): void;
      play(): void;
      stop(): void;
    }
  }
}

declare module 'phaser' {
  export class Scene {
    scene: {
      key: string;
    };
    scale: {
      width: number;
      height: number;
    };
    add: {
      sprite: (x: number, y: number, key: string) => any;
      tween: (config: any) => any;
    };
    tweens: {
      add: (config: any) => any;
    };
  }
}
