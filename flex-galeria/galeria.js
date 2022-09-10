function start()
{
    const imgs = document.querySelectorAll("img");
    const bigPicture = document.querySelector(".bigPicture");
    const button = document.querySelector("button");
    const body = document.querySelector("body");

    //pętla dzięki której funkcje są wykonywane dla każdego zdjęcia z osobna
    for(const img of imgs)
    {
        const value = img.getAttribute("data-id");

        //funkcja dodająca możliwość podglądu po naciśnięciu na zdjęcie
        img.addEventListener("click",function(){
                podglądZdjęć();
        })

        //funkcja uruchamiająca podgląd zdjęć
        function podglądZdjęć()
        {
            bigPicture.style.cssText = `
                display: flex; 
	            justify-content: center; 
	            align-items: center;
                z-index: 1;
                position: fixed;
            `;

            button.style.cssText = `
                display: flex;
                z-index: 1;
            `;

            body.style.cssText = `
                margin: 0;
                padding: 0;
                overflow: hidden;
            `;

            bigPicture.innerHTML = `<img src="img/${value}.jpg" style="cursor: auto; transform: scale(1,1); width: 60%; height: auto;"/>`;
        }
    }

    //przycisk zamykający podgląd
    button.addEventListener('click', function(){
        
        body.style.cssText = `
        overflow: visible;
        `;

        bigPicture.style.cssText = `
            display: none; 
            justify-content: center; 
            align-items: center;
            z-index: -1;
        `;

        button.style.cssText = `
                display: none;
            `;
    });
}

window.onload = start;