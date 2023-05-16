<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>ProautosXpress</title>
    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"
    />
</head>

@viteReactRefresh
@vite('resources/js/app.jsx')
<body>
    <!-- React root DOM -->
    <div id="example">
    </div>
    <!-- React JS -->
    <script src="{{ asset('js/app.js') }}" defer></script>


    <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>

    <script
    src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
    crossorigin></script>

    <script
    src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
    crossorigin></script>

<script>var Alert = ReactBootstrap.Alert;</script>

</body>
</html>
