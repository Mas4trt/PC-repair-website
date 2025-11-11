const modal = () => {
    const modalButton = document.querySelector(".modal__button");
    const modal = document.querySelector(".modal");

    const courseButton = document.querySelector(".course__button");

    const createCloseButton = () => {
        const button = document.createElement('button');

        button.type = 'button';
        button.className = 'close__button';

        Object.assign(button.style, {
            display: "flex",
            background: 'transparent',
            cursor: 'default',
            position: 'absolute',
            top: '5px', 
            right: '7px',
            padding: "0",
            transition: 'all 0.3s ease'
        });

        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', '32');
        svg.setAttribute('height', '32');
        svg.setAttribute('viewBox', '0 0 16 16');
        svg.style.background = 'none';
        svg.style.display = 'block';
        
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', 'M4.11 2.697L2.698 4.11 6.586 8l-3.89 3.89 1.415 1.413L8 9.414l3.89 3.89 1.413-1.415L9.414 8l3.89-3.89-1.415-1.413L8 6.586l-3.89-3.89z');
        path.setAttribute('fill', 'currentColor');
        
        svg.appendChild(path);
        button.appendChild(svg);

        const form = document.querySelector(".modal__inner");
        form.appendChild(button);

        form.style.position = 'relative';

        button.addEventListener('mouseenter', () => {
            button.style.background = 'red';
            button.style.color = 'white';
        });

        button.addEventListener('mouseleave', () => {
            button.style.background = 'transparent';
            button.style.color = 'black';
        });

        button.addEventListener('click', () => {
            modal.style.display = "";
        });
    }

    modalButton.addEventListener("click", () => {
        modal.style.display = "flex";
        if(!document.querySelector(".close__button")) createCloseButton();
    })

    courseButton.addEventListener("click", () => {
        modal.style.display = "flex";
        if(!document.querySelector(".close__button")) createCloseButton();
    })
}

modal();