document.addEventListener('DOMContentLoaded', () => {
    
    /* =========================================
       0. LANGUAGE SWITCHER
       ========================================= */
    const translations = {
        en: {
            // Navigation
            "nav-home": "Home",
            "nav-resume": "Resume",
            "nav-projects": "Projects",
            "nav-github": "GitHub",
            
            // Hero Section (Index)
            "hero-title": "Hello, I'm Hu Cheyu,<br>Master Student at<br>South China University of Technology",
            "contact-phone": "Phone: +86 151 7080 8704",
            "contact-email": "Email: hu1371381683@163.com",
            "btn-view-work": "View My Work",
            "btn-download-resume": '<i class="fa-solid fa-file-arrow-down" style="margin-right: 8px;"></i> Download Resume',
            
            // Resume Section
            "resume-exp": "Research Experience",
            "exp-1-role": "Manipulator Modeling & Control (Deep Learning & Koopman)",
            "exp-1-company": "Master's Thesis | IEEE RA-L Under Review",
            "exp-1-desc-1": "Constructed Deep Bilinear Koopman Network for finite-dimensional lifting of manipulator dynamics.",
            "exp-1-desc-2": "Designed MPC-KESO framework fusing Kalman Filter and ESO for noise/error estimation.",
            "exp-1-desc-3": "Validated on MuJoCo simulation and SO-ARM101 real robot.",
            "exp-2-role": "Mobile Robot Path Planning based on DRL",
            "exp-2-company": "Undergraduate Thesis",
            "exp-2-desc-1": "Built DDPG-LSTM network to enhance dynamic obstacle perception capabilities.",
            "exp-2-desc-2": "Designed state/action spaces and reward functions for unknown environment navigation.",
            "exp-2-desc-3": "Conducted 3D simulations in ROS + Gazebo environments.",
            "exp-3-role": "Diff-Drive Robot Path Planning & MPC Control",
            "exp-3-company": "Based on MuJoCo",
            "exp-3-desc-1": "Implemented A*, RRT, DWA planning algorithms and integrated with MPC for tracking.",
            
            "resume-skills": "Professional Skills",
            "skill-algo": "Programming & Algo",
            "skill-robotics": "Robotics & Sim",
            "skill-theory": "Theory & Application",
            "skill-tag-1": "Control Theory",
            "skill-tag-2": "Trajectory Planning",
            "skill-tag-3": "Dynamic Obstacle Avoidance",
            
            "resume-edu": "Education",
            "edu-1-degree": "M.E. in Control Science and Engineering",
            "edu-1-school": "South China University of Technology (985)",
            "edu-2-degree": "B.E. in Robotics Engineering",
            "edu-2-school": "University of Science and Technology Beijing (211)",

            "resume-honors": "Honors & Awards",
            "honor-1": "Math Competitions (National/Beijing/School): 1st Prize",
            "honor-2": "Physics & Smart Car Competitions: 2nd Prize",
            "honor-3": "People's Special & 2nd Scholarship / Outstanding Student (2x)",
            "honor-4": "CET-6: 512 / CET-4: 576",

            // Projects
            "proj-1-title": "Manipulator Modeling & Control",
            "proj-1-desc": "Deep Bilinear Koopman Network and MPC-KESO for high-precision tracking and noise robustness.",
            "proj-2-title": "DRL Mobile Robot Navigation",
            "proj-2-desc": "Autonomous path planning in unknown environments using DDPG-LSTM and ROS Navigation.",
            "proj-3-title": "MuJoCo Diff-Drive MPC",
            "proj-3-desc": "A closed-loop control system integrating A* path planning and Model Predictive Control (MPC) tracking.",

            // GitHub
            "github-activities": "GitHub Activities",
            "github-subtitle": "Open Source Contributions & Statistics",
            "gh-view-profile": "View Profile <i class='fa-solid fa-arrow-up-right-from-square'></i>",
            
            // General
            "content-soon": "Content coming soon...",
            
            // Footer
            "footer-text": "&copy; 2026 Hu Cheyu. Built with Vanilla Code."
        },
        zh: {
            // Navigation
            "nav-home": "首页",
            "nav-resume": "简历",
            "nav-projects": "项目",
            "nav-github": "GitHub",

            // Hero Section (Index)
            "hero-title": "你好，我叫胡澈宇，<br>华南理工大学硕士在读",
            "contact-phone": "电话: +86 151 7080 8704",
            "contact-email": "邮箱: hu1371381683@163.com",
            "btn-view-work": "查看我的作品",
            "btn-download-resume": '<i class="fa-solid fa-file-arrow-down" style="margin-right: 8px;"></i> 下载简历',

            // Resume Section
            "resume-exp": "科研与项目经历",
            "exp-1-role": "基于深度学习与Koopman算子的机械臂建模与控制",
            "exp-1-company": "硕士课题 | IEEE RA-L 在投",
            "exp-1-desc-1": "构建深度双线性 Koopman 网络，实现机械臂动力学的有限维升维表示。",
            "exp-1-desc-2": "提出 MPC-KESO 框架：融合卡尔曼滤波与扩张状态观测器进行噪声与模型误差估计。",
            "exp-1-desc-3": "在 MuJoCo 仿真及 SO-ARM101 实物机械臂上完成验证。",
            "exp-2-role": "基于深度强化学习的移动机器人路径规划研究",
            "exp-2-company": "本科毕业设计",
            "exp-2-desc-1": "构建 DDPG-LSTM 网络提升对动态障碍物的感知与避障能力。",
            "exp-2-desc-2": "设计状态空间、动作空间及奖励函数，实现未知环境下的自主导航。",
            "exp-2-desc-3": "基于 ROS + Gazebo 搭建 3D 仿真环境进行算法验证。",
            "exp-3-role": "差分驱动小车路径规划与 MPC 控制系统设计",
            "exp-3-company": "基于 MuJoCo 开发",
            "exp-3-desc-1": "实现 A*、RRT、DWA 路径规划算法，并结合 MPC 进行轨迹跟踪控制。",
            
            "resume-skills": "专业技能",
            "skill-tag-1": "控制理论",
            "skill-tag-2": "轨迹规划",
            "skill-tag-3": "动态避障",
            "skill-algo": "编程与算法",
            "skill-robotics": "机器人开发与仿真",
            "skill-theory": "理论与工程应用",
            
            "resume-edu": "教育背景",
            "edu-1-degree": "控制科学与工程 工学硕士",
            "edu-1-school": "华南理工大学 (985)",
            "edu-2-degree": "机器人工程 工学学士",
            "edu-2-school": "北京科技大学 (211)",

            "resume-honors": "个人荣誉",
            "honor-1": "数学竞赛 (国家级/北京市/校级): 一等奖",
            "honor-2": "物理与智能车竞赛: 二等奖",
            "honor-3": "人民特等/二等奖学金 / 优秀三好学生 (2次)",
            "honor-4": "CET-6: 512 / CET-4: 576",

            // Projects
            "proj-1-title": "机械臂 Koopman 建模控制",
            "proj-1-desc": "结合深度双线性 Koopman 网络与 MPC-KESO 的高精度轨迹跟踪与鲁棒控制系统。",
            "proj-2-title": "移动机器人 DRL 导航",
            "proj-2-desc": "基于 DDPG-LSTM 与 ROS 的未知环境自主路径规划与动态避障算法。",
            "proj-3-title": "MuJoCo 差分小车 MPC",
            "proj-3-desc": "在 MuJoCo 中构建的 A* 路径规划与 MPC 轨迹跟踪闭环控制系统。",

            // GitHub
            "github-activities": "GitHub 动态",
            "github-subtitle": "开源贡献与统计",
            "gh-view-profile": "查看资料 <i class='fa-solid fa-arrow-up-right-from-square'></i>",

            // General
            "content-soon": "内容即将推出...",

            // Footer
            "footer-text": "&copy; 2026 胡澈宇。基于原生代码构建。"
        }
    };

    function setLanguage(lang) {
        // Save preference
        localStorage.setItem('language', lang);
        
        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                // If the translation contains HTML tags, use innerHTML, otherwise textContent
                // For safety with user input, textContent is better, but here we control the strings.
                // Checking if string contains < to decide.
                if (translations[lang][key].includes('<')) {
                    element.innerHTML = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });

        // Update button text if needed, or visual state
        const langBtn = document.getElementById('lang-toggle');
        if (langBtn) {
            langBtn.textContent = lang === 'en' ? '中' : 'En';
        }
    }

    // Initialize Language
    const savedLang = localStorage.getItem('language') || 'en';
    setLanguage(savedLang);

    // Add Language Toggle Button Listener
    // Note: The button needs to be added to the HTML
    const langToggleBtn = document.getElementById('lang-toggle');
    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const currentLang = localStorage.getItem('language') || 'en';
            const newLang = currentLang === 'en' ? 'zh' : 'en';
            setLanguage(newLang);
        });
    }

    /* =========================================
       1. MOBILE MENU TOGGLE
       ========================================= */
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const bars = document.querySelectorAll('.bar');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Hamburger animation
            menuToggle.classList.toggle('open');
            if (navLinks.classList.contains('active')) {
                bars[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                bars[1].style.opacity = '0';
                bars[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        });
    }

    // Close menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        });
    });

    /* =========================================
       2. GSAP ANIMATIONS
       ========================================= */
    // Helper to register ScrollTrigger if we decide to use it later
    // gsap.registerPlugin(ScrollTrigger); 

    // Hero Section Animations
    const heroTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });

    if (document.querySelector('.hero')) {
        heroTimeline
            .to('.hero-tagline', { opacity: 1, y: 0, duration: 0.8, delay: 0.2 })
            .to('.hero-title', { opacity: 1, y: 0, duration: 1, stagger: 0.2 }, "-=0.6")
            .to('.hero-subtitle', { opacity: 1, y: 0, duration: 1 }, "-=0.8")
            .to('.hero-buttons', { opacity: 1, y: 0, duration: 0.8 }, "-=0.6");
    }

    /* =========================================
       3. NAVIGATION ACTIVE STATE
       ========================================= */
    const currentPath = window.location.pathname;
    const navItems = document.querySelectorAll('.nav-link');
    
    navItems.forEach(item => {
        if (item.getAttribute('href') === currentPath.split('/').pop() || 
           (currentPath === '/' && item.getAttribute('href') === 'index.html')) {
            item.classList.add('active');
        }
    });

    /* =========================================
       4. GLOBAL UI EFFECTS
       ========================================= */
    
    // Optional: Add a subtle glow effect to cards on mouse move
    const cards = document.querySelectorAll('.skill-card, .project-card, .repo-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    /* =========================================
       5. GITHUB API INTEGRATION
       ========================================= */
    const repoContainer = document.getElementById('repo-container');
    const profileContainer = document.getElementById('github-profile');
    
    if (repoContainer) {
        const username = 'Hucheyu1';
        
        // Language Colors
        const langColors = {
            'C++': '#f34b7d',
            'Python': '#3572A5',
            'JavaScript': '#f1e05a',
            'HTML': '#e34c26',
            'CSS': '#563d7c',
            'TypeScript': '#2b7489',
            'Java': '#b07219',
            'Shell': '#89e051',
            'Matlab': '#e16737'
        };

        // Fetch User Profile
        fetch(`https://api.github.com/users/${username}`)
            .then(response => response.json())
            .then(data => {
                const loader = document.getElementById('repo-loader');
                if (loader) loader.style.display = 'none';

                if (profileContainer) {
                    profileContainer.style.display = 'block';
                    document.getElementById('gh-avatar').src = data.avatar_url;
                    document.getElementById('gh-name').textContent = data.name || data.login;
                    document.getElementById('gh-bio').textContent = data.bio || 'No bio available';
                    document.getElementById('gh-followers').textContent = data.followers;
                    document.getElementById('gh-public-repos').textContent = data.public_repos;
                }
            })
            .catch(err => console.log(err));

        // Fetch Repositories
        fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`)
            .then(response => response.json())
            .then(repos => {
                if (!Array.isArray(repos)) return;
                
                repoContainer.innerHTML = ''; // Clear loader if any left
                
                repos.forEach(repo => {
                    const langColor = langColors[repo.language] || '#ccc';
                    const language = repo.language || 'Code';
                    
                    const card = document.createElement('div');
                    card.className = 'repo-card glass';
                    
                    card.innerHTML = `
                        <div class="repo-top">
                            <i class="fa-regular fa-folder-open repo-icon"></i>
                            <div class="repo-stats">
                                <span><i class="fa-regular fa-star"></i> ${repo.stargazers_count}</span>
                                <span><i class="fa-solid fa-code-branch"></i> ${repo.forks_count}</span>
                            </div>
                        </div>
                        <h3 class="repo-title">
                            <a href="${repo.html_url}" target="_blank" style="text-decoration:none; color:inherit;">
                                ${repo.name}
                            </a>
                        </h3>
                        <p class="repo-desc">${repo.description || 'No description available for this project.'}</p>
                        <div class="repo-meta">
                            <div class="repo-lang">
                                <span class="lang-color" style="background-color: ${langColor};"></span> ${language}
                            </div>
                            <span>Updated ${new Date(repo.updated_at).toLocaleDateString()}</span>
                        </div>
                    `;
                    
                    repoContainer.appendChild(card);
                });
            })
            .catch(error => {
                repoContainer.innerHTML = '<p style="color:red;">Failed to load repositories.</p>';
                console.error('Error fetching repos:', error);
            });
    }
});
