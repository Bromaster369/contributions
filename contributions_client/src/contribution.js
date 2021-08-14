// it has responsibility where we create a javascript object for each one of the contributions inside of the array
// and then we use those instance methods associated with this class to append them to the DOM

class Contribution {
    //this will remember objects
    static all = []
    // we define a class variable by using the word static 
     
    //this constructor will mimic the backend 
    //category_id helps if we want to filter information all done on the front end
    constructor(id, name, email, description, category_id){

        // instantiate objects
        // we can also instante objects with their own element in the constructor function
        this.id = id
        this.name = name
        this.email = email
        this.description = description
        this.category_id = category_id

        this.element = document.createElement('li')
        this.element.dataset.id = this.id
        this.element.id = `contribution-${this.id}`


        Contribution.all.push(this)
        //this is referecing the newly made instance
    }
 

}