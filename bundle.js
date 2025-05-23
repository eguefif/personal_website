document.addEventListener("DOMContentLoaded", async function() {
    window.addEventListener("popstate", handleRoute);

    initRouter();
    await handleRoute()
});

function initRouter() {
    const links = document.querySelectorAll(".nav a");

    links.forEach(link => {
        link.addEventListener("click", async (e) => {
            e.preventDefault();
            const url = new URL(e.target.href)
            navigate(url.pathname);
            await handleRoute();
        });
    });
}

function navigate(route) {
    const routes = [
        { title: "Portfolio", path: "portfolio" },
        { title: "Blog", path: "blog" },
        { title: "Article", path: "articles" }
    ];

    const routeData = routes.find(data =>  route.includes(data.path) );
    if (routeData) {
        history.pushState({}, routeData.title, route);
    } else {
        history.pushState({}, "Home", "/");
    }
}

async function handleRoute() {
    const route = window.location.pathname;
    if (route == "/portfolio") {
        loadPortfolio();
    } else if (route == "/blog") {
        loadBlog();
    } else if (route.includes("articles")) {
        await loadArticle(route);
    } else {
        loadHome();
    }
}

function loadPortfolio() {
    const link = document.getElementById("portfolio-link");
    document.getElementById("content").innerHTML = getPortfolioContent();
}

function loadHome() {
    const link = document.getElementById("home-link");
    document.getElementById("content").innerHTML = getHomeContent();
}

function loadBlog() {
    document.getElementById("content").innerHTML = getBlogContent();
    const links = document.querySelectorAll(".article-box a");

    links.forEach(link => {
        link.addEventListener("click", async (e) => {
            e.preventDefault();
            const url = new URL(e.currentTarget.href)
            navigate(url.pathname);
            await handleRoute();
        });
    });
}

function getBlogContent() {
    return `
        <section id="blog-section">
            <h1>Blog</h1>
            <p>This section is under work. You can read my articles on 
            <a href="https://medium.com/@eguefif"> medium</a>.
            </p>
        </section>
        `
}

function getHomeContent() {
    return `
    <section id="homepage">
    <div class="homepage-title">
        <h1>I am Emmanuel Guefif</h1>
        <h2>Junior full stack developer</h2>
    </div>
    <div class="homepage-container">
        <img src="./images/emmanuel.jpeg" alt="Your Picture" class="homepage-img">
        <div class="homepage-text">
            <p>
                I used to program as a hobby while teaching as a profession. I don't teach anymore, but I still program, and I get paid for it. I am a lifelong learner and a curious man; programming is a great activity. I can learn about technology and my client's domain. I studied sociology, and I've learned about asking questions and trying to understand people. As a developer, I combined my technical and sociological skills to understand the problem at hand and find solutions.

I like web development because it's the best way to solve people's problems. I also have a passion for low-level programming. When I finish a project, book, or article about it, it's like I've added a new piece to the big puzzle of computer systems. I love it!
        </p>
        </div>
    </div>

<footer>
  <div class="footer-icons">
    <a href="https://github.com/eguefif" target="_blank" aria-label="GitHub">
<svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px">    <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"/></svg>
    </a>
    <a href="https://www.linkedin.com/in/eguefif" target="_blank" aria-label="LinkedIn">
<svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px">    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"/></svg>
    </a>
  </div>
</footer>
</section>

    `
}

