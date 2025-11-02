// داده‌های اشعار
const poemsData = [
    {
        id: 1,
        title: "آمدی جانم به قربانت",
        category: "love",
        content: `آمدی جانم به قربانت ولی حالا چرا؟
بی‌وفا حالا که من افتاده‌ام از پا چرا؟
نوشدارویی و بعد از مرگ سهراب آمدی
سنگدل این زودتر می‌خواستی حالا چرا؟

نازنینا ما به ناز تو جوانی داده‌ایم
دیگر اکنون با جوانان ناز کن با ما چرا؟
آسمان چون جمع مشتاقان پریشان می‌کند
شاید این باران برای اشک ما باشد چرا؟

شهرآشوبا چرا در شهرآشوبی همه را
عاقلان را دیوانه و دیوانگان را هشیار
ای نسیم سحر آرامگه یار کجاست
منزل آن مه که ما را سر به راهش باشد چرا؟`
    },
    {
        id: 2,
        title: "علی ای همای رحمت",
        category: "religious",
        content: `علی ای همای رحمت تو چه آیتی خدا را
که به ماسوا فکندی همه سایه هما را
دل اگر خداشناسی همه در رخ علی بین
به علی شناختم من به خدا قسم خدا را

به خدا که در دو عالم اثر از فنا نماند
چو علی گرفته باشد سر چشمه بقا را
مگر ای سحاب رحمت تو بباری ارنه دوزخ
به شرار قهر سوزد همه جان ماسوا را

برو ای گدای مسکین در خانه علی زن
که نگین پادشاهی دهد از کرم گدا را
به حرمت همان کسی که جانشها به کف داد
صدا از درونم آمد که برآور دعا را`
    },
    {
        id: 3,
        title: "هذیان دل",
        category: "social",
        content: `ای شکسته دل من، وی اسیر روزگار
وی اسیر بند هجران، وی اسیر انتظار
دل من ز هجر تو، چون کبوتر قفسی
پر می‌زند به دیوار، سر می‌زند به دیوار

چه کنم که دست قضا، بسته‌ست پای امید
که نبرد از در تو، هیچ صاحب دل قرار
ای دریغ و افسوس از این روزگار نامراد
کز برای دیدنت، نیست هیچ روزی یار`
    },
    {
        id: 4,
        title: "یاد ایام",
        category: "love",
        content: `یاد ایام دلکش دانشکده، ای یار
یاد آن روز که بودم من و تو هردو یار
یاد آن روز که در بزم تو بودم شمع
تو چو پروانه به گردم زدی صد پرواز

یاد آن روز که از شوق تو می‌سوختم
یاد آن شب که ز هجران تو می‌نالیدم
یاد آن روز که با هم قدم از کلاس
می‌آمدیم و ز شوق تو پریشان بودم`
    }
];

// داده‌های گالری
const galleryData = [
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Shahriar_2.jpg/440px-Shahriar_2.jpg",
        caption: "شهریار در جوانی"
    },
    {
        src: "https://cdn.isna.ir/d/2020/09/26/3/59801216.jpg",
        caption: "شهریار در حال مطالعه"
    },
    {
        src: "https://www.yjc.news/fa/news/6992586/%D8%A8%D8%B1%DA%AF%D8%B2%DB%8C%D8%AF%DA%AF%D8%A7%D9%86-%D9%85%D9%82%D8%A8%D8%B1%D9%87-%D8%A7%D9%84%D8%B4%D8%B9%D8%B1%D8%A7%DB%8C-%D8%AA%D8%A8%D8%B1%DB%8C%D8%B2",
        caption: "مقبره الشعرای تبریز"
    },
    {
        src: "https://www.irna.ir/news/83302866/%D8%A8%D8%B1%DA%AF%D8%B2%DB%8C%D8%AF%DA%AF%D8%A7%D9%86-%D8%AE%D8%A7%D9%86%D9%87-%D9%85%D8%B2%D8%AF%D8%B1%D8%A7%DA%A9-%D8%B4%D9%87%D8%B1%DB%8C%D8%A7%D8%B1",
        caption: "خانه شهریار در تبریز"
    }
];

