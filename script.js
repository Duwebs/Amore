
document.onkeydown = function(e) {
    if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 69)) {
        return false;
    }
    return true;
};



const dailyTips = [
    { age: "3 days old", text: "Hello Dad, we get to meet finally! This makes me happy." },
    { age: "4 days old", text: "I love the sound of your voice, keep talking to me!" },
    { age: "5 days old", text: "I'm starting to recognize your face, keep smiling at me!" },
    { age: "6 days old", text: "I'm getting better at sleeping at night, thanks for your patience!" }
];

function updateDailyTip() {
    // Aaj ki date ke hisaab se tip select karna
    const tipIndex = new Date().getDate() % dailyTips.length;
    const selectedTip = dailyTips[tipIndex];

    // HTML elements ko target karna
    const ageElement = document.getElementById('tip-age');
    const textElement = document.getElementById('tip-text');

    // Content update karna
    if (ageElement) ageElement.innerText = selectedTip.age;
    if (textElement) textElement.innerText = `"${selectedTip.text}"`;
}

function shareWhatsApp() {
    const textElement = document.getElementById('tip-text');
    const text = textElement ? textElement.innerText : "Check out today's baby tip!";
    
    // Apni App ya Website ka link yahan daal dein
    const appLink = "https://amore.app/download"; // Yahan apna real link daalna
    
    // Message ke saath branding add ki
    const fullMessage = `Hey! ❤️ Look what our baby said today:\n\n${text}\n\n-------------------\nGet more tips on the Amore App: ${appLink}`;
    
    const message = encodeURIComponent(fullMessage);
    
    // WhatsApp kholne ka code
    window.open(`https://wa.me/?text=${message}`, '_blank');
}






    function select(el) {
        // 1. Pehle sabhi cards se 'selected' class hatao
        document.querySelectorAll('.lang-card').forEach(i => i.classList.remove('selected'));
        
        // 2. Sirf clicked card par 'selected' class lagao
        el.classList.add('selected');

        // 3. Language ka naam card ke andar se nikalo (H2 tag se)
        const lang = el.querySelector('h2').innerText;

        // 4. LocalStorage mein save karo
        localStorage.setItem('userLanguage', lang);

        // 5. Button ko enable karo
        const btn = document.getElementById('contBtn');
        btn.disabled = false;
        btn.style.backgroundColor = "#FF4D6D";
    }

    function goNext() {
        // Animation effects
        document.getElementById('header').classList.add('header-out');
        document.querySelectorAll('.lang-card').forEach((card, index) => {
            setTimeout(() => { card.classList.add('slide-out'); }, index * 80);
        });

        // Redirect to role.html after animation
        setTimeout(() => {
            window.location.href = 'role.html'; 
        }, 600);
    }



    // 1. Browser ki memory se data nikalo
    // Agar user ne kuch nahi select kiya, toh default "English" lega
    const userLang = localStorage.getItem('userLanguage') || "English";

    // 2. Translations ka object (Jo tumne abhi banaya tha)
    const translations = {
        "English": { title: "What's your role in the family?", /* ...baaki data... */ },
        "हिन्दी": { title: "परिवार में आपकी भूमिका क्या है?", /* ...baaki data... */ }
    };

    // 3. Lang ke hisaab se content set karo
    const langData = translations[userLang];
    document.getElementById('title').innerText = langData.title;
    // ...baaki elements...


function goNext() {
    // 1. Agar tumne animation banayi hai toh wo chalegi
    document.getElementById('header').classList.add('header-out');
    document.querySelectorAll('.lang-card').forEach((card, index) => {
        setTimeout(() => { card.classList.add('slide-out'); }, index * 80);
    });

    // 2. Browser ko 'role.html' file load karne ka command (The Call)
    setTimeout(() => {
        window.location.href = 'role.html'; 
    }, 600);
}
