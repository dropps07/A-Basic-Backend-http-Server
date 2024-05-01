# JavaScript # ExpressJS # NodeJS
# A fucntional http server that lets you handle the logic of a file server 

Step1: GET /file - Returns a list present in './files' directory.

# its response:- status(200) with an array of list of file names in JSON Format.

Step2: Get /file/:filename- Returns content present in File by Name.

# its response:- status(200) with file content as response body if found or status(404) Not Found

Step3: For any other route not defined in the server returns status code 404

Testing the server:- run `npm run test-fileServer` command in terminal
