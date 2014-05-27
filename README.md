pjs - PhantomJS Server
======================

A (relatively modular?) web server using PhantomJS' `webserver` module.

Why? IPC with PhantomJS&mdash;the alternatives are not as flexible as HTTP.

Quirks with PhantomJS
---------------------

Not actually on-topic, but I had to put this somewhere:

- You cannot reassign `exports` (e.g. you cannot assign it a function).
