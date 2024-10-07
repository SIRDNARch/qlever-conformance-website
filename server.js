const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static("public"));


// Custom route to handle GET requests to /results
app.get("/results", (req, res) => {
    console.log("/results request")
    const resultsDirectory = path.join(__dirname, "public", "results");

    // Read the contents of the results directory
    fs.readdir(resultsDirectory, (err, files) => {
      if (err) {
        // If there is an error, respond with a 500 status code and error message
        console.log("ERROR: Unable to read the directory")
        return res.status(500).json({
          error: "Unable to read the directory",
          details: err.message
        });
      }
  
      // If successful, respond with a JSON array of filenames
      res.json({
        files: files
      });
    });
});

// Catch all other requests and show the index.html
app.get("*", (req, res) => {
    console.log("Undefined request: " + req.path)
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start the server
const server = app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

// "Graceful" shutdown
process.on("SIGTERM", () => {
  console.log("SIGTERM signal received: closing HTTP server");
  server.close(() => {
      console.log("HTTP server closed");
  });
});

process.on("SIGINT", () => {
  console.log("SIGINT signal received: closing HTTP server");
  server.close(() => {
      console.log("HTTP server closed");
  });
});
