PhantomJS Server
================

This is a simple HTTP web server using PhantomJS&rsquo; `webserver` module. It is suited for running PhantomJS scripts that need to communicate with or be controlled by the outside world.

Basically, it&rsquo;s just a form of IPC ([inter-process communication][1]) &mdash; I think HTTP is more flexible than the alternatives (named pipes, files, stdio, [massing messages through alert boxes][2], and so on),

If you are looking for a way to communicate with PhantomJS from [Node.js][3] you are in the right place (well, half of the right place, technically). In fact, you can communicate with PhantomJS from anything that speaks HTTP.

If you&rsquo;re looking for PhantomJS + Node.js complete package, you are probably looking for one of:

- [sgentle/phantomjs-node](https://github.com/sgentle/phantomjs-node)
- [alexscheelmeyer/node-phantom](https://github.com/alexscheelmeyer/node-phantom)
- [baudehlo/node-phantom-simple](https://github.com/baudehlo/node-phantom-simple)

---

### Why should I use this instead of `${x}`

I&rsquo;m not sure. You probably shouldn&rsquo;t.

### How does this work?

It&rsquo;s a HTTP server, so there&rsquo;s that. When a request is recieved, the matching route is passed an array of key/value pairs (either the query parameters or the POST data), and a callback function for when the route has completed it&rsquo;s work. The callback takes any JSON-serializable object as a parameter, which is sent as the response to the client.

  [1]:https://en.wikipedia.org/wiki/Inter-process_communication
  [2]:https://github.com/sgentle/phantomjs-node/blob/1ff57e523793b8cb3ee7454853ec9b1ab8f5435d/README.markdown#no-really-how-does-it-work
