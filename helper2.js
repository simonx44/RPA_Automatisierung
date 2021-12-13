function name(element, value) {
    const history = [];
    try {
        const histTableEntries = document.querySelectorAll(".histKurse .row-bordered");

        histTableEntries.forEach((element, index) => {
            if (index > 0) {
                const performance = element.children[1].innerText ?? 0;
                history.push(performance);
            }
        })

    } catch (error) {
        console.log(error);
    }

    return history;


}

