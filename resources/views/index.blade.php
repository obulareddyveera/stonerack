<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Stone Rack</title>
    <link href="css/app.css" rel="stylesheet" />
    <style>
        html, body, .app {
            margin: 0 !important;
            padding: 0 !important;
            height: 100%;
            width: 100%;
            background-color: #eee !important;
        }
    </style>
</head>
    <body>
        <div id="app" className="container-fluid"></div>
        <script type="text/javascript" src="js/app.js"></script>
    </body>
</html>
