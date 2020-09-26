<!DOCTYPE html>
<html>
    <head>
        <script src="{{ mix('js/inertia-app.js') }}" defer></script>
    </head>
    <body>
        <inertia-wrapper id="app" :page="{{ json_encode($page) }}">
           <div>default slot asdfasdfasdf</div> 
        </inertia-wrapper>
        Dashboad Blade 
    </body>
</html>
