const omikuji = () => {
  const kuji: string[] = ["大吉", "吉", "中吉", "小吉", "末吉", "凶", "大凶"];
  const num: number = Math.floor(Math.random() * kuji.length);
  const res: string = kuji[num];
  return res;
};

const getElement = () => {
  const start = <HTMLElement>document.getElementById("start");
  const output = <HTMLElement>document.getElementById("output");
  const result = <HTMLElement>document.getElementById("result");
  const restart = <HTMLElement>document.getElementById("restart");
  const quit = <HTMLElement>document.getElementById("quit");
  const anime = <HTMLElement>document.getElementById("animation");
  const explain = <HTMLElement>document.getElementById("explain");
  return [start, output, result, restart, quit, anime, explain];
};

const getOutput = (result: HTMLElement, output: HTMLElement, res: string) => {
  result.textContent = res;
  result.innerHTML = res;
  output.hidden = false;
};

window.onload = () => {
  const [start, output, result, restart, quit, anime, explain] = getElement();
  start.addEventListener("click", () => {
    explain.hidden = true;
    anime.className = "loading";
    start.hidden = true;
    setTimeout(() => {
      const res = omikuji();
      getOutput(result, output, res);
      anime.className = "";
    }, 3000);
  });
  restart.addEventListener("click", () => {
    anime.className = "loading";
    start.hidden = true;
    restart.hidden = true;
    quit.hidden = true;
    result.hidden = true;
    setTimeout(() => {
      const res = omikuji();
      getOutput(result, output, res);
      anime.className = "";
      restart.hidden = false;
      quit.hidden = false;
      result.hidden = false;
    }, 3000);
  });
  quit.addEventListener("click", () => {
    start.hidden = false;
    output.hidden = true;
    explain.hidden = false;
  });
};