// داده‌های مقالات
const articlesData = [
    {
        id: 1,
        title: "تحلیل شعر عاشقانه شهریار",
        excerpt: "بررسی عمیق اشعار عاشقانه شهریار و تأثیرپذیری از مکتب ادبی سبک هندی...",
        author: "دکتر محمدرضا شفیعی کدکنی",
        date: "۱۴۰۲/۰۶/۱۵",
        image: "https://via.placeholder.com/400x250/8B5A2B/ffffff?text=تحلیل+شعر"
    },
    {
        id: 2,
        title: "سبک شعری شهریار در ادبیات معاصر",
        excerpt: "بررسی ویژگی‌های سبکی شعر شهریار و تأثیر آن بر شاعران نسل بعد...",
        author: "دکتر سیروس شمیسا",
        date: "۱۴۰۲/۰۵/۲۰",
        image: "https://via.placeholder.com/400x250/654321/ffffff?text=سبک+شعری"
    },
    {
        id: 3,
        title: "تأثیر فرهنگی اشعار شهریار بر جامعه",
        excerpt: "بررسی نقش اشعار شهریار در شکل‌دهی به فرهنگ عمومی و ادبیات روزمره...",
        author: "دکتر محمود عبادیان",
        date: "۱۴۰۲/۰۴/۱۰",
        image: "https://via.placeholder.com/400x250/A67B5B/ffffff?text=تأثیر+فرهنگی"
    }
];

// مدیریت Preloader
window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    setTimeout(() => {
        preloader.classList.add('fade-out');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }, 1500);
});

// مدیریت اسکرول ناوبری
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const scrollY = window.scrollY;
    
    if (scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    // هایلایت لینک فعال
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// مدیریت منوی همبرگر
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// بستن منو هنگام کلیک روی لینک‌ها
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// مدیریت تغییر تم
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', function() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        themeIcon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'light');
        showNotification('حالت روشن فعال شد');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark');
        showNotification('حالت تاریک فعال شد');
    }
});

// بارگذاری تم ذخیره شده
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
}

// فیلتر کردن اشعار
const categoryButtons = document.querySelectorAll('.category-btn');
const poemCards = document.querySelectorAll('.poem-card');

