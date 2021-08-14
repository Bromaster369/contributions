// any global variables to share across all files
const base_url = "http://127.0.0.1:3000"
const contributionService = new ContributionService(base_url)
// any initializations of the application
// if reading or fetching data upon initialization goes here
contributionService.getContributions()
// invoke the function method so tha tway as soon as the page load we make the request.
// after getting this array of objects.I Append these objects to the DOM
