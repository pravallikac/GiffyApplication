export class AuthService {
  loggedIn = false;
  favouriteGiphs:any=[];
  serviceInitial:any=[];
  favouriteCount;
  isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.loggedIn);
        }, 800);
      }
    );
    return promise;
  }

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }

  addFavouriteGiphs(g){
    this.favouriteGiphs.push(g);
    console.log("array is: "+this.favouriteGiphs);
    console.log("Service: "+g.type);

  }
  getFavouriteGiphs()
  {
    console.log(this.favouriteGiphs.length);
    return this.favouriteGiphs;
    
  }
}