categoryButtons.forEach(button => {
    button.addEventListener('click', function() {
        // حذف کلاس active از همه دکمه‌ها
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        // اضافه کردن کلاس active به دکمه کلیک شده
        this.classList.add('active');
        
        const category = this.getAttribute('data-category');
        
        poemCards.forEach(card => {
            if (category === 'all' || card.getAttribute('data-category') === category) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 10);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    });
});

// سیستم علاقه‌مندی‌ها
function toggleFavorite(button) {
    const icon = button.querySelector('i');
    button.classList.toggle('active');
    
    if (button.classList.contains('active')) {
        icon.classList.replace('far', 'fas');
        showNotification('شعر به علاقه‌مندی‌ها اضافه شد');
    } else {
        icon.classList.replace('fas', 'far');
        showNotification('شعر از علاقه‌مندی‌ها حذف شد');
    }
}

// اشتراک‌گذاری شعر
function sharePoem(poemId) {
    const poem = poemsData.find(p => p.id === poemId);
    if (navigator.share) {
        navigator.share({
            title: poem.title,
            text: poem.content.substring(0, 100) + '...',
            url: window.location.href
        });
    } else {
        // Fallback for browsers that don't support Web Share API
        const textArea = document.createElement('textarea');
        textArea.value = `${poem.title}\n\n${poem.content}\n\n${window.location.href}`;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showNotification('متن شعر در کلیپ‌بورد کپی شد');
    }
}

// نمایش مدال شعر
function showPoemModal(poemId) {
    const poem = poemsData.find(p => p.id === poemId);
    const modal = document.getElementById('poemModal');
    const title = document.getElementById('modalPoemTitle');
    const content = document.getElementById('modalPoemContent');
    
    title.textContent = poem.title;
    content.innerHTML = poem.content.split('\n').map(line => 
        `<p>${line}</p>`
    ).join('');
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closePoemModal() {
    const modal = document.getElementById('poemModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// بستن مدال با کلیک خارج از آن
document.getElementById('poemModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closePoemModal();
    }
});

// مدیریت لایت‌باکس گالری
let currentImageIndex = 0;

function openLightbox(index) {
    currentImageIndex = index;
    const lightbox = document.getElementById('lightbox');
    const image = document.getElementById('lightboxImage');
    const caption = document.getElementById('lightboxCaption');
    
    image.src = galleryData[index].src;
    caption.textContent = galleryData[index].caption;
    
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function changeImage(direction) {
    currentImageIndex += direction;
    
    if (currentImageIndex >= galleryData.length) {
        currentImageIndex = 0;
    } else if (currentImageIndex < 0) {
        currentImageIndex = galleryData.length - 1;
    }
    
    openLightbox(currentImageIndex);
}

// بستن لایت‌باکس با کلیک خارج از آن
document.getElementById('lightbox').addEventListener('click', function(e) {
    if (e.target === this) {
        closeLightbox();
    }
});

// مدیریت کلیدهای کیبورد برای لایت‌باکس
document.addEventListener('keydown', function(e) {
    const lightbox = document.getElementById('lightbox');
    if (lightbox.classList.contains('active')) {
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowRight') {
            changeImage(-1);
        } else if (e.key === 'ArrowLeft') {
            changeImage(1);
        }
    }
});

// سیستم جستجو
const searchInput = document.getElementById('globalSearch');
if (searchInput) {
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase().trim();
        
        if (searchTerm.length > 2) {
            const results = poemsData.filter(poem => 
                poem.title.toLowerCase().includes(searchTerm) ||
                poem.content.toLowerCase().includes(searchTerm)
            );
            
            showSearchResults(results, searchTerm);
        }
    });
}

function showSearchResults(results, searchTerm) {
    // این تابع می‌تواند برای نمایش نتایج جستجو توسعه یابد
    console.log('نتایج جستجو:', results);
    
    if (results.length > 0) {
        showNotification(`${results.length} نتیجه برای "${searchTerm}" یافت شد`);
    } else if (searchTerm.length > 2) {
        showNotification('هیچ نتیجه‌ای یافت نشد', 'error');
    }
}

// مدیریت فرم‌ها
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // شبیه‌سازی ارسال فرم
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            showNotification('پیام شما با موفقیت ارسال شد!');
            this.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const emailInput = this.querySelector('input[type="email"]');
        const email = emailInput.value;
        
        if (validateEmail(email)) {
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalHtml = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                showNotification('ایمیل شما با موفقیت ثبت شد! از این پس از جدیدترین مطالب مطلع خواهید شد.');
                emailInput.value = '';
                submitBtn.innerHTML = originalHtml;
                submitBtn.disabled = false;
            }, 2000);
        } else {
            showNotification('لطفاً یک ایمیل معتبر وارد کنید.', 'error');
        }
    });
}

// اعتبارسنجی ایمیل
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// سیستم نوتیفیکیشن
function showNotification(message, type = 'success') {
    // حذف نوتیفیکیشن قبلی اگر وجود دارد
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification ${type === 'error' ? 'error' : ''}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // نمایش نوتیفیکیشن
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // پنهان کردن نوتیفیکیشن
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

// اسکرول نرم به بخش‌ها
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// پخش شعر تصادفی (شبیه‌سازی)
function playRandomPoem() {
    const randomPoem = poemsData[Math.floor(Math.random() * poemsData.length)];
    showNotification(`در حال پخش: ${randomPoem.title}`);
    
    // اینجا می‌توانید پخش واقعی صوت را اضافه کنید
    // const audio = new Audio('path/to/audio.mp3');
    // audio.play();
}

// باز کردن مقاله
function openArticle(articleId) {
    const article = articlesData.find(a => a.id === articleId);
    showNotification(`مقاله "${article.title}" در حال بارگذاری...`);
    
    // اینجا می‌توانید به صفحه مقاله هدایت شوید
    // window.location.href = `article.html?id=${articleId}`;
}

// انیمیشن اسکرول برای عناصر
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// مشاهده عناصر برای انیمیشن
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.poem-card, .bio-card, .stat-card, .gallery-item, .article-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // انیمیشن برای آمار
    const statNumbers = document.querySelectorAll('.stat-number[data-count]');
    statNumbers.forEach(stat => {
        observer.observe(stat);
    });
});

