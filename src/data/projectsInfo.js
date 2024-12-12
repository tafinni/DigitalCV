import ProjectBox from "../components/ProjectBox";

const projectsInfo = [
    /* Link */
    [
        'https://github.com/tafinni/DigitalCV',
        'https://github.com/tafinni/minishell',
        'https://github.com/tafinni/ft_irc',
        'https://github.com/tafinni/ft_transcendence',
        'https://github.com/tafinni/cub3D',
        'https://github.com/tafinni/Inception'
    ],

    /* Tech */
    [
        'JavaScript, HTML, CSS, React, Tailwind, Three.js, React Three Fiber, Vercel, Blender',
        'C, Bash, Unix, Process management, Signal handling, Memory management, Pipelines, Input/output redirection, Error handling, Linked lists, Parsing, Enviroment variable management',
        'C++, Sockets, Networking, Protocols, Client-Server model, IRC',
        'JavaScript, HTML, CSS, Bootstrap, Docker, Nginx, APIs, Web security',
        'C, Memory management, Pointers, Structs, Raycasting, Parsing, Graphics',
        'Docker, Docker compose, Database, SQL, Nginx, Wordpress'
    ],

    /* Summary */
    [
        'Site for my CV.',
        'A simple shell implementation that replicates basic functionalities of an Unix shell.',
        'A real-time chat server built according to IRC protocol.',
        'An app that hosts a 3D Ping Pong game.',
        'A game imitating old-style Wolfenstein.',
        'A multicontainer Docker environment that launches Wordpress site.'
    ],

    /* Func_title */
    [
        '',
        'Functionalities include:',
        'Functionalities include:',
        'Functionalities include:',
        '',
        ''
    ],

    /* Description */
    [
        'Built the site with React to manage components efficiently and used React Three Fiber, which is a React renderer for Three.js (built on top of WebGL), to integrate 3D elements modeled with Blender. Better support for mobile in development.',
        'Command execution with arguments, Built-in commands.',
        'Client registration and log in, Multi-client support, Channel creation and management, Server-client and client-client communication, Support for IRC commands.',
        'Multiplayer, Single player, Responsive design, User authentication and management, Friends, Game history and more.',
        'Essentially a mini-game engine that handles 3D rendering, player movement and updates real-time minimap. Player can move in the environment with W A S D and look around with right and left arrowkey.',
        'A Docker setup with containers for WordPress, a database, and Nginx, connected using Docker Compose. Nginx serves the WordPress site securely with HTTPS connection.'
    ]
];

export const leftProjectBoxes = [
    <ProjectBox title="This CV site" link={projectsInfo[0][0]} tech={projectsInfo[1][0]} summary={projectsInfo[2][0]} functionalities_title={projectsInfo[3][0]} description={projectsInfo[4][0]} />,
    <ProjectBox title="Minishell" link={projectsInfo[0][1]} tech={projectsInfo[1][1]} summary={projectsInfo[2][1]} functionalities_title={projectsInfo[3][1]} description={projectsInfo[4][1]} />,
    <ProjectBox title="ft_irc" link={projectsInfo[0][2]} tech={projectsInfo[1][2]} summary={projectsInfo[2][2]} functionalities_title={projectsInfo[3][2]} description={projectsInfo[4][2]} />
];

export const rightProjectBoxes = [
    <ProjectBox title="ft_transcendence" link={projectsInfo[0][3]} tech={projectsInfo[1][3]} summary={projectsInfo[2][3]} functionalities_title={projectsInfo[3][3]} description={projectsInfo[4][3]} />,
    <ProjectBox title="Cub3D" link={projectsInfo[0][4]} tech={projectsInfo[1][4]} summary={projectsInfo[2][4]} functionalities_title={projectsInfo[3][4]} description={projectsInfo[4][4]} />,
    <ProjectBox title="Inception" link={projectsInfo[0][5]} tech={projectsInfo[1][5]} summary={projectsInfo[2][5]} functionalities_title={projectsInfo[3][5]} description={projectsInfo[4][5]} />
];