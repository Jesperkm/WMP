<?php include "header.php"; ?>

<header>
    <div class="headerline green"></div>
    <div class="headerline dark"></div>
    <h1>WMP</h1>
    <h2>Weekly Meal Planner</h2>
</header>

<section id="login">
    <form action="#answer" class="form clearfix" id="contact-form" method="post" autocomplete="off" novalidate>

        <fieldset>
        <label for="name"><i class="fa fa-user"></i></label>
        <input type="text" name="name" id="name" placeholder="Username" />
        </fieldset>
        
        <fieldset>
        <label for="subject"><i class="fa fa-lock"></i></label>
        <input type="text" name="subject" id="subject" placeholder="Password" />
        </fieldset>

        <input type="submit" value="Log in" id="submit"/>

        <div id="answer"></div>
            <div id="second-choice" class="clearfix">
                <div class="register"><a href="#">Forgot details?</a></div>
                <div class="register f-right"><a href="#">Register</a></div>
            </div>
    </form>
</section>

<?php include "footer.php"; ?>