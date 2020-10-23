# How are requests Served ?

> <p>When we type <b>“www.google.com”</b> into your browser the first thing that happens is a <b><em>Domain Name Server (DNS)</em></b> matches “google.com” to an IP address. Then the browser sends an HTTP request to the server and the server sends back an HTTP response. The browser begins rendering the HTML on the page while also requesting any additional resources such as CSS, JavaScript, images, etc. Each subsequent request completes a request/response cycle and is rendered in turn by the browser. Then once the page is loaded some sites (though not mine) will make further asynchronous requests.</p>

#### To sum up, we can say :
<p>
<ol>
<li>You enter a URL into a web browser</li>
<li>The browser looks up the IP address for the domain name via DNS</li>
<li>The browser sends a HTTP request to the server</li>
<li>The browser sends a HTTP request to the server</li>
<li>The server sends back a HTTP response</li>
<li>The browser begins rendering the HTML</li>
<li>The browser sends requests for additional objects embedded in HTML (images, css, JavaScript) and repeats steps 3-5. </li>
<li>Once the page is loaded, the browser sends further async requests as needed.</li>
</ol>
</p>