// انیمیشن شماره‌های آمار
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number[data-count]');
    
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-count'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            stat.textContent = Math.floor(current) + (stat.textContent.includes('+') ? '+' : '');
        }, 16);
    });
}

// مشاهده بخش آمار برای انیمیشن
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStats();
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.stats-section');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// مدیریت کلیک روی لینک‌های فوتر
document.querySelectorAll('.footer-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// افکت‌های پیشرفته برای کارت‌ها
document.querySelectorAll('.poem-card, .bio-card, .article-card').forEach(card => {
    card.addEventListener('mousemove', function(e) {
        if (window.innerWidth > 768) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const angleY = (x - centerX) / 20;
            const angleX = (centerY - y) / 20;
            
            this.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateY(-10px)`;
        }
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(-10px)';
    });
});

// سیستم پیشرفت اسکرول
const progressBar = document.createElement('div');
progressBar.className = 'scroll-progress';
progressBar.style.cssText = `
    position: fixed;
    top: 0;
    right: 0;
    width: 0;
    height: 3px;
    background: var(--gradient);
    z-index: 1001;
    transition: width 0.1s ease;
`;
document.body.appendChild(progressBar);

window.addEventListener('scroll', function() {
    const winHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset;
    const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;
    
    progressBar.style.width = scrollPercent + '%';
});

// مدیریت کلیدهای کیبورد
document.addEventListener('keydown', function(e) {
    // کلید Esc برای بستن مدال‌ها
    if (e.key === 'Escape') {
        closePoemModal();
        closeLightbox();
        if (hamburger) hamburger.classList.remove('active');
        if (navMenu) navMenu.classList.remove('active');
    }
    
    // کلیدهای جهت‌دار برای پیمایش
    if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        window.scrollBy(0, -100);
    }
    
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        window.scrollBy(0, 100);
    }
});

// لاگ برای توسعه
console.log('🌹 وبسایت شهریار با موفقیت بارگذاری شد!');
console.log('📖 طراحی شده با عشق برای ادبیات فارسی');
console.log(`🎭 تعداد اشعار: ${poemsData.length}`);
console.log(`🖼️ تعداد تصاویر گالری: ${galleryData.length}`);
console.log(`📚 تعداد مقالات: ${articlesData.length}`);

// سرویس ورکر برای PWA (اختیاری)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(error) {
                console.log('ServiceWorker registration failed: ', error);
            });
    });
}

// مدیریت خطاهای عمومی
window.addEventListener('error', function(e) {
    console.error('خطا در اجرای اسکریپت:', e.error);
});

// بهینه‌سازی عملکرد
let ticking = false;

function updateOnScroll() {
    // کدهای وابسته به اسکرول
    ticking = false;
}

window.addEventListener('scroll', function() {
    if (!ticking) {
        requestAnimationFrame(updateOnScroll);
        ticking = true;
    }
});

// مدیریت ریسایز
window.addEventListener('resize', function() {
    // بهینه‌سازی‌های مربوط به تغییر سایز
});

// افکت تایپ برای عنوان (اختیاری)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// اجرای افکت تایپ پس از لود صفحه (فقط در دسکتاپ)
window.addEventListener('load', function() {
    const heroTitle = document.querySelector('.hero-title .title-line:first-child');
    if (heroTitle && window.innerWidth > 768) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 120);
    }
});