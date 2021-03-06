import { readable } from 'svelte/store';

export const projects = readable([
    {
        name: "Simple piano",
        slug: "simple-piano",
        year: 2019,
        description: "A Svelte-based PWA that uses SoundFontPlayer for playing many kinds of instruments",
        url: "https://piano.goranalkovic.com/",
        githubUrl: "https://github.com/goranalkovic/SimplePiano",
        featured: true,
        technologies: "Svelte, HTML/CSS",
        type: "PWA",
        images: [
            {
                src: "img/projects/simplePiano/1.jpg",
                subHtml: "Main page"
            }
        ]
    },
    {
        name: "COVID-19 tracker",
        slug: "covid19-hr",
        year: 2020,
        description: "A Flutter app that presents COVID-19 case data in a nice way",
        url: "https://covid19.goranalkovic.com/",
        githubUrl: "https://github.com/goranalkovic/covid19hr-flutter",
        featured: true,
        technologies: "Flutter",
        type: "Hybrid application",
        images: [
            {
                src: "img/projects/covid19hr/1.jpg",
                subHtml: "Main page"
            }
        ]
    }
]);

export const work = readable([
    {
        when: "January 2021 –",
        who: "Infinum",
        what: "WordPress engineer",
        summary: "Designing custom WordPress themes, blocks and components; working on open-source",
        featured: true,
        slug: "infinum",
        type: "Development",
        technologies: "PHP, ReactJS, SCSS, Eightshift Boilerplate"
    },
    {
        when: "July – November 2020",
        who: "Arbona",
        what: "Digital design, ad campaing design",
        summary: "I designed online advertising materials, made dynamic Google Display ads and put together great-looking newsletters and Viber marketing campaigns",
        featured: false,
        slug: "arbona",
        type: "Digital marketing",
        technologies: "Adobe Xd/Ps/Ai, BannerSnack, MailChimp",
        images: [
            {
                src: "img/projects/arbona/instagram_posts.jpg",
                subHtml: "Instagram posts"
            },
            {
                src: "img/projects/arbona/facebook_posts.jpg",
                subHtml: "Facebook posts"
            },
            {
                src: "img/projects/arbona/random_posts.jpg",
                subHtml: "Designs for blogs, newsletters, etc."
            },
            {
                src: "img/projects/arbona/google_ads.jpg",
                subHtml: "Google Display ads"
            }
        ]
    },
    {
        when: "March - April 2020",
        who: "SocialByte",
        what: "Branding and a WordPress website",
        summary: "I designed a logo system for the agency, then set up a WordPress website, customized it, added custom content and did some basic SEO",
        featured: false,
        url: "https://socialbyte.agency/",
        slug: "socialbyte",
        type: "Website, branding",
        technologies: "Adobe Xd/Ai, WordPress",
        images: [
            {
                src: "img/projects/socialbyte/1.jpg",
                subHtml: "Logo"
            },
            {
                src: "img/projects/socialbyte/2.jpg",
                subHtml: "Favicon - logo variation"
            },
            {
                src: "img/projects/socialbyte/3.png",
                subHtml: "Phone design 1"
            },
            {
                src: "img/projects/socialbyte/4.png",
                subHtml: "Phone design 2"
            },
            {
                src: "img/projects/socialbyte/5.jpg",
                subHtml: "Book cover design"
            },
            {
                src: "img/projects/socialbyte/6.jpg",
                subHtml: "Whitepaper <a href='https://socialbyte.agency/whitepaper' target='_blank'><i class='bx bx-link-external' ></i></a>"
            },
            {
                src: "img/projects/socialbyte/7.jpg",
                subHtml: "Homepage <a href='https://socialbyte.agency' target='_blank'><i class='bx bx-link-external' ></i></a>"
            },
            {
                src: "img/projects/socialbyte/8.jpg",
                subHtml: "<em>About</em> page <a href='https://socialbyte.agency/about-us' target='_blank'><i class='bx bx-link-external' ></i></a>"
            }
        ]
    },
    {
        when: "June - August 2019",
        who: "Ekobit",
        what: "Summer internship — C#/SQL",
        summary: "I was a part of a team that worked on a company's project, used C# and SQL, learned a lot about optimizing SQL queries",
        featured: true,
        slug: "ekobit",
        type: "Internship",
        technologies: "C#, SQL"
    },
    {
        when: "April 2019",
        who: "Faculty of organization and informatics",
        what: "T-shirt, banner and promotional materials design for STEM Games 2019",
        summary: "I used Adobe Illustrator to create t-shirt and banner designs and did some promotional materials in Adobe Xd",
        url: null,
        slug: "foi-stemgames-2019",
        type: "Design",
        technologies: "Adobe Xd/Ai",
        images: [
            {
                src: "img/projects/foiSG2019/1.jpg",
                subHtml: "T-shirts"
            },
            {
                src: "img/projects/foiSG2019/2.jpg",
                subHtml: "T-shirts (second design)"
            },
            {
                src: "img/projects/foiSG2019/3.jpg",
                subHtml: "Banner"
            }
        ]
    },
    {
        when: "December 2018 - May 2019",
        who: "STEM Games 2019",
        what: "Lead designer",
        summary: "I lead the design team and designed promotional materials: the event map, banners, accreditations, etc.",
        featured: true,
        url: "https://stemgames.hr",
        slug: "stemgames-2019",
        type: "Design, teamwork",
        technologies: "Adobe Xd/Ps/Ai",
        images: [
            {
                src: "img/projects/stemGames2019/1.jpg",
                subHtml: "Facebook event cover"
            },
            {
                src: "img/projects/stemGames2019/2.jpg",
                subHtml: "Event map"
            },
            {
                src: "img/projects/stemGames2019/3.jpg",
                subHtml: "Signpost"
            },
            {
                src: "img/projects/stemGames2019/4.jpg",
                subHtml: "Signpost"
            },
            {
                src: "img/projects/stemGames2019/11.jpg",
                subHtml: "Signpost<br><small>Photo by STEM Games</small>"
            },
            // {
            //     src: "img/projects/stemGames2019/5.png",
            //     subHtml: "Sports award (glass engraving)"
            // },
            {
                src: "img/projects/stemGames2019/8.jpg",
                subHtml: "Sports award (glass engraving)<br><small>Photo by STEM Games</small>"
            },
            {
                src: "img/projects/stemGames2019/9.jpg",
                subHtml: "Banner<br><small>Photo by STEM Games</small>"
            },
            {
                src: "img/projects/stemGames2019/10.jpg",
                subHtml: "Banner<br><small>Photo by STEM Games</small>"
            },
            {
                src: "img/projects/stemGames2019/12.jpg",
                subHtml: "Accreditation<br><small>Photo by STEM Games</small>"
            },
            {
                src: "img/projects/stemGames2019/14.jpg",
                subHtml: "Billboard"
            },
            {
                src: "img/projects/stemGames2019/15.jpg",
                subHtml: "Poster"
            },
            {
                src: "img/projects/stemGames2019/16.jpg",
                subHtml: "Certificate"
            },
            {
                src: "img/projects/stemGames2019/17.jpg",
                subHtml: "Price list"
            },
            {
                src: "img/projects/stemGames2019/18.jpg",
                subHtml: "Poster"
            }
        ]
    },
    {
        when: "December 2018",
        who: "Aronija Juraj",
        what: "Branding and bottle label design",
        summary: "I designed a logo, a simple brand system and bottle labels for <i>Aronija Juraj</i>",
        url: null,
        type: "Design",
        technologies: "Adobe Illustrator",
        slug: "aronija-juraj",
        images: [
            {
                src: "img/projects/aronijaJuraj/1.jpg",
                subHtml: "Logo"
            },
            {
                src: "img/projects/aronijaJuraj/2.jpg",
                subHtml: "Bottle label - front"
            },
            {
                src: "img/projects/aronijaJuraj/3.jpg",
                subHtml: "Bottle label - back"
            }
        ]
    },
    {
        when: "December 2018",
        who: "Mladi pomažu - student humanitarian action",
        what: "Branding and promotional materials",
        summary: "I used Adobe Illustrator to create a logo and promotional materials for the event",
        url: null,
        slug: "mladi-pomazu",
        type: "Design",
        technologies: "Adobe Ps/Ai",
        images: [
            {
                src: "img/projects/mladiPomazu/5.jpg",
                subHtml: "Logo"
            },
            {
                src: "img/projects/mladiPomazu/3.jpg",
                subHtml: "Main event poster"
            },
            {
                src: "img/projects/mladiPomazu/4.jpg",
                subHtml: "Facebook event covers"
            },
            {
                src: "img/projects/mladiPomazu/2.jpg",
                subHtml: "<i>Thank you</i> note"
            },
            {
                src: "img/projects/mladiPomazu/1.jpg",
                subHtml: "Promo poster"
            }
        ]
    },
    {
        when: "October 2018",
        who: "Brucošijada grada Varaždina 2018.",
        what: "Branding, promotional materials and accreditation design",
        summary: "I used Adobe Photoshop and Illustrator to create a logo, then designed all the promotional materials and designed accrediations",
        url: null,
        slug: "brucosijada-2018",
        type: "Design",
        technologies: "Adobe Ps/Ai",
        images: [
            {
                src: "img/projects/brucosijada2018/5.jpg",
                subHtml: "Event poster"
            },
            {
                src: "img/projects/brucosijada2018/4.jpg",
                subHtml: "Facebook event cover"
            },
            {
                src: "img/projects/brucosijada2018/6.jpg",
                subHtml: "Ticket design"
            },
            {
                src: "img/projects/brucosijada2018/1.jpg",
                subHtml: "Accreditation design"
            },
            {
                src: "img/projects/brucosijada2018/2.jpg",
                subHtml: "Accreditation design"
            },
            {
                src: "img/projects/brucosijada2018/3.jpg",
                subHtml: "Accreditation design"
            }
        ]
    },
    {
        when: "April 2018",
        who: "Faculty of organization and informatics",
        what: "T-shirt, banner and promotional materials design for STEM Games 2018",
        summary: "I used Adobe Illustrator to create t-shirt, banner designs and promotional materials",
        url: null,
        slug: "foi-stemgames-2018",
        type: "Design",
        technologies: "Adobe Illustrator",
        images: [
            {
                src: "img/projects/foiSG2018/1.jpg",
                subHtml: "T-shirts"
            },
            {
                src: "img/projects/foiSG2018/2.jpg",
                subHtml: "T-shirts (for the <i>Knowledge competition</i> team)"
            },
            {
                src: "img/projects/foiSG2018/3.jpg",
                subHtml: "Banner"
            }
        ]
    },
    {
        when: "March 2018 - September 2019",
        who: "Student council FOI",
        what: "Member",
        summary: "I was a part of the Faculty of organization and informatics' Student council, worked on various projects and worked in a team",
        url: null,
        type: "Social, design",
        technologies: "Adobe Xd/Ps/Ai",
        slug: "foi-student-council",
        images: [
            {
                src: "img/projects/szfoi/5.jpg",
                subHtml: "Promotional poster"
            },
            {
                src: "img/projects/szfoi/3.jpg",
                subHtml: "Promotional flyer"
            },
            {
                src: "img/projects/szfoi/2.jpg",
                subHtml: "Facebook event covers"
            },
            {
                src: "img/projects/szfoi/4.jpg",
                subHtml: "Main event poster for <i>Freshman week 2018</i>"
            },
            {
                src: "img/projects/szfoi/1.jpg",
                subHtml: "Poster for the <i>Humanitary week 2018</i>"
            }
        ]
    },
    {
        when: "August - September 2018",
        who: "Dose of sharks",
        what: "Branding and a WordPress website",
        summary: "I made a logo and a basic design system, then set up and designed a website that also used WooCommerce",
        url: null,
        type: "Website, branding",
        technologies: "Adobe Illustrator, WordPress",
        slug: "dose-of-sharks",
        images: [
            {
                src: "img/projects/doseOfSharks/2.jpg",
                subHtml: "Logo"
            },
            {
                src: "img/projects/doseOfSharks/1.jpg",
                subHtml: "Website homepage"
            },
            {
                src: "img/projects/doseOfSharks/3.jpg",
                subHtml: "Website shop page"
            }
        ]
    },
    {
        when: "April - July 2017",
        who: "Kaufland Varaždin",
        what: "Student job - grocery store",
        summary: "I worked in the store warehouse, distributed items to their appropriate locations in the store",
        type: "Work",
        technologies: "Time management, task optimization",
        slug: "kaufland-vz"
    },
    {
        when: "March 2017 - November 2018",
        who: "Freelancing",
        what: "UpWork",
        summary: "I did graphic design work for a client using Adobe InDesign and Adobe Illustrator",
        type: "Freelance",
        technologies: "Adobe Id/Ai",
        slug: "upwork"
    },
    {
        when: "July 2017 - July 2019",
        who: "HipOcean",
        what: "Branding, WordPress website and t-shirt design, website maintenance",
        summary: "I made a logo, a basic design system and couple of t-shirt designs in Adobe Illustrator, then set up a WordPress website with WooCommerce. I maintained the website until July 2019.",
        url: null,
        slug: "hip-ocean",
        type: "Branding, website",
        technologies: "Adobe Ps/Ai, WordPress",
        images: [
            {
                src: "img/projects/hipOcean/2.jpg",
                subHtml: "Logo"
            },
            {
                src: "img/projects/hipOcean/4.jpg",
                subHtml: "Website homepage"
            },
            {
                src: "img/projects/hipOcean/3.jpg",
                subHtml: "Website homepage"
            },
            {
                src: "img/projects/hipOcean/5.jpg",
                subHtml: "Website shop page"
            },
            {
                src: "img/projects/hipOcean/1.jpg",
                subHtml: "Sub-brand logo"
            }
        ]
    },
    {
        when: "2016 – 2017",
        who: "FOI Career week",
        what: "Part of the Organization team",
        summary: "I worked in the Organization team, supporting all the event activities",
        type: "Teamwork",
        technologies: "Teamwork",
        slug: "foi-career-week"
    },
    {
        when: "2016 –",
        who: "Temple Bar Stubičke Toplice",
        what: "Promotional materials design",
        summary: "I used Adobe Photoshop, Adobe Illustrator and Adobe Xd to design various promotional materials for Temple Bar",
        type: "Design",
        technologies: "Adobe Xd/Ps/Ai",
        slug: "temple-bar"
    },
    {
        when: "2016 – 2020",
        who: "St@k - FOI student magazine",
        what: "Magazine and promotional materials design, lead designer",
        summary: "Working in a team I improved my coworking skills. Magazine design was done in Adobe InDesign, together with Adobe Photoshop and Adobe Illustrator for supporting materials. Adobe Xd was used for some promotional materials.",
        featured: false,
        url: "https://issuu.com/foi.stak",
        slug: "stak",
        type: "Design, teamwork",
        technologies: "Adobe Ps/Ai/Xd",
        images: [
            {
                src: "img/projects/stak/2.jpg",
                subHtml: "Magazine cover design - St@k no. 20"
            },
            {
                src: "img/projects/stak/1.jpg",
                subHtml: "Magazine cover designs"
            },
            {
                src: "img/projects/stak/3.jpg",
                subHtml: "Article design"
            },
            {
                src: "img/projects/stak/7.jpg",
                subHtml: "Article design"
            },
            {
                src: "img/projects/stak/5.jpg",
                subHtml: "Article design"
            },
            {
                src: "img/projects/stak/8.jpg",
                subHtml: "Article design"
            },
            {
                src: "img/projects/stak/9.jpg",
                subHtml: "Article design"
            },
            {
                src: "img/projects/stak/10.jpg",
                subHtml: "Article design"
            },
            {
                src: "img/projects/stak/11.jpg",
                subHtml: "Article design"
            },
            {
                src: "img/projects/stak/4.jpg",
                subHtml: "Page design"
            },
            {
                src: "img/projects/stak/6.jpg",
                subHtml: "Page design"
            }
        ]
    },
    {
        when: "2015",
        who: "Bruno Bašić",
        what: "Personal website",
        summary: "I used Worpdress to make a personal website for a friend",
        type: "Website",
        technologies: "WordPress",
        slug: "bruno-basic-web"
    },
    {
        when: "2011 - 2015",
        who: "Tehničar - student magazine of Technical school Slavonski Brod",
        what: "Magazine design",
        summary: "I used Adobe InDesign to lay out the magazine and Adobe Photoshop and Adobe Illustrator for supporting materials.",
        type: "Design",
        technologies: "Adobe Id/Ai",
        slug: "tehnicar"
    }
]);

export const skills = readable(
    [
        {
            name: "Web dev",
            description: [
                "I know my way around <b>HTML</b>, <b>CSS</b> and <b>JavaScript</b> (ES6). <a href='https://svelte.dev' target='_blank' rel='noreferrer'><b>Svelte</b></a> is my favorite JS framework, but I find <a href='https://blazor.net' target='_blank' rel='noreferrer'><b>Blazor</b></a> (C#) also interesting. Besides that, I know some <i>vanilla</i> <b>PHP</b> and <b>NodeJS</b>, but nothing too complex.",
                "<b>WordPress</b> is my favorite tool for making good websites that are easy to manage. I can set up the website, customize it to client's liking, manage plugins, do some basic SEO optimization."
            ],
            shortDescription: "HTML/CSS/JS, Svelte, WordPress, Blazor, basic PHP & NodeJS",
            shownInQuick: true
        },
        {
            name: "Design and creative",
            description: [
                "<b>Print, logo and UI/UX design</b> are things I <b>love</b> doing. I use the <b>Adobe suite</b> (Photoshop, Illustrator, InDesign, Xd) and <b>Figma</b>.",
                "I can also do some <b>basic video and audio editing</b> in Adobe Audition and Adobe After Effects."
            ],
            shortDescription: "Print, logo, UI/UX design (Ps, Ai, Id, Xd, Figma)",
            shownInQuick: true
        },
        {
            name: "Mobile and hybrid app dev",
            description: [
                "<b>Flutter</b> is my favorite cross-platform framework, I've done a couple of projects with it and I'm getting better every day. I also explored <b>Electron</b> for a bit and can make a basic app using it.",
                "I know basics of <b>native Android</b> (Kotlin) and <b>native iOS</b> (Swift) development that I learned at the faculty."
            ],
            shortDescription: "Flutter, Electron basics, native Android & iOS basics",
            shownInQuick: true
        },
        {
            name: "Dev — other",
            description: [
                "I've worked mostly with Microsoft technologies and I can develop <b>UWP</b>, <b>WPF</b> and <b>WinForms</b> apps using <b>C#</b> and <b>XAML</b>. I know some <b>C++</b> and <b>Python</b>.",
                "I'm comfortable with version control using <b>Git</b> and I've done some <b>basic CI/CD</b> setups.",
                "I worked in a couple of teams using <b>Agile and SCRUM</b> methodologies."
            ],
            shortDescription: "Microsoft C# - UWP, WPF, WinForms; Git basics, SQL, SCRUM, Agile",
            shownInQuick: true
        },
        {
            name: "Languages",
            description: [
                "I'm a native speaker of <b>Croatian</b> and pretty good with <b>English</b> (~level C1)."
            ],
            shortDescription: "Croatian, English",
            shownInQuick: true
        },
        {
            name: "Other",
            description: [
                "I'm pretty good with <b>LaTeX</b> and <b>Microsoft Office</b> and can do some <b>basic computer networking</b>."
            ],
            shortDescription: "LaTeX, MS Office, Computer networking basics",
            shownInQuick: false
        }
    ]
);

