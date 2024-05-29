const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } 
        else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const fonts = ['SanFranProNormal','coolvetica','ltSaeda'];
const colours = ['red','orange','yellow','green','blue','violet'];
const styles = ['normal','italic'];
const responsiveText = document.getElementById('responsiveText');

responsiveText.onmouseover = () => {
    let randomColourNum = Math.floor(Math.random() * 6);
    let randomFontNum = Math.floor(Math.random() * 3);
    let randomStyleNum = Math.floor(Math.random()*2);
    responsiveText.style.color = colours[randomColourNum];
    responsiveText.style.fontStyle = styles[randomStyleNum];
    responsiveText.style.fontFamily = fonts[randomFontNum];
}

responsiveText.onmouseout = () => {
    let randomColourNum = Math.floor(Math.random() * 6);
    let randomFontNum = Math.floor(Math.random() * 3);
    let randomStyleNum = Math.floor(Math.random()*2);
    responsiveText.style.color = colours[randomColourNum];
    responsiveText.style.fontStyle = styles[randomStyleNum];
    responsiveText.style.fontFamily = fonts[randomFontNum];
}