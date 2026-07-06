
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






    