// any global variables to share across all files
const base_url = "http://127.0.0.1:3000"
const contributionService = new ContributionService(base_url)


Contribution.contributionForm.addEventListener('submit', handleSubmit)
// any initializations of the application
// if reading or fetching data upon initialization goes here
contributionService.getContributions()
// invoke the function method so tha tway as soon as the page load we make the request.
// after getting this array of objects.I Append these objects to the DOM
Contribution.renderForm()

function handleSubmit(){
    event.preventDefault()
  //gather all the data from the form and send a post request to our service
  // when event gets trigger, it's going to trigger that method inside of contribution service
    contributionService.createContribution()
    event.target.reset()
}
