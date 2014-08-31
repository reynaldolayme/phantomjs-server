CasperJS Server
===============

This is a simple HTTP web server using PhantomJS&rsquo; `webserver` module. It is suited for running PhantomJS/CasperJS scripts that need to communicate with or be controlled by the outside world.

Basically, it&rsquo;s just a form of IPC ([inter-process communication][1]) &mdash; I think HTTP is more flexible than the alternatives (named pipes, files, stdio, [passing messages through alert boxes][2], and so on).

If you are looking for a way to communicate with CasperJS from [Node.js][3] you are in the right place (well, *half* of the right place). In fact, you can communicate with PhantomJS using anything that speaks HTTP.

If you&rsquo;re looking for the PhantomJS + Node.js complete package, you&rsquo;re probably looking for one of:

- [node-phantom-simple](https://github.com/baudehlo/node-phantom-simple)
- [node-phantom](https://github.com/alexscheelmeyer/node-phantom)
- [phantomjs-node](https://github.com/sgentle/phantomjs-node)

### Quick start

Assuming that you have CasperJS in your `$PATH`:

```bash
$ casperjs index.js
```

The example route included retrives tweets the PhantomJS twitter account:

```bash
$ curl -i localhost:12345/tweets
```

---

### Why should I use this instead of `${x}`?

I&rsquo;m not sure. You probably shouldn&rsquo;t.

### How does this work?

It&rsquo;s a HTTP server, so there&rsquo;s that. When a request is recieved, the matching route is passed an array of key/value pairs (either the query parameters or the POST data), and a callback function for when the route has completed it&rsquo;s work. The callback takes any JSON-serializable object as a parameter, which is sent as the response to the client.

  [1]:https://en.wikipedia.org/wiki/Inter-process_communication
  [2]:https://github.com/sgentle/phantomjs-node/blob/1ff57e523793b8cb3ee7454853ec9b1ab8f5435d/README.markdown#no-really-how-does-it-work
  [3]:http://nodejs.org/
