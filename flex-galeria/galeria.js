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
        bigPicture.classList.toggle('visible');
        next.classList.toggle('visible');
        back.classList.toggle('visible');
        body.classList.toggle('visible');
    }

    //funkcja zamykająca podgląd
    function closePreview()
    {
        exit.style.cssText = `
            display: flex;
            z-index: 1;
        `;

        exit.addEventListener('click',() => {
            
            body.classList.remove('visible');
            bigPicture.classList.remove('visible');
            exit.style.cssText = ` display: none; `;
            next.classList.remove('visible');
            back.classList.remove('visible');
        });
    }
}

window.onload = start;