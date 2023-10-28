const Hamburger = ({ width, height, className }) => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      preserveAspectRatio="xMidYMid meet"
      width={width}
      height={height}
      className={className ? className : 'fill-slate-gray'}
    >
      <g transform="translate(0,512) scale(0.1,-0.1)">
        <path d="M415 4146 c-67 -29 -105 -106 -91 -181 9 -47 59 -102 104 -115 26 -8 689 -10 2154 -8 l2117 3 27 21 c53 39 69 71 69 134 0 63 -16 95 -69 134 l-27 21 -2127 2 c-1753 2 -2132 0 -2157 -11z" />
        <path d="M415 2706 c-67 -29 -105 -106 -91 -181 9 -47 59 -102 104 -115 26 -8 593 -10 1834 -8 l1797 3 27 21 c53 39 69 71 69 134 0 63 -16 95 -69 134 l-27 21 -1807 2 c-1487 2 -1812 0 -1837 -11z" />
        <path d="M415 1266 c-67 -29 -105 -106 -91 -181 9 -47 59 -102 104 -115 25 -8 377 -10 1114 -8 1069 3 1077 3 1104 24 53 39 69 71 69 134 0 63 -16 95 -69 134 -27 21 -34 21 -1114 23 -888 2 -1093 0 -1117 -11z" />
      </g>
    </svg>
  );
};

export default Hamburger;
