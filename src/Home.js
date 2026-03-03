
export class Home{

    createAbout(){
        const aboutContainer = document.createElement('div');
        aboutContainer.classList.add('about-container');

        aboutContainer.innerHTML =`
        <div class="about-content">
            <h2 class="brand-title">Welcome to Brën</h2>
            <p class="tagline">Clean Eating. Consciously Crafted.</p>

            <div class="description">
            <p>
                At <strong>Brën</strong>, we believe that eating well shouldn’t mean missing out. 
                We’ve built a kitchen centered on transparency, sourcing whole, vibrant ingredients 
                to create dishes that nourish your body without sacrificing the bold flavors you crave.
            </p>

            <p>
                But we also know the importance of a good pour. Our bar program balances the scales 
                with a curated selection of <strong>craft cocktails</strong> and a rotating lineup 
                of <strong>premium draft beers</strong> from the best independent brewers.
            </p>
            </div>

            <blockquote class="brand-definition">
            <strong>Brën</strong> (pronounced <em>bren</em>): Inspired by the roots of the word for 
            "essence," it represents our commitment to fueling your lifestyle with clean fuel and high spirits.
            </blockquote>
        </div>
        `;

        return aboutContainer;
    }

    
    createHours(){
        const hoursContainer = document.createElement('div');
        hoursContainer.classList.add('hours-container');

        hoursContainer.innerHTML = `
        <div class="hours-wrapper">
            <h2 class="section-title">Visit Us</h2>
            <p class="hours-intro">Join us for fresh eats and cold drafts.</p>
            
            <dl class="hours-list">
            <div class="hours-row">
                <dt>Monday – Thursday</dt>
                <dd>11:00 am – 10:00 pm</dd>
            </div>
            <div class="hours-row">
                <dt>Friday – Saturday</dt>
                <dd>11:00 am – 11:00 pm</dd>
            </div>
            <div class="hours-row">
                <dt>Sunday</dt>
                <dd>10:00 am – 9:00 pm <span class="note">(Brunch until 3pm)</span></dd>
            </div>
            </dl>
            
            <p class="kitchen-note">* Kitchen closes 30 minutes before bar.</p>
        </div>
        `;


        return hoursContainer;
    }
    
    
    createPics(){
        const galleryContainer = document.createElement('div');
        galleryContainer.classList.add('pics-container');
        

        const photos = ['bowl.jpg', 'cocktail.jpg', 'interior.jpg', 'beer.jpg', 'salad.jpg', 'bar.jpg'];

        const galleryHTML = photos.map(photo => `
        <div class="gallery-item">
            <img src="images/${photo}" alt="Brën Gallery Image">
        </div>
        `).join('');

        galleryContainer.innerHTML = `<div class="gallery-grid">${galleryHTML}</div>`;

        return galleryContainer;

    }


    render(){
        const container = document.createElement('div')
        container.classList.add("home-background");

        container.appendChild(this.createAbout());
        container.appendChild(this.createPics());
        container.appendChild(this.createHours());

        return container;
    }
}