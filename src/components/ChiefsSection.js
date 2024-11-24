import ChiefCard from "./ChiefCard"

export default function ChiefsSection(){
    const chiefs = [
        {
            name: "Ranveer Brar",
            img: "/img/top-chiefs/imgg1.jpg",
            recipesCount: "10",
            cuisine: "Indian",
        },
        {
            name: "Harpal Singh Sokhi",
            img: "/img/top-chiefs/imgg2.jpg",
            recipesCount: "05",
            cuisine: "Punjabi",
        },
        {
            name: "Garima Arora",
            img: "/img/top-chiefs/imgg3.jpg",
            recipesCount: "13",
            cuisine: "Italian",
        },
        {
            name: "Sanjeev Kapoor",
            img: "/img/top-chiefs/imgg4.jpg",
            recipesCount: "08",
            cuisine: "American"
        },
        {
            name: "Vikas Khanna",
            img: "/img/top-chiefs/imgg5.jpg",
            recipesCount: "09",
            cuisine: "French"
        },
        {
            name: "Gordan Ramsey",
            img: "/img/top-chiefs/imgg6.jpg",
            recipesCount: "04",
            cuisine: "British"
        }
    ]
    return (
        <div className="section chiefs">
            <h1 className="title">Our Top Chiefs</h1>
            <div className="top-chiefs-container">
                {/* <ChiefCard />
                <ChiefCard />
                <ChiefCard />
                <ChiefCard />
                <ChiefCard />
                <ChiefCard /> */}
                { chiefs.map(chief => <ChiefCard key={chief.name} chief={chief} />) }
            </div>
        </div>
    )
}