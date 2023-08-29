
import ItemCard from "./ItemCard.jsx";
import "./ProjectItems.css"

function ProjectItems({ limit }){

    const projects = [
        {
            title: "TastyBites",
            description: "A website presenting an array of food categories and their respective recipes, enabling users to explore and access comprehensive dish information.",
            imageLink: "https://user-images.githubusercontent.com/42685801/261949001-26071a46-1f07-4d0f-a0f4-eff6c3bb9a5d.png",
            repositoryLink: "https://tasty-bites-orcin.vercel.app/",
            language: "React/JS"
        },
        {
            title: "BudgetPal",
            description: "From UCLA's hackathon comes BudgetPal, your solution for easy expense tracking and budgeting. Manage accounts by uploading receipts and monitoring spending.",
            imageLink: "https://user-images.githubusercontent.com/42685801/235100529-6abe88f1-f7de-4974-a6a5-a139be1ccb8c.png",
            repositoryLink: "https://github.com/oviozz/BudgetPal",
            language: "HTML/CSS/JS"
        },
        {
            title: "My News",
            description: "NewsView: Your personally-crafted news source. Stay informed while exploring articles on diverse topics, all tailored to you.",
            imageLink: "https://user-images.githubusercontent.com/42685801/259941144-c8e1b46c-5ad9-484c-ac59-f134b5b1c7aa.png",
            repositoryLink: "https://mynews-chi.vercel.app",
            language: "React/JS"
        },
        {
            title: "The Movie Review",
            description: "A PyQt5 application that uses the TMDb API to provide users with a comprehensive movie database. Users can search for movies and view details, ratings, reviews, and trailers from different regions.",
            imageLink: "https://user-images.githubusercontent.com/42685801/211488705-a78bd36b-aa90-4ef4-9108-d7506f016fec.png",
            repositoryLink: "https://github.com/oviozz/movie_review_app",
            language: "none"
        },
        {
            title: "NewsHost App",
            description: "A PyQt5 application that uses the NewsAPI to provide users with news articles from various sources and categories. Features include international news search and the ability to explore more articles.",
            imageLink: "https://user-images.githubusercontent.com/42685801/207573977-a51894bf-8a71-4e1a-9a0a-c296568c2e83.png",
            repositoryLink: "https://github.com/oviozz/newsapp_desktop",
            language: "none"
        },
        {
            title: "Restaurant System",
            description: "Application for restaurant to manage their business operations. The app provides features like menu management and receipt from the orders.",
            imageLink: "https://user-images.githubusercontent.com/42685801/199404195-e71b787e-b9a5-41c8-b07f-621287f73d49.png",
            repositoryLink: "https://github.com/oviozz/resturant-system",
            language: "none"
        },
        {
            title: "Quizzer",
            description: "A PyQt5 application that allows users to view quizlet flashcards in various ways. Features include multiple-choice questions, flashcard view, and PDF download.",
            imageLink: "https://user-images.githubusercontent.com/42685801/202929334-d86d8009-b015-48e8-a305-b1ab16ecb519.png",
            repositoryLink: "https://github.com/oviozz/quizzer",
            language: "python"
        },
        {
            title: "Wordle",
            description: "A PyQt5 application that allows users to play a word-guessing game with customizable word lists, multiple difficulty levels, and a score tracker.",
            imageLink: "https://user-images.githubusercontent.com/42685801/209925276-4ba76557-fadb-4875-96c4-45d56bd8535c.png",
            repositoryLink: "https://github.com/oviozz/Wordle_GUI",
            language: "python"
        },
        {
            title: "World Weather",
            description: "A website that uses the OpenWeatherMap API to provide users with weather information for locations around the world. Features include live updates and a search function to find weather information for specific locations.",
            imageLink: "https://user-images.githubusercontent.com/42685801/226163400-8b1577f4-fd66-4d5a-b56e-a6920c740db3.png",
            repositoryLink: "https://oviozz.github.io/weather/",
            language: "website"
        },
        {
            title: "Mighty Calculator",
            description: "Calculator website features a user-friendly interface with vibrant and easy-to-use buttons for performing basic mathematical operations.",
            imageLink: "https://user-images.githubusercontent.com/42685801/226168060-bd40a8c0-7cb5-4ad5-b4ef-58c2481b0db4.png",
            repositoryLink: "https://github.com/oviozz/Calculator",
            language: "website"
        },
        {
            title: "Rock Paper Scissor",
            description: "Rock, paper, scissors game that allows users to play against the computer. Features simple and intuitive gameplay, with responsive and dynamic user interface.",
            imageLink: "https://user-images.githubusercontent.com/42685801/226210247-0af40655-cdd6-4677-92d2-48d8af23a134.png",
            repositoryLink: "https://oviozz.github.io/rps",
            language: "website"
        },
        {
            title: "Amazon Item Price Analyzer",
            description: "A Python script that uses the BeautifulSoup, Requests, and Selenium libraries to scrape price data for a given item on Amazon. Features include price comparison and price tracking over time.",
            imageLink: "https://user-images.githubusercontent.com/42685801/197894270-4e16a9ad-2ef2-4e41-b653-fc913096c68d.png",
            repositoryLink: "https://github.com/oviozz/Item_PriceFinder",
            language: "python"
        }

    ];


    const dataSlice = projects.slice(0,limit)

    const projectItems = dataSlice.map((items, index) => {
        return <ItemCard key={index}
                         cardImg={items.imageLink}
                         cardTitle={items.title}
                         cardDetail={items.description}
                         hrefLink={items.repositoryLink}
        />
    })

    return (
        <ul className={"items--container"}>
            {projectItems}
        </ul>
    )

}


export default ProjectItems;