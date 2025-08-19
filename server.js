const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the public directory ex. /public/index.html
app.use(express.static("public"));


/**
 * Route to handle GET requests to /results
 * Reads the contents of the mounted directory "results"
 * If there is an error, respond with a 500 status code and error message
 * otherwise respond with a JSON array of filenames
 */
app.get("/results", (req, res) => {
    console.log("/results request")
    const resultsDirectory = path.join(__dirname, "public", "results");

    fs.readdir(resultsDirectory, (err, files) => {
      if (err) {
        console.log("ERROR: Unable to read the directory")
        return res.status(500).json({
          error: "Unable to read the directory",
          details: err.message
        });
      }
  
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
