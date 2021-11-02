let english = document.getElementById("english");
let albanian = document.getElementById("albanian");
let hello = document.getElementById("hello");
let jrdev = document.getElementById("jrdev");
let hire = document.getElementById("hire");

english.onclick = () => {
  setLanguage("english");
  localStorage.setItem("Lang", "english");
};

albanian.onclick = () => {
  setLanguage("albanian");
  localStorage.setItem("Lang", "albanian");
};

onload = () => {
  setLanguage(localStorage.getItem("Lang"));
};
function setLanguage(getLanguage) {
  if (getLanguage === "english") {
    hello.innerHTML = `<span class="wave">👋</span> Hi, I'm
    <b>
      <a
        class="underline"
        target="_blank"
        title="My LinkedIn"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/erald-kuci"
        ><b>Erald Kuci.</b></a
      ></b
    >`;
    hire.innerHTML = `<b style="font-size: 110%">I am also available for hire!</b>`;
    jrdev.innerHTML = `I'm a
    <b><span class="highlighted-text"> Web Developer</span></b> based
    in <b>Albania</b> who likes to code and solve problems.`;
    navHome.innerHTML = `HOME`;
    navProjects.innerHTML = `PROJECTS`;
    navBlog.innerHTML = `BLOG`;
    navContact.innerHTML = `CONTACT`;
    projectsheaderTitle.innerHTML = `<b class="projects-header-text">/software-creations</b>`;
    p1desc.innerHTML = `My portfolio website. There have been various iterations on its design and features.
    I plan to continue improving on it over time.`;
    p2desc.innerHTML = `Weather app that uses OpenWeatherMap API to get weather data.`;
    p3desc.innerHTML = `Dictionary website, powered by Pearson Dictionary API.`;
    contact__title.innerHTML = `Reach Out To Me.`;
    contact__subtext.innerHTML = `<p>
    I'm currently open to work as a Front-end Developer.</p>
    <p>
    Contact me and let's talk more.
    </p>`;
  } else if (getLanguage === "albanian") {
    hello.innerHTML = `<span class="wave">👋</span> Ç'kemi, unë jam
    <br>
    <b>
      <a
        class="underline"
        target="_blank"
        title="My LinkedIn"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/erald-kuci"
        ><b>Erald Kuci.</b></a
      ></b
    >`;
    hire.innerHTML = `<b style="font-size: 110%">Gjithashtu jam i disponueshëm për punë!</b>`;
    jrdev.innerHTML = `Jam një
    <b><span class="highlighted-text"> Web Developer</span></b> me qendër 
    në <b>Shqipëri</b>, dhe i apasionuar pas programimit.`;
    navHome.innerHTML = `KREU`;
    navProjects.innerHTML = `PROJEKTET`;
    navBlog.innerHTML = `BLOG`;
    navContact.innerHTML = `KONTAKT`;
    projectsheaderTitle.innerHTML = `<b class="projects-header-text">/krijime-softuerike</b>`;
    p1desc.innerHTML = `Website-i im. Ka patur shumë versione dhe ndryshime mbi pamjen.
    Kam në plan ta mirëmbaj dhe ta përmirësoj gjatë kohës.`;
    p2desc.innerHTML = `Aplikacion moti që përdor OpenWeatherMap API për të marrë të dhënat mbi motin.`;
    p3desc.innerHTML = `Website fjalori, fuqizuar nga Pearson Dictionary API.`;
    contact__title.innerHTML = `Më Kontaktoni.`;
    contact__subtext.innerHTML = `<p>
    Momentalisht jam i hapur të punoj si Front-end Developer.
    </p>
    <p>
    Më kontaktoni dhe le të flasim më tej.
    </p>`;
  }
}
