function name(element, value) {
    const history = [];
    try {

        const histTableEntries = document.querySelectorAll(".histKurse .row-bordered");

        histTableEntries.forEach((element, index) => {
            if (index > 0) {
                let performance = element.children[1].innerText ?? 0;

                if (performance) {

                    const updated = performance.split(",").join(".");

                    performance = updated;
                }

                history.push(performance.toString());
            }
        })

        console.log(history)

    } catch (error) {
        console.log(error);
    }

    return history.toString();


}

