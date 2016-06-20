# shurl
Url shortener Microservice (Free Code Camp project)

## User Stories:
1. I can pass a URL as a parameter and I will receive a shortened URL in the JSON response.
2. If I pass an invalid URL that doesn't follow the valid http://www.example.com format, the JSON response will contain an error instead.
3. When I visit that shortened URL, it will redirect me to my original link.

### Add an url like this
```
https://toobig.herokuapp.com/new/https://www.google.com
```
or
```
https://toobig.herokuapp.com/new/http://foo.com:80
```
### You'll get similar output
```
{ "original_url":"http://www.google.com", "short_url":"https://toobig.herokuapp.com/2871" }
```

Visit the short_url and you'll be redirected to the website you've added. For example, this ```https://little-url.herokuapp.com/2871``` will redirect to ```https://www.google.com/```