function getPortfolioContent() {
    return `
    <h1>My Portfolio</h1>
    <section id="portfolio">
    
        <div class="project-box">
            <h2 class="project-title">Ping</h2>
            <a href="https://github.com/eguefif/ping" class="github-link" target="_blank">
                <img src="./images/github.svg" alt="GitHub" class="github-icon" />
            </a>

            <div class="project-info">
                <img src="images/Screenshot from 2025-05-04 11-11-45.png" alt="Project 1" class="project-img">
                <div class="project-text">
                    <div class="project-description">
                        This ping project was an opportunity to learn more about networking, the ICMP protocol, and the raw socket API. I also implemented a DNS resolver. This ping program can only ping an IP or a FQDN address. When the program ends, it displays statistics for the pings.
                    </div>
                    <ul class="skills-list">
                    
                            <li>C</li>
                    
                            <li>ICMP</li>
                    
                            <li>IP</li>
                    
                            <li>raw_socket</li>
                    
                    </ul>
                </div>
            </div>
        </div>
    
        <div class="project-box">
            <h2 class="project-title">Webserver-rs</h2>
            <a href="https://github.com/eguefif/ws-echoserver-rust" class="github-link" target="_blank">
                <img src="./images/github.svg" alt="GitHub" class="github-icon" />
            </a>

            <div class="project-info">
                <img src="images/webserver.png" alt="Project 1" class="project-img">
                <div class="project-text">
                    <div class="project-description">
                        I love learning about networking. I'm always thrilled when I manage to make a protocol work with a regular client. In this case, I made a basic web server that handles chunked packets and compression. It takes a handler function as an argument and returns a Response. I use this library in my career manager program.
                    </div>
                    <ul class="skills-list">
                    
                            <li>HTTP</li>
                    
                            <li>parsing</li>
                    
                            <li>Rust</li>
                    
                            <li>binary data</li>
                    
                    </ul>
                </div>
            </div>
        </div>
    
        <div class="project-box">
            <h2 class="project-title">WebSocket Echo Server</h2>
            <a href="https://github.com/eguefif/ws-echoserver-rust" class="github-link" target="_blank">
                <img src="./images/github.svg" alt="GitHub" class="github-icon" />
            </a>

            <div class="project-info">
                <img src="images/websocket-rs.png" alt="Project 1" class="project-img">
                <div class="project-text">
                    <div class="project-description">
                        This project is all about learning WebSocket. I learned about what an HTTP upgrade is. How the handshake is formed and basic framing. It was a good exercise to learn how to parse bytes in Rust. The client is not quite done, but the server is operational.
                    </div>
                    <ul class="skills-list">
                    
                            <li>websocket</li>
                    
                            <li>http</li>
                    
                            <li>rust</li>
                    
                            <li>thread</li>
                    
                            <li>parsing</li>
                    
                    </ul>
                </div>
            </div>
        </div>
    
        <div class="project-box">
            <h2 class="project-title">GameBoy Emulator</h2>
            <a href="https://github.com/eguefif/game_boy_emulator" class="github-link" target="_blank">
                <img src="./images/github.svg" alt="GitHub" class="github-icon" />
            </a>

            <div class="project-info">
                <img src="images/tetris.jpg" alt="Project 1" class="project-img">
                <div class="project-text">
                    <div class="project-description">
                        This Game Boy emulator can run Tetris. This was not an easy project. There is no official documentation, but you have to gather a lot of resources yourself. It was an opportunity to learn by looking at other people's code and understanding the logic.
                    </div>
                    <ul class="skills-list">
                    
                            <li>Rust</li>
                    
                            <li>CPU architecture</li>
                    
                            <li>System Interrupt</li>
                    
                            <li>Low-level Rendering</li>
                    
                    </ul>
                </div>
            </div>
        </div>
    
        <div class="project-box">
            <h2 class="project-title">Monkey Interpreter</h2>
            <a href="https://github.com/eguefif/monkey_interpreter" class="github-link" target="_blank">
                <img src="./images/github.svg" alt="GitHub" class="github-icon" />
            </a>

            <div class="project-info">
                <img src="images/monkey.gif" alt="Project 1" class="project-img">
                <div class="project-text">
                    <div class="project-description">
                        This project was made when I was reading the book 'Make a Monkey interpreter in Go. ' I did it in Rust. I've learned a lot about parsing and recursion. It was also an opportunity to learn about Rust smart pointers.
                    </div>
                    <ul class="skills-list">
                    
                            <li>Rust</li>
                    
                            <li>parsing</li>
                    
                    </ul>
                </div>
            </div>
        </div>
    
        <div class="project-box">
            <h2 class="project-title">Marc-record-ex</h2>
            <a href="https://github.com/demarque/marc-record-ex" class="github-link" target="_blank">
                <img src="./images/github.svg" alt="GitHub" class="github-icon" />
            </a>

            <div class="project-info">
                <img src="images/marc21.jpg" alt="Project 1" class="project-img">
                <div class="project-text">
                    <div class="project-description">
                        I made this project for my work at Demarque. It binds a Marc record library written in Rust with an Elixir package. When I used this project in the parser, I had to optimize memory usage to avoid upgrading our pod. I use streaming techniques and find a way to make it work between the Rust bindings and Elixir code.
                    </div>
                    <ul class="skills-list">
                    
                            <li>Rust</li>
                    
                            <li>Rustler</li>
                    
                            <li>Elixir</li>
                    
                    </ul>
                </div>
            </div>
        </div>
    
        <div class="project-box">
            <h2 class="project-title">Ray tracer</h2>
            <a href="https://github.com/PelletierM/miniRT" class="github-link" target="_blank">
                <img src="./images/github.svg" alt="GitHub" class="github-icon" />
            </a>

            <div class="project-info">
                <img src="images/spheres.png" alt="Project 1" class="project-img">
                <div class="project-text">
                    <div class="project-description">
                        This 42 project is all about Ray Tracing. I worked mainly on implementing different figures: sphere, plane, cylinder, and triangle. We optimized rendering by implementing a sample accumulator. We also took advantage of multithreading to render rays in batches.
                    </div>
                    <ul class="skills-list">
                    
                            <li>language C</li>
                    
                            <li>multithreading</li>
                    
                            <li>Ray Tracing</li>
                    
                    </ul>
                </div>
            </div>
        </div>
    
    </section>

    `
}

function getBlogContent() {
    return `
    <section id="blog-section">
    <h1>Blog</h1>
    
        <div class="article-box">
            <a href="articles/1"> <h3>Writing a WebSocket echo server in Rust: the handshake</h3></a>
            <span class="article-date">2025 April 21</span>
        </div>
    
</section>

    `
}

async function loadArticle(route) {
    let id = extractId(route);
    document.getElementById("content").innerHTML = await getArticleContent(id);
}

function extractId(route) {
    let splits = route.split("/");
    return splits[splits.length - 1];
}

async function getArticleContent(id) {
    let url = `../articles/${id}.html`;

    let response = await fetch(url);
    if (response.status == 200) {
        const body = await response.text();
        return body;
    } else {
        return `<center><h1>Article not found</center></h1>`
    }
}
