const MouseOver = (e: any) => {
  e.target.style.textShadow =
    '0 0 8px #0fa, 0 0 12px #0fa, 0 0 16px #0fa, 0 0 20px #0fa, 0 0 40px #0fa, 0 0 50px #0fa, 0 0 60px #0fa';
};

const MouseOut = (e: any) => {
  e.target.style.textShadow =
    '0 0 1px #0fa, 0 0 1px #0fa, 0 0 1px #0fa, 0 0 1px #0fa';
};

export { MouseOver, MouseOut };
