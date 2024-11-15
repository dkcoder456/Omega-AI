const btn = document.querySelector('.talk')
const content = document.querySelector('.content')


function speak(text){
    const text_speak = new SpeechSynthesisUtterance(text);

    text_speak.rate = 1;
    text_speak.volume = 20;
    text_speak.pitch = 1;
    window.speechSynthesis.speak(text_speak);
}

function wishMe(){
    var day = new Date();
    var hour = day.getHours();

    if(hour>=0 && hour<12){
        speak("Good Morning Sir...")
    }

    else if(hour>12 && hour<17){
        speak("Good Afternoon Sir...")
    }

    else{
        speak("Good Evenining Sir...")
    }

}

window.addEventListener('load', ()=>{
    speak("Initializing Omega..");
    speak("No System Issue");
    wishMe();
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition =  new SpeechRecognition();

recognition.onresult = (event)=>{
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());

}

btn.addEventListener('click', ()=>{
    content.textContent = "Listening...."
    recognition.start();
})

function takeCommand(message){
    if(message.includes('hey') || message.includes('hello')){
        speak("Hello Sir, How May I Help You?");
    }
    if(message.includes('Who is your creator?')){
        speak("My creator is the owner of brand vishcode ");
        speak("His name is Dark_Blitz");
        
    }
    else if(message.includes("open google")){
        window.open("https://google.com", "_blank");
        speak("Opening google sir...")
    }
    else if(message.includes("open youtube")){
        window.open("https://youtube.com", "_blank");
        speak("Opening Youtube sir...")
    }
    else if(message.includes("open map")){
        window.open("https://www.google.co.in/maps/", "_blank");
        speak("Opening map sir...")
    }
    else if(message.includes("open facebook")){
        speak("Option not available")
    }
    else if(message.includes("open games")){
        window.open("https://www.crazygames.com/", "_blank");
        speak("Opening games sir...")
    }
    else if(message.includes("open my channel")){
        window.open("https://www.youtube.com/@zesensei_draws", "_blank");
        speak("Opening your channel sir...")
    }
    
    else if(message.includes("open chess")){
        window.open("https://www.chess.com/play/online", "_blank");
        speak("Opening  sir...")

        }
    else if(message.includes("open wikipedia")){
        window.open("https://www.wikipedia.org/", "_blank");
        speak("Opening wikipedia  sir...")
    }
    
    else if(message.includes("about you")){
        speak("I am a AI assistant created by Dark_Blitz")
    }
    else if(message.includes("open spotify")){
        window.open("https://open.spotify.com/", "_blank");
        speak("Opening sir...")
    }
    else if(message.includes("open amazon")){
        window.open("https://www.amazon.in/", "_blank");
        speak("Opening amazon sir...")
    }
    else if(message.includes("open whatsapp")){
        window.open("https://web.whatsapp.com/", "_blank");
        speak("Opening whatsapp sir...")
    }
    else if(message.includes("open cricket")){
        window.open("https://doodlecricket.github.io/#/", "_blank");
        speak("Opening cricket sir...") 
    }
    
    
    else if(message.includes("motivate me ")){
        speak("The Greatest Soules are capable of commiting the greatest vices as well as greatest virtues")
    }
    else if(message.includes("open news")){
        window.open("https://news.google.com/", "_blank");
        speak("Opening news sir...")
    }
    else if(message.includes("tell jokes")){
        speak("What does a wall said to other? Meet me at the corner!  ha,ha,ha,ha,ha,ha,ha,ha,ha,ha,ha,ha")
    }
    else if(message.includes("what is the weather today")){
        window.open("https://www.accuweather.com/en/jp/tokyo/226396/weather-forecast/226396?city=tokyo", "_blank");
        speak("this is the todays weather of TOKYO  sir...")
    }
    
    else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "Showing result for your question from google " + message;
	    speak(finalText);
  
    }

    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "Showing results for your question" + message;
        speak(finalText);
    }

    else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speak(finalText);
    }

    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speak(finalText);
    }

    else if(message.includes('calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speak(finalText);
    }

    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on google";
        speak(finalText);
    }
}