export class Menu{

    createAppetizers(){
        const appetizerContainer = document.createElement('div');

        const appetizers = [
            {name: 'Charred Edamame Hummus', desc:'Edamame, tahini, lemon, seed crackers, cucumber.'},
            {name: 'Watermelon & Feta Skewers', desc: 'Watermelon, feta, fresh mint, balsamic reduction.'},
            {name: 'Avocado Rice Paper Rolls', desc:'Mango, purple cabbage, avocado, vermicelli, ginger-peanut sauce.'},
            {name: 'Cauliflower Fritters', desc: 'Cauliflower, turmeric, cumin, herbed yogurt.'},
            {name:'Sweet Potato & Black Bean Bites', desc: 'Sweet potato, black bean, pickled jalapeño, lime crema.'}
        ];

        appetizerContainer.innerHTML = `
            <h2>Appetizers<h2>
            ${
                appetizers.map(({name, desc}) => `
                    <div class="menu-item">
                        <h3>${name}</h3>
                        <p>${desc}</h3>
                    </div>
                `
                ).join('')
            }
        `;

        return appetizerContainer


    }


    createMainCourses(){
        const mainCourseContainer = document.createElement('div');
        
        const mainCourses = [
            {name: 'Grilled Salmon Power Bowl', desc:'Atlantic salmon, wild grain rice, broccolini, radish, avocado, miso-ginger glaze.'},
            {name: 'Herb-Crusted Free Range Chicken', desc: 'Chicken breast, fresh herbs, lemon zest, farro, roasted root vegetables.'},
            {name: 'Zucchini Noodle Puttanesca', desc:'Zucchini, tomato, olives, capers, fresh basil. Vegan.'},
            {name: 'Black Bean & Quinoa Stuffed Pepper', desc: 'Bell pepper, quinoa, black beans, fire-roasted corn, cashew queso.'},
            {name:'Grass-Fed Beef Lettuce Wraps', desc: 'Grass-fed beef, ginger, garlic, tamari, butter lettuce, pickled carrots, sriracha.'}
        ]

        mainCourseContainer.innerHTML = `
            <h2>Main Courses<h2>
            ${
                mainCourses.map(({name, desc}) => `
                    <div class="menu-item">
                        <h3>${name}</h3>
                        <p>${desc}</h3>
                    </div>
                `
                ).join('')
            }
        `;

        return mainCourseContainer
    }

    createDesserts(){
        const dessertContainer = document.createElement('div');

        const desserts = [
            {name: 'Dark Chocolate Avocado Mousse', desc:'Avocado, 70% cacao, toasted coconut, sea salt.'},
            {name: 'Almond Flour Lemon Tart', desc: 'Lemon curd, almond flour crust, monk fruit.'},
            {name: 'Frozen Açaí Bark', desc:'Açaí, banana, blueberries, granola, honey.'},
            {name: 'Chia Seed Pudding Trio', desc: 'Vanilla / mango-turmeric / cocoa-almond'},
            {name:'Oat & Date Energy Bites', desc: 'Oats, medjool dates, almond butter, dark chocolate. Gluten-free.'}
        ]

        dessertContainer.innerHTML = `
            <h2>Desserts<h2>
            ${
                desserts.map(({name, desc}) => `
                    <div class="menu-item">
                        <h3>${name}</h3>
                        <p>${desc}</h3>
                    </div>
                `
                ).join('')
            }
        `;

        return dessertContainer
    }

    render(){
        const container = document.createElement('div')
        container.classList.add("menu-background");

        container.appendChild(this.createAppetizers());
        container.appendChild(this.createMainCourses());
        container.appendChild(this.createDesserts());

        return container;
    }
}