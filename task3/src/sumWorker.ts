const ctx: Worker = self as unknown as Worker;

ctx.onmessage = () => {
  let t = 0;
  for (let i = 0; i < 1e8; i++) {
    t += i;
  }
  ctx.postMessage(t);
};
