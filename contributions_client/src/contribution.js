// it has responsibility where we create a javascript object for each one of the contributions inside of the array
// and then we use those instance methods associated with this class to append them to the DOM

class Contribution {
    //this will remember objects
    static all = []
    static contributionContainer = document.getElementById("contributions-container")
    static contributionForm = document.getElementById("form-container")
    // we define a class variable by using the word static 
     
    //this constructor will mimic the backend 
    //category_id helps if we want to filter information all done on the front end
    constructor({id, name, email, description, category_id}){
        // to destructure add curly brackets into the constructor properties and values
        // they have to match the property names in the object in order to destructure
        // to the structure the
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
        this.element.addEventListener('click', this.handleClick)

        Contribution.all.push(this)
        //this is referecing the newly made instance
    }
 
    contributionHTML(){
        //this is an instance method, it's goint ot be called on the contribution instance
        //this function is just reponsible for creating the html regarding the data for each object is going to go in 
        //this method is going to be responsible for creating the inner html for this "element" 
        this.element.innerHTML += `
        <div>
            <h2>${this.name}:</h2>
            <p>${this.description}</p>
            <h3>${this.email}</h3>
        </div>
        <button id='delete-bttn'>Delete</button>
        <br>
        <br>
        `
        // we want a return for our function 
        return this.element
    }

    imposeOnDom(){
        // takes element and appends it to our contributions container 
        Contribution.contributionContainer.append(this.contributionHTML())
    }

    //these two functions have been separated to manipulate and update the data of the item we just edited without having to reappend it to the DOM because it might cause duplication 

    static renderForm(){
        Contribution.contributionForm.innerHTML += `
        <form id="new-contribution-form">
            Name: <input type="text" id="name">
            Description: <input type="text" id="description">
            Email: <input type="text" id="email">
            <input type="submit" id="create"> 
        <form> 
        `
    }

    handleClick = () => {
        if (event.target.innerText === 'Delete'){
            contributionService.deleteContribution(this.id)
            //this returns the button element
        }
    }


}