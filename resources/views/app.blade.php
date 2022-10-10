<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="utf-8">
    @yield('meta')

    <title>@yield('title')</title>

    <link href="https://fonts.googleapis.com/css?family=Nunito:400,600,700" rel="stylesheet" type="text/css">
    <!-- BEGIN LOADER -->
    <link href="{{mix('/css/light/loader.css')}}" rel="stylesheet" type="text/css">
    <link href="{{mix('/css/dark/loader.css')}}" rel="stylesheet" type="text/css">
    <script rel="{{mix('/js/loader.js')}}"></script>
    <!-- END LOADER -->

    <!-- BEGIN LOADER MANDATORY STYLES -->
    <link href="{{mix('/css/bootstrap.min.css')}}" rel="stylesheet" type="text/css">
    <link href="{{mix('/css/light/plugins.css')}}" rel="stylesheet" type="text/css">
    <link href="{{mix('/css/dark/plugins.css')}}" rel="stylesheet" type="text/css">
    <!-- END LOADER MANDATORY STYLES -->

    @stack('styles')
</head>
<body class="layout-boxed dark">



    @yield('content')

    <script src="{{mix('js/vendors.min.js')}}"></script>
    <script src="{{mix('js/bootstrap.bundle.min.js')}}"></script>
    <script src="{{mix('js/perfect-scrollbar.min.js')}}"></script>
    <script src="{{mix('js/mousetrap.min.js')}}"></script>
    {{--    <script src="{{mix('js/app.js')}}"></script>--}}
    @stack('script')
</body>
</html>
