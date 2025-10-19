Things I learnt from the assignment
- using useParams to grab the route parameter and turn it into an object. As I was coding I realized that this could be submitted as the foreign key for the reviews table. It was tricky to get that working particually to get this to poll the server with useEffect and setInterval. 
- Using Cleanup functions to stop setInterval from running multiple times. 
- Started to get my head around the ? (i'm not sure what it's name is) but my understanding of it is that it stops the program from crashing if a useState is empty after the first run through (when the fetch as not been assigned to useState). This is something Connor introduced on an issue I was having to get the images to display on the indivual albums page. I then tried to use it on the homepage too with the automatic image carousel. 

Things I struggled with:
- Getting my head around arrow funcitons is first still can't remember all the variations. 
- Styling with TailwindCSS, individual CSS files for components and index.css. I also think I could have set up a grid on the index.css to make the overall page comply better. How this works on a SPA application with different routes that have different layouts i'm not sure though.

