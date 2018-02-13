<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" type="text/css" href="index.css">
    <script src="https://cdn.jsdelivr.net/npm/vue"></script>
</head>

<body>
    <img src="flag.png" class="pBlocks" id="lf">
    <div id="header">
        With Valentine Day!
    </div>
    <div id="poetry">
        <div class="middleblock">
            <div class="name">{{current.name}}</div>
            <pre class="middleblock">{{current.text}}</pre>
            <div class="author">{{current.author}}</div>
        </div>
        <div class="pagination">
            <div class="number" v-for="i in num_pages()" v-bind:class="[i-1 == currentPoem ? 'active' : '']" v-on:click="changePoem(i-1)">{{i}}</div>
        </div>
</div>
        <img src="flag.png" class="pBlocks" id="rg">
</body>
<script src="index.js"></script>

</html>