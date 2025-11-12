const progressBar = () => {
    const courseNumber = document.querySelector(".earned_students");
    const progress = document.querySelector("progress");
    let counted = 0;
    let maxCount = Math.floor(Math.random() * (600000 - 350000 + 1) + 350000);
    console.log(maxCount);

    setInterval(() => {
        if(counted >= maxCount) {
            clearInterval();
            return;
        }
        counted += 1000;
        courseNumber.innerText = counted + "₽";
        progress.value = counted;
    })
}

progressBar();
