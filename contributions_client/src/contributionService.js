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
            debugger
            //here all of the work with this data is where it is going
        })
        
    }
   

}