export const education = readable([
    {
        when: "2018 - 2020",
        what: "Databases and knowledge bases",
        title: "mag. inf.",
        description: "Faculty of organization and informatics Varaždin"
    },
    {
        when: "2015 - 2018",
        what: "Information systems",
        title: "univ. bacc. inf.",
        description: "Faculty of organization and informatics Varaždin"
    },
    {
        when: "2011-2015",
        what: "Computer technician",
        description: "Technical school Slavonski Brod"
    }
]);

export const certsAndAwards = readable([
    {
        when: "2019",
        title: "SmartUp 2019",
        description: "Certificate of participation"
    },
    {
        when: "2019",
        title: "STEM Games 2019",
        description: "Certificate of participation - design team lead"
    },
    {
        when: "2018",
        title: "Rector's award",
        description: "St@k - FOI student magazine"
    },
    {
        when: "2018",
        title: "Advanced Python workshop @ FOI",
        description: "Completed"
    },
    {
        when: "2018",
        title: "Game dev workshop @ FOI",
        description: "Completed"
    },
    {
        when: "2018",
        title: "STEM Games 2018",
        description: "Certificate of participation - Technology Arena competitor"
    },
    {
        when: "2017",
        title: "Code4Bjelovar <i>hackathon</i>",
        description: "Second place"
    },
    {
        when: "2016",
        title: "Microsoft IoT hackathon, Brežice, Slovenia",
        description: "Third place"
    },
    {
        when: "2016",
        title: "Microsoft Technology Associate",
        description: "Windows Operating System Fundamentals"
    }
]);