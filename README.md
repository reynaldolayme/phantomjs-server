PhantomJS Server
================

Fair warning: this is still very much a work in progress&mdash;**it&rsquo;s rough and unfriendly.**

Intro
-----

Simply put, PhantomJS Server is a (relatively modular) web server using PhantomJS&rsquo; `webserver` module. It is suited for running PhantomJS scripts that need to be controlled from the outside world.

wat
---

It is a form of IPC, you see. The alternatives (named pipes, files, stdio) are not as flexible as HTTP.

Speaking of IPC, you might be interesting in:

- [sgentle/phantomjs-node](https://github.com/sgentle/phantomjs-node)
- [alexscheelmeyer/node-phantom](https://github.com/alexscheelmeyer/node-phantom)
- [baudehlo/node-phantom-simple](https://github.com/baudehlo/node-phantom-simple)

Why should I use this instead of *x*
------------------------------------

1. I&rsquo;m not sure. You probably shouldn&rsquo;t.

Quirks with PhantomJS
---------------------

Completely off-topic, but I had to put this somewhere:

- You cannot reassign `exports` (e.g. you cannot assign it a function).
