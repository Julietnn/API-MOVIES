class FilmItem {
    constructor(title, genre, availableCopies) {
      this.title = title;
      this.genre = genre;
      this.availableCopies = availableCopies;
      this.rentedCopies = 0;
    }
  
    rent() {
      if (this.availableCopies > 0) {
        this.availableCopies--;
        this.rentedCopies++;
        console.log(`Successfully rented ${this.title}. Enjoy the film!`);
      } else {
        console.log(`Sorry, ${this.title} is not available for rent.`);
      }
    }
  
    returnFilm() {
      if (this.rentedCopies > 0) {
        this.rentedCopies--;
        this.availableCopies++;
        console.log(`Thank you for returning ${this.title}.`);
      } else {
        console.log(`No rented copies of ${this.title} to return.`);
      }
    }
  
    displayInfo() {
      console.log(`${this.title} (${this.genre}) - Available: ${this.availableCopies} | Rented: ${this.rentedCopies}`);
    }
  }
  
  class MovieRentalShop {
    constructor() {
      this.filmItems = [];
    }
  
    addFilmItem(filmItem) {
      this.filmItems.push(filmItem);
    }
  
    rentFilmItem(title) {
      const filmItem = this.findFilmItem(title);
      if (filmItem) {
        filmItem.rent();
      } else {
        console.log(`Film with title "${title}" not found.`);
      }
    }
  
    returnFilmItem(title) {
      const filmItem = this.findFilmItem(title);
      if (filmItem) {
        filmItem.returnFilm();
      } else {
        console.log(`Film with title "${title}" not found.`);
      }
    }
  
    displayInventory() {
      console.log('Film Inventory:');
      this.filmItems.forEach(filmItem => filmItem.displayInfo());
    }
  
    findFilmItem(title) {
      return this.filmItems.find(filmItem => filmItem.title === title);
    }
  }
  
  
  const rentalShop = new MovieRentalShop();
  
  const filmItem1 = new FilmItem('Interstellar', 'Sci-Fi', 8);
  const filmItem2 = new FilmItem('The Matrix', 'Action', 5);
  
  rentalShop.addFilmItem(filmItem1);
  rentalShop.addFilmItem(filmItem2);
  
  rentalShop.displayInventory();
  
  rentalShop.rentFilmItem('Interstellar');
  rentalShop.rentFilmItem('Interstellar'); 
  rentalShop.returnFilmItem('Interstellar');
  rentalShop.returnFilmItem('Interstellar'); 
  
  rentalShop.displayInventory();
    