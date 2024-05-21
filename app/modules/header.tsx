import './header.css'

export function Header() {
  return (
    <header>
      <h1>Markdown viewer</h1>
      <nav>
        {/* <a href="/" title='home'>
          <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="inherit" width="24" height="100%"><path d="M904.45123 489.841328C797.500383 379.861494 689.768753 270.643 582.221318 161.243381c-20.268626-20.617573-44.738947-30.486338-73.79982-29.354562-29.351492 1.143033-51.260477 15.84078-71.074755 36.090986C334.303902 273.291316 230.941789 378.287649 127.723963 483.426221c-5.315052 5.414313-10.914584 10.697643-15.365966 16.784268-12.106736 16.551978-13.753235 34.152844 0.197498 50.03865 13.870916 15.797801 31.027667 17.869996 48.974411 6.02625 7.161097-4.725628 13.975293-9.974166 28.293393-20.263509 0 25.102724-0.00307 40.23026 0.002047 55.356772 0.021489 65.314565-0.661056 130.639363 0.260943 195.941648 0.945535 66.991764 37.852096 103.015212 105.497753 104.244202 34.924417 0.635473 69.877487 0.62217 104.802928 0.00921 43.273573-0.76134 54.16769-11.334139 55.037501-53.504588 0.688685-33.401738-0.185218-66.836221 0.37146-100.244099 0.191358-11.483542 2.608407-22.928199 4.275373-36.582173 26.123984 0 48.803519 0.037862 71.484078-0.00921 24.301476-0.050142 48.668443 0.89744 72.887031-0.566912 26.16287-1.582031 42.014906-18.021445 40.753169-39.244816-1.172709-19.747763-15.739473-34.362622-40.295751-34.791387-62.253856-1.088798-124.547621-0.86367-186.809663-0.040932-23.25668 0.305969-36.43891 14.351869-37.169551 37.625946-0.904603 28.834722-0.406253 57.7114-0.469698 86.570681-0.041956 19.334347-0.00921 38.669718-0.00921 60.587913-18.724457 1.099031-32.074509 2.452865-45.435819 2.564405-60.644195 0.50449-69.605288-7.983835-69.777203-67.104327-0.25685-88.098477 0.722454-176.211281-0.683569-264.286222-0.348947-21.816888 6.352685-36.70497 21.410636-51.685149C347.326497 369.794208 407.463132 307.49328 468.341664 245.934249c39.398312-39.83731 50.401923-40.036855 89.12383-0.782829 92.796476 94.082772 185.224562 188.528817 277.884938 282.744619 9.565866 9.727549 18.256806 21.975501 29.972639 27.447119 10.904351 5.091972 27.89942 7.457856 37.442774 2.26253 9.677407-5.270027 18.419512-21.209044 18.554588-32.580023C921.460626 513.242294 913.268036 498.908844 904.45123 489.841328z"></path><path d="M835.717799 716.356294c0-30.318516 1.566682-60.745503-0.497327-90.921779-1.6465-24.080441-17.629519-37.854143-37.658691-37.890982-20.269649-0.036839-33.938973 13.145391-37.667901 37.975916-1.563612 10.412141-1.016143 21.173229-1.054005 31.776727-0.119727 33.358759 0.428765 66.725704-0.193405 100.073206-0.87595 46.886867-9.485025 55.398728-56.367799 56.55404-31.81766 0.784876-63.939241-1.523703-95.337345 2.334161-12.121062 1.488911-27.311019 14.097066-32.406061 25.518187-4.256954 9.54233 0.404206 28.218692 8.025791 36.475749 7.834432 8.487302 23.913643 12.285814 36.607756 12.817933 37.84084 1.592264 75.806523 1.280156 113.694435 0.419556 63.584154-1.443885 100.788497-38.437427 103.279225-102.354156 0.943488-24.223704 0.153496-48.514947 0.153496-72.77549C836.103586 716.357318 835.910181 716.357318 835.717799 716.356294z"></path></svg>
        </a> */}
        <a href='https://github.com/Emiyaaaaa/markdown-viewer' title='github' target="_blank">
          <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="inherit" width="22" height="100%"><path d="M692.906667 938.666667a42.666667 42.666667 0 0 1-42.666667-42.666667v-110.933333a91.733333 91.733333 0 0 0-23.04-70.826667 42.666667 42.666667 0 0 1 26.026667-71.253333C757.333333 630.613333 853.333333 597.333333 853.333333 416.853333a170.666667 170.666667 0 0 0-28.586666-94.72 117.333333 117.333333 0 0 1-17.493334-87.893333 158.293333 158.293333 0 0 0 0-60.16 326.4 326.4 0 0 0-89.173333 46.506667 42.666667 42.666667 0 0 1-35.84 6.4 433.066667 433.066667 0 0 0-235.52 0 42.666667 42.666667 0 0 1-35.84-6.4 315.733333 315.733333 0 0 0-90.026667-46.506667 150.186667 150.186667 0 0 0 0 60.16 121.173333 121.173333 0 0 1-18.346666 88.746667 173.653333 173.653333 0 0 0-28.586667 95.146666c0 165.973333 80.213333 210.346667 200.533333 225.706667a42.666667 42.666667 0 0 1 34.986667 28.16 42.666667 42.666667 0 0 1-8.96 42.666667 87.893333 87.893333 0 0 0-23.466667 66.56V896a42.666667 42.666667 0 0 1-85.333333 0v-24.32a256 256 0 0 1-224.853333-89.173333 166.4 166.4 0 0 0-49.493334-37.546667 42.666667 42.666667 0 1 1 21.333334-82.773333 210.346667 210.346667 0 0 1 85.333333 58.026666c42.666667 42.666667 85.333333 80.213333 166.4 64.853334a165.973333 165.973333 0 0 1 9.813333-67.413334c-87.893333-22.186667-213.333333-85.333333-213.333333-298.666666a256 256 0 0 1 42.666667-142.08 36.266667 36.266667 0 0 0 5.546666-26.453334 242.773333 242.773333 0 0 1 14.08-136.96 42.666667 42.666667 0 0 1 26.88-24.32c14.506667-4.266667 66.56-12.8 165.12 51.2a518.826667 518.826667 0 0 1 242.773334 0c98.56-64 150.613333-55.893333 164.693333-51.2a42.666667 42.666667 0 0 1 26.88 24.32 243.626667 243.626667 0 0 1 14.08 137.386667 32 32 0 0 0 4.693333 24.32 256 256 0 0 1 42.666667 142.506667c0 216.32-124.586667 279.04-213.333333 298.666666a182.613333 182.613333 0 0 1 9.386666 71.253334V896a42.666667 42.666667 0 0 1-40.106666 42.666667z"></path></svg>
        </a>
      </nav>
    </header>
  );
}