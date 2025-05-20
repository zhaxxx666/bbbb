
document.addEventListener('DOMContentLoaded', function() {
    // Recipe data
    const recipes = {
        carbonara: {
            title: "Spaghetti Carbonara",
            description: "A classic Roman pasta dish with eggs, cheese, pancetta, and black pepper.",
            ingredients: [
                "350g spaghetti",
                "150g pancetta or guanciale, diced",
                "50g Pecorino Romano cheese, grated",
                "50g Parmigiano-Reggiano, grated",
                "4 large egg yolks",
                "2 large eggs",
                "Freshly ground black pepper",
                "Salt to taste"
            ],
            instructions: [
                "Bring a large pot of salted water to boil and cook the spaghetti until al dente.",
                "While the pasta is cooking, sauté the pancetta in a large skillet over medium heat until crispy.",
                "In a bowl, whisk together the eggs, egg yolks, grated cheeses, and plenty of black pepper.",
                "Reserve 1 cup of pasta water, then drain the pasta and immediately add it to the skillet with the pancetta.",
                "Remove the skillet from heat and quickly stir in the egg and cheese mixture, tossing continuously.",
                "Add a splash of the reserved pasta water to achieve a creamy consistency.",
                "Serve immediately with extra grated cheese and black pepper on top."
            ]
        },
        pizza: {
            title: "Pizza Margherita",
            description: "The quintessential Neapolitan pizza with tomatoes, mozzarella, and basil.",
            ingredients: [
                "500g pizza dough",
                "400g San Marzano tomatoes, crushed",
                "250g fresh mozzarella, sliced",
                "Fresh basil leaves",
                "2 tbsp extra virgin olive oil",
                "Salt to taste"
            ],
            instructions: [
                "Preheat your oven to the highest temperature (ideally 500°F/260°C) with a pizza stone or baking sheet inside.",
                "Stretch the pizza dough into a 12-inch circle on a floured surface.",
                "Spread a thin layer of crushed tomatoes over the dough, leaving a 1-inch border.",
                "Arrange the mozzarella slices evenly over the tomatoes.",
                "Carefully transfer the pizza to the preheated stone or baking sheet.",
                "Bake for 8-10 minutes, until the crust is golden and the cheese is bubbling.",
                "Remove from the oven, scatter fresh basil leaves on top, drizzle with olive oil, and season with salt.",
                "Allow to cool slightly before slicing and serving."
            ]
        },
        tiramisu: {
            title: "Tiramisu",
            description: "A beloved Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.",
            ingredients: [
                "6 egg yolks",
                "¾ cup granulated sugar",
                "500g mascarpone cheese, room temperature",
                "1 cup heavy cream",
                "2 cups strong coffee or espresso, cooled",
                "3 tbsp Marsala wine or dark rum (optional)",
                "200g ladyfinger cookies",
                "Cocoa powder for dusting",
                "Dark chocolate for garnish (optional)"
            ],
            instructions: [
                "In a heatproof bowl, whisk together egg yolks and sugar. Place over a pot of simmering water (double boiler) and whisk until the mixture is pale and thick, about 5 minutes.",
                "Remove from heat and let cool slightly. Fold in the mascarpone cheese until smooth.",
                "In a separate bowl, whip the heavy cream until stiff peaks form. Gently fold the whipped cream into the mascarpone mixture.",
                "Mix the coffee with the Marsala wine or rum if using.",
                "Quickly dip each ladyfinger into the coffee mixture (don't soak them) and arrange in a single layer in an 8×8 inch dish.",
                "Spread half of the mascarpone mixture over the ladyfingers. Repeat with another layer of coffee-dipped ladyfingers and the remaining mascarpone mixture.",
                "Cover with plastic wrap and refrigerate for at least 6 hours, preferably overnight.",
                "Before serving, dust the top with cocoa powder and garnish with grated dark chocolate if desired."
            ]
        },
        risotto: {
            title: "Risotto ai Funghi",
            description: "Creamy Arborio rice cooked with mushrooms, wine, and Parmigiano-Reggiano.",
            ingredients: [
                "300g Arborio rice",
                "500g mixed mushrooms (porcini, cremini, shiitake), sliced",
                "1 small onion, finely chopped",
                "2 cloves garlic, minced",
                "150ml dry white wine",
                "1.2L hot vegetable or chicken stock",
                "50g butter, divided",
                "2 tbsp olive oil",
                "75g Parmigiano-Reggiano, grated",
                "2 tbsp fresh parsley, chopped",
                "Salt and pepper to taste"
            ],
            instructions: [
                "In a large saucepan, heat the olive oil and half the butter over medium heat. Add the onion and sauté until translucent.",
                "Add the garlic and mushrooms, cooking until the mushrooms are softened and have released their liquid.",
                "Add the rice and stir for 1-2 minutes until translucent around the edges.",
                "Pour in the wine and stir until absorbed.",
                "Begin adding the hot stock one ladle at a time, stirring constantly and waiting until each addition is absorbed before adding more.",
                "Continue this process for about 18-20 minutes, until the rice is creamy but still has a slight bite (al dente).",
                "Remove from heat and stir in the remaining butter, grated Parmigiano-Reggiano, and parsley.",
                "Season with salt and pepper to taste. Let rest for 2 minutes before serving."
            ]
        }
    };

    // Recipe modal functionality
    const modal = document.getElementById('recipe-modal');
    const recipeButtons = document.querySelectorAll('.recipe-btn');
    const closeModal = document.querySelector('.close-modal');
    
    recipeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const recipeId = this.getAttribute('data-recipe');
            const recipe = recipes[recipeId];
            
            // Populate modal with recipe data
            document.getElementById('recipe-title').textContent = recipe.title;
            document.getElementById('recipe-description').textContent = recipe.description;
            
            // Populate ingredients
            const ingredientsList = document.getElementById('ingredients-list');
            ingredientsList.innerHTML = '';
            recipe.ingredients.forEach(ingredient => {
                const li = document.createElement('li');
                li.textContent = ingredient;
                ingredientsList.appendChild(li);
            });
            
            // Populate instructions
            const instructionsList = document.getElementById('instructions-list');
            instructionsList.innerHTML = '';
            recipe.instructions.forEach(instruction => {
                const li = document.createElement('li');
                li.textContent = instruction;
                instructionsList.appendChild(li);
            });
            
            // Show modal
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    });
    
    // Close modal on clicking X
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Enable scrolling
        });
    }
    
    // Close modal on clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Enable scrolling
        }
    });
});
