function start()
{
    const imgs = document.querySelectorAll(".column img");
    const bigPicture = document.querySelector(".bigPicture");
    const exit = document.querySelector(".exit");
    const body = document.querySelector("body");
    const next = document.querySelector(".next");
    const back = document.querySelector(".back");
    const bigPhoto = document.querySelector(".bigPhoto");

    //zmienna globalna
    let currentIndex;
    let windowWidth = window.innerWidth;

    setTimeout('start()',100);
    //pętla dzięki której funkcje są wykonywane dla każdego zdjęcia z osobna
    if(windowWidth<=600)
    {
        //alert('nothing');
        imgs.forEach((img, index) => {
            //funkcja dodająca możliwość podglądu po naciśnięciu na zdjęcie
            img.addEventListener("click",(e) => {
                bigPicture.classList.remove('bigPicture');
            });
        });
    }else{
        imgs.forEach((img, index) => {
            //funkcja dodająca możliwość podglądu po naciśnięciu na zdjęcie
            img.addEventListener("click",(e) => {
                previewPhoto();
                bigPhoto.src = e.target.src;
                closePreview();
                //do zmiennej globalnej przypisujemy index naciśniętego zdjęcia
                currentIndex = index;
            });
        });
    }

    next.addEventListener('click',() => {
        //jeśli index jest równy indexowi ostatniego obrazka
        if(currentIndex==27){
            //to zmień index na -1
            currentIndex = -1;
            //i dodaj do niego 1 co daje 0 czyli startujemy od pierwszego obrazka
            currentIndex++;
            //zmień źródło wyświetlanego obrazka na źródło obrazka odpowiadające danemu indexowi
            bigPhoto.src = imgs[currentIndex].src;
        } 
        //w przeciwnym razie tylko zmień index obrazka i podmień src
        else
        {
            currentIndex++;
            bigPhoto.src = imgs[currentIndex].src;
        } 
    });
    
    back.addEventListener('click',() => {
        if(currentIndex==0){
            currentIndex = 28;
            currentIndex--;
            bigPhoto.src = imgs[currentIndex].src;
        } else
        {
            currentIndex--;
            bigPhoto.src = imgs[currentIndex].src;
        } 
    });

    //funkcja uruchamiająca podgląd zdjęć
    function previewPhoto()
    {
        bigPicture.style.cssText = `
            display: flex; 
	        justify-content: center; 
	        align-items: center;
            z-index: 1;
            position: fixed;
        `;

        next.style.cssText = `
            display: flex;
            z-index: 1;
        `;

        back.style.cssText = `
            display: flex;
            z-index: 1;
        `;

        body.style.cssText = `
            margin: 0;
            padding: 0;
            overflow: hidden;
        `;
    }

    //funkcja zamykająca podgląd
    function closePreview()
    {
        exit.style.cssText = `
            display: flex;
            z-index: 1;
        `;

        exit.addEventListener('click',() => {
            
            body.style.cssText = ` overflow: visible; `;

            bigPicture.style.cssText = `
                display: none; 
                justify-content: center; 
                align-items: center;
                z-index: -1;
            `;

            exit.style.cssText = ` display: none; `;

            next.style.cssText = ` display: none; `;

            back.style.cssText = ` display: none; `;
        });
    }
}

window.onload = start;