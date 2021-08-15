//responsible for housing all the fetch requests associated with the model
// make all service calls regarding a contribution object

class ContributionService{

    constructor(endpoint){
        this.endpoint = endpoint
        // constructor functions is like the initialize method, where we set properties for each instance of this class.
        // throughout this class I can reference to endpoint so I won't worry about baseurl  or passing the url itself  
    }
    // fetch requests
    // 1: Read/Index action: Grab all the contributions that I have and then append them to the DOM

    getContributions(){
        fetch(`${this.endpoint}/contributions`)
        .then(resp => resp.json())
        //get our response and jsonify it because all responses come back as string and we need then in json format so we can do something on the javascript side of things
        .then(contributions => {
            for (const contribution of contributions){
                const c = new Contribution(contribution)
                //iterate over array, instantiate a new instance and pass properties
                c.imposeOnDom()
                // use imposeOnDom method to display each instance onto the DOM
            }
            //here all of the work with this data is where it is going
        })  
    }
    
    createContribution(){
        //grab contribution information and create an object
        const contribution = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            description: document.getElementById('description').value,
            category_id: 1
        }

        // let newContributionObj = {
        //     name,
        //     email,
        //     description,
        //     category_id
        // }

        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(contribution)
        }
        
        fetch(`${this.endpoint}/contributions`, configObj)
        .then(resp => resp.json())
        .then(contribution => {
            const c = new Contribution(contribution)
            c.imposeOnDom()
            // console.log(contribution)
        })
    }

    deleteContribution(id){

         fetch(`${this.endpoint}/contributions/${id}`, {
             method: 'DELETE',
             headers: {
                 'Content-Type': 'application/json'
             }
         })
         
         .then(resp => resp.json())
         .then(json => alert(json.message))
    }
}
