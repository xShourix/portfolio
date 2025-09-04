// Adds/removes hideHeader class
let lastScrollY = window.scrollY;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
if (window.scrollY > lastScrollY) {
    // scrolling down → hide header
    header.classList.add("hideHeader");
} else {
    // scrolling up → show header
    header.classList.remove("hideHeader");
}
lastScrollY = window.scrollY;
});

// Hamburger toggle
const hamburger = document.getElementById('hamburger');
const navList = document.getElementById('navList');

hamburger.addEventListener('click', () => {
    navList.classList.toggle('active');
    document.body.classList.toggle('no-scroll'); // <— disables/enables scrolling
});

// Projects data and rendering
const projects = [
    {
        title: "Symad",  
        description: "Strona internetowa/projekt graficzny",
        imageUrl: "img/Symad/main-mockup.png",
        projectUrl: "https://example.com/project1",
        categories: ["Web Development", "Graphic Design"]
    },
    {
        title: "ODBC",  
        description: "Strona internetowa",
        imageUrl: "img/ODBC/main-mockup.png",
        projectUrl: "https://example.com/project1",
        categories: ["Web Development"]
    },
    {
        title: "Test",  
        description: "Aplikacja mobilna",
        imageUrl: "img/site-img-placeholder.png",
        projectUrl: "https://example.com/project1",
        categories: ["App Development"]
    },
    {
        title: "MOS Będzin",  
        description: "Strona internetowa",
        imageUrl: "img/Symad/main-mockup.png",
        projectUrl: "https://example.com/project1",
        categories: ["Web Development"]
    },
    {
        title: "ODBC",  
        description: "Web Design",
        imageUrl: "img/bg-tmp.png",
        projectUrl: "https://example.com/project1",
        categories: ["Web Design"]
    }
];

// Render projects list
window.onload = () => {
    const projectList = document.getElementById('projectList');
        projects.forEach(project => {
            console.log(project);
            const projectItem = document.createElement('div');
            projectItem.classList.add('projectItemContainer');
            projectItem.innerHTML = `
                <div class="projectBackgroundItem">
                    <div class="projectItem">
                    <div class="projectImage">
                        <img src="${project.imageUrl}" alt="${project.title}">
                    </div>
                    <div class="projectInfo">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                    </div>
                </div>
                </div>
            `;
            projectList.appendChild(projectItem);
        }
    );
}

/* Example HTML structure for a project item:
    <div class="projectItem">
        <div class="projectImage">
            <img src="img/Symad/main-mockup.png" alt="Mockup dla strony Symad">
        </div>
        <div class="projectInfo">
            <h2>Symad</h2>
            <h4>Strona internetowa/Projekt graficzny</h4>
        </div>
    </div>
*/
// CSS hover effect for project items
const style = document.createElement('style');
style.innerHTML = `
.project-item {
    border: 1px solid #ccc;
    padding: 15px;  
    border-radius: 8px;
    transition: transform 0.3s, box-shadow 0.3s;
    background: #fff;
    scale: 1.05;
}
.project-item:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transform: translateY(-5px);
}
`;
document.head.appendChild(style);