/**
 * Callback has its drawback its called callback hell
 * Callbacks are nothing but functions that take some time to produce a result.
 * Usually these async callbacks (async short for asynchronous) are used for accessing values from databases, downloading images, reading files etc.
 * As these take time to finish, we can neither proceed to next line because it might throw an error saying unavailable nor we can pause our program.
 * So we need to store the result and call back when it is complete.
 */


/**
 * Exact definition of callback hell
 * This is a big issue caused by coding with complex nested callbacks.
 *  Here, each and every callback takes an argument that is a result of the previous callbacks. 
 * In this manner, The code structure looks like a pyramid, making it difficult to read and maintain. Also, 
 * if there is an error in one function, then all other functions get affected
 */


/**
 * In this below example we see 
 * mongodb operation using callback leads to a pyramid like structure
 * with lots of brackets at the end causing refactoring and finding and soling an error becomes much more tedious
 * we solve this using the promises
 */
MongoClient.connect(url, (err, client)=>{
    //assert will check weather the err value is equal to null
    assert.equal(err, null);

    console.log('Connecting to Server');
    //To connect to db
    const db =client.db(dbname);
    dboper.insertDocument(db, { name: "Vadonut", description: "Test"},
    "dishes", (result) => {
        console.log("Insert Document:\n", result.ops);

        dboper.findDocuments(db, "dishes", (docs) => {
            console.log("Found Documents:\n", docs);

            dboper.updateDocument(db, { name: "Vadonut" },
                { description: "Updated Test" }, "dishes",
                (result) => {
                    console.log("Updated Document:\n", result.result);

                    dboper.findDocuments(db, "dishes", (docs) => {
                        console.log("Found Updated Documents:\n", docs);
                        
                        db.dropCollection("dishes", (result) => {
                            console.log("Dropped Collection: ", result);

                            client.close();
                        });
                    });
                });
        });
    });
});