import PreviousSearches from "../components/PreviousSearches"
import RecipeCard from "../components/RecipeCard"

export default function Recipes(){
    const recipes = [
        {
            title: "Chicken Pan Pizza",
            image: "/img/gallery/img_1.jpg",
            authorImg: "/img/top-chiefs/imgg1.jpg",
            description:"For a quick Chicken Pan Pizza, spread pizza dough in a greased pan, layer with pizza sauce, cooked chicken chunks, veggies, and shredded mozzarella cheese. Cook on medium heat covered, or bake at 200°C (400°F) for 12-15 minutes until crust is golden and cheese melts."
        }, 
        {
            title: "Spaghetti and Meatballs",
            image: "/img/gallery/img_6.jpg",
            authorImg: "/img/top-chiefs/imgg6.jpg",
            description:"Spaghetti and Meatballs is a classic Italian-American dish featuring tender meatballs simmered in a rich tomato sauce, served over al dente spaghetti. It's often garnished with Parmesan cheese and fresh basil for a hearty and comforting meal."
        },
        {
            title: "American Cheese Burger",
            image: "/img/gallery/img_5.jpg",
            authorImg: "/img/top-chiefs/imgg2.jpg",
            description:"An American Cheeseburger is a juicy beef patty grilled to perfection, topped with melted cheese, and served in a toasted bun. Classic toppings include lettuce, tomato, pickles, onions, and a dollop of ketchup or mustard."
        },
        {
            title: "Mutton Biriyani",
            image: "/img/gallery/img_6.jpg",
            authorImg: "/img/top-chiefs/imgg4.jpg",
            description:"Mutton Biryani is a fragrant, layered rice dish made with succulent pieces of spiced mutton, basmati rice, and aromatic spices like saffron, cardamom, and cinnamon. It's a rich and flavorful meal often served with raita or boiled eggs."
        },
        {
            title: "Japanese Sushi",
            image: "/img/gallery/img_10.jpg",
            authorImg: "/img/top-chiefs/imgg5.jpg",
            description:"Japanese Sushi is a traditional dish featuring vinegared rice paired with fresh seafood, vegetables, or egg, often wrapped in seaweed or served as bite-sized pieces. It's enjoyed with soy sauce, pickled ginger, and wasabi for a balanced flavor."
        },
        {
            title: "Chole Bhature",
            image: "/img/gallery/img1.jpg",
            authorImg: "/img/top-chiefs/imgg1.jpg",
            description:"Chole Bhature is a popular North Indian dish consisting of spicy chickpea curry (chole) served with deep-fried, fluffy bread (bhature). It's a hearty, flavorful meal often paired with pickles and yogurt."
        }, 
        {
            title: "Butter chicken",
            image: "/img/gallery/img2.webp",
            authorImg: "/img/top-chiefs/imgg2.jpg",
            description:"Butter Chicken is a creamy and mildly spiced North Indian curry made with tender chicken cooked in a rich tomato-based gravy, flavored with butter and aromatic spices. It’s best enjoyed with naan or steamed rice."
        },
        {
            title: "Samosa",
            image: "/img/gallery/img3.jpg",
            authorImg: "/img/top-chiefs/imgg4.jpg",
            description:"Samosa is a crispy, golden pastry stuffed with a spicy filling of mashed potatoes, peas, and aromatic spices. It's a popular snack often served with tangy tamarind or mint chutney."
        },
        {
            title: "Gajar Ka Halwa",
            image: "/img/gallery/img4.jpg",
            authorImg: "/img/top-chiefs/imgg1.jpg",
            description:"Gajar Ka Halwa is a classic Indian dessert made by slow-cooking grated carrots with milk, sugar, and ghee, flavored with cardamom. It’s garnished with nuts and is a winter favorite."
        },
        {
            title: "Garlic Butter Steak and Potatoes",
            image: "/img/gallery/img5.jpg",
            authorImg: "/img/top-chiefs/imgg6.jpg",
            description:"Garlic Butter Steak and Potatoes is a savory dish featuring a perfectly seared steak cooked in a rich garlic butter sauce, served alongside crispy, golden roasted potatoes. The garlic butter adds a delicious, aromatic richness to the meal."
        },
        {
            title: "Vanilla Cake",
            image: "/img/gallery/img6.jpg",
            authorImg: "/img/top-chiefs/imgg3.jpg",
            description:"Vanilla Cake is a soft and light dessert made with simple ingredients like flour, sugar, butter, and vanilla extract. It has a delicate flavor and is often layered with frosting or served with fruits and cream."
        },
        {
            title: "Tiramisu",
            image: "/img/gallery/img7.jpg",
            authorImg: "/img/top-chiefs/imgg3.jpg",
            description:"It's a classic Italian dessert made with layers of coffee-soaked ladyfingers, mascarpone cheese, and cocoa powder. It's creamy, rich, and has the perfect balance of sweet and coffee flavors."
        }
    ].sort(() => Math.random() - 0.5)

    return (
        <div>
            <PreviousSearches />
            <div className="recipes-container">
                {/* <RecipeCard /> */}
                {recipes.map((recipe, index) => (
                    <RecipeCard key={index} recipe={recipe} />
                ))}
            </div>
        </div>
    )
}