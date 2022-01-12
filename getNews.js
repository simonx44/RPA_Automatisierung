function getNews(element, value) {
    const history = [];
    try {
        const newsEntires = document.querySelectorAll(".newsKasten .row .row-bordered");

        let counter = 0;

        const elements = [];

        for (let i = 0; i < newsEntires.length; i++) {

            if (counter >= 3) {
                break;
            }

            const element = newsEntires[i];

            const link = element.querySelector("div a").getAttribute("href") ?? "-";

            const date = element.querySelector("div").innerText ?? "-";;

            let heading = element.querySelector("div a").innerText ?? "-";;

            heading = heading.split(",");

            if (heading > 0) {
                heading = heading.join(" ")
            }


            console.log(heading);

            counter++;

            const splitter = "";

            console.log(`${date}~${link}~${heading}`);

            elements.push(`${date}~${link}~${heading}`);


        }

        console.log(elements);
        return elements;

    } catch (error) {
        console.log(error);
    }

    return history;


}

function extractComma() {


}

