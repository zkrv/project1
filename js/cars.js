const carsList = document.querySelector("#cars");

const fetchCars = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");

        if (!response.ok) {
            throw new Error(`Ошибка: ${response.status}`);
        }

        const cars = await response.json();
        renderCarsList(cars);
    } catch (error) {
        console.error("Ошибка загрузки данных:", error);
    }
};

const renderCarsList = (data) => {
    data.forEach((car) => {
        const carCard = document.createElement("div");
        carCard.classList.add("car-card");


        const carImage = document.createElement("img");
        carImage.setAttribute("src", "https://ribakitshop.ru/uploads/product/4100/4150/thumbs/70_reklama.jpg");
        carImage.setAttribute("alt", "Car Image");


        const carTitle = document.createElement("h3");
        carTitle.innerText = car.title;


        const carDescription = document.createElement("p");
        carDescription.innerText = car.body;

        carCard.append(carImage);
        carCard.append(carTitle);
        carCard.append(carDescription);

        carsList.append(carCard);
    });
};


fetchCars();