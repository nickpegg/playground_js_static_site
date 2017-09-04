# js_static_site

This is me screwing around with the idea of a static blog website where blog posts are all in a single JSON file and the entire website is a single HTML file with some JS to pull posts out of the JSON blob.

Permalinks should be handled, like:
`/posts/2017/my_cool_post.html` is secretly `/index.html` (handled by nginx) but the JS in the page sees the URL and fetches `my_cool_post` from the JSON.

## Version 1
Path: `/v1/`

I did a thing and put it over in `/v1/`. Nginx was set to send users to `index.html` and that file had some JS to tell you what URL you hit. And it worked! Going to `/posts/blah` totally worked even though it didn't exist on disk

## Version 2
Path: `/jawn/`

Oh no, React. But it's a basic thing that loads posts from a JSON blob and renders them. Neato!

If you build it and have Vagrant running and all that shit, you can cruise on over to http://192.168.33.10/ to view the results.

URL handling isn't done yet, but it at least displays all the posts!
