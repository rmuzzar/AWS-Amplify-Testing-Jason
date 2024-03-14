import styles from "../components/styles/catalogs.module.css";

export default async function CatalogsPage() {
    var data = await postJSON();
    
    console.log(data);
    return(
        <main>
            {data ? (
            <>
              <h1 className={styles['text']}>{JSON.stringify(data.success[0])} </h1>
              {/* Other HTML elements using data properties */}
              {/* <p className="text-lg mt-6">{data.description}</p> */}
              {/* ... */}
            </>
          ) : (
            <h1>Loading...</h1>
          )}
        </main>
    );
}

  
  async function postJSON() {
    try {
        var username = "lenmoni123",
        apiKey = "7KptUsuu9esHZW3DoRLe84Z14",
        url = "https://www.walmart.com/ip/Expert-Grill-3-Burner-Propane-Gas-Grill/803538514",
        apiEndPoint = "http://api.scraping-bot.io/scrape/retail",
        auth = "Basic " + new Buffer(username + ":" + apiKey).toString("base64");
      const response = await fetch(apiEndPoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": auth,
        },
        body: JSON.stringify( {"url":url } ),
      });
  
      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  