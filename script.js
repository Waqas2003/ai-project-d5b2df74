// Add event listeners to navigation links
document.querySelectorAll('nav a').forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});
```
This code generates a simple webpage for the Pakistan cricket team, with a navigation menu, team information, upcoming schedule, and team statistics. The CSS file adds basic styling, and the JavaScript file adds event listeners to the navigation links to enable smooth scrolling to the corresponding sections.