export class Drinks{

    createCocktails(){
        const cocktailContainer = document.createElement('div');
        cocktailContainer.classList.add("cocktail-container");

        const cocktailArray = [
            {name: 'The Bren Mule', desc:'Vodka, ginger syrup, cucumber water, lime, sparkling water.'},
            {name: 'Smoked Paloma', desc: 'Blanco tequila, grapefruit, agave, charcoal salt rim.'},
            {name: 'Green Garden Gimlet', desc:'Gin, cucumber juice, fresh basil, lime.'},
            {name: 'Hibiscus Sour', desc: 'Bourbon, hibiscus syrup, lemon, aquafaba.'},
            {name:'Golden Hour Spritz', desc: 'Aperol, turmeric honey syrup, prosecco, blood orange.'}
        ];

        cocktailContainer.innerHTML = `
            <h2 class="cocktail-title">Cocktails</h2>
            ${
                cocktailArray.map(({name, desc}) => `
                    <div class="menu-item">
                        <h3>${name}</h3>
                        <p>${desc}</h3>
                    </div>
                `
                ).join('')
            }
        `;

        return cocktailContainer


    }


    createBeer(){
        const beerContainer = document.createElement('div');
        beerContainer.classList.add("beer-container");

        const draftContainer = document.createElement('div');
        draftContainer.classList.add("draft-container")
        const bottleContainer = document.createElement('div');
        bottleContainer.classList.add("bottle-container")

        const beerTitle = document.createElement('div');
        beerTitle.classList.add("beer-title");
        beerTitle.textContent = "Beer";
        

        const beerDraftArray = [
            {name: 'Cloudline Hazy IPA'},
            {name: 'High Plains Pilsner'},
            {name: 'Ember Amber Ale'},
            {name: 'Midnight Oat Stout'},
            {name: 'Wheat & Wild Saison'}
        ]

        const beerBottleArray = [
            {name: 'Pacifico Clara'},
            {name: 'Sierra Nevada Pale Ale'},
            {name: 'Modelo Especial'},
            {name: 'Heineken 0.0'},
            {name: 'Athletic Brewing Free Wave IPA'}
        ]

        draftContainer.innerHTML = `
            <h3 class="draft-title">Draft</h3>
            ${
                beerDraftArray.map(({name}) => `
                    <div class="menu-item">
                        <h3>${name}</h3>
                    </div>
                `
                ).join('')
            }
        `;

        bottleContainer.innerHTML = `
            <h3 class="bottle-title">Bottled</h3>
            ${
                beerDraftArray.map(({name}) => `
                    <div class="menu-item">
                        <h3>${name}</h3>
                    </div>
                `
                ).join('')
            }
        `;

        const beerTypesContainer = document.createElement('div');
        beerTypesContainer.classList.add("beer-types-container");
        beerTypesContainer.appendChild(draftContainer);
        beerTypesContainer.appendChild(bottleContainer);
        beerContainer.appendChild(beerTitle);
        beerContainer.appendChild(beerTypesContainer);
        
        return beerContainer
    }

    createLiqourSpirits(){
        const liqourSpiritsContainer = document.createElement('div');
        liqourSpiritsContainer.classList.add("liqour-spirits-container")

        const liquorSpiritsArray = [
            {name: 'Casamigos Blanco Tequila'},
            {name: "Hendrick's Gin"},
            {name: 'Talisker 10-Year Scotch Whisky'},
            {name: 'Grey Goose Vodka' },
            {name:'Diplomatico Reserva Exclusiva Rum'}
        ]

        liqourSpiritsContainer.innerHTML = `
            <h2 class="liqour-title">Liquour and Spirits</h2>
            ${
                liquorSpiritsArray.map(({name}) => `
                    <div class="menu-item">
                        <h3>${name}</h3>
                    </div>
                `
                ).join('')
            }
        `;

        return liqourSpiritsContainer
    }

    render(){
        const container = document.createElement('div')
        container.classList.add("drinks-background");

        const drinksTitle = document.createElement('div');
        drinksTitle.classList.add("drinks-title");
        drinksTitle.textContent = "Drinks";

        container.appendChild(drinksTitle);
        container.appendChild(this.createCocktails());
        container.appendChild(this.createBeer());
        container.appendChild(this.createLiqourSpirits());

        return container;
    }
}