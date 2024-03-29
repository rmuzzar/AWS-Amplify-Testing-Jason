import requests
import json

url='https://www.walmart.com/ip/Expert-Grill-3-Burner-Propane-Gas-Grill/803538514'
username = 'lenmoni123'
apiKey = '7KptUsuu9esHZW3DoRLe84Z14'

apiEndPoint = "http://api.scraping-bot.io/scrape/retail"

options = {
    "useChrome": False,#set to True if you want to use headless chrome for javascript rendering
    "premiumProxy": False, # set to True if you want to use premium proxies Unblock Amazon,Google,Rakuten
    "proxyCountry": None, # allows you to choose a country proxy (example: proxyCountry:"FR")
    "waitForNetworkRequests":False # wait for most ajax requests to finish until returning the Html content (this option can only be used if useChrome is set to true),
                                   # this can slowdown or fail your scraping if some requests are never ending only use if really needed to get some price loaded asynchronously for example
}

payload = json.dumps({"url":url,"options":options})
headers = {
    'Content-Type': "application/json"
}

response = requests.request("POST", apiEndPoint, data=payload, auth=(username,apiKey), headers=headers)

print(response.text)