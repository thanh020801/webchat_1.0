<template>
<div class="container py-5">
  <header class="text-center text-white">
    <div class="row">
      <div class="col-lg-7 mx-auto">
        <h1 class="display-4">Bootstrap scrollbar</h1>
        <p class="font-italic">Two approches to make a custom scrollbar, one using pure CSS, and another approach using
          <a href="http://manos.malihu.gr/jquery-custom-content-scroller/" class="text-white">
            <u>Malihu customScrollbar</u></a> plugin. </p>
        <p class="font-italic">Snippet By
          <a href="https://bootstrapious.com" class="text-white">
            <u>Bootstrapious</u>
          </a>
        </p>
      </div>
    </div>
  </header>

  <div class="row py-5">
    <div class="col-lg-8 mx-auto">

      <div class="card mb-4">
        <div class="card-body p-5">
          <h4 class="mb-4">Gradient Scrollbar</h4>
          <div class="custom-scrollbar-css p-2">
            <p class="font-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, soluta, cupiditate. Ad ab, delectus impedit similique voluptate fuga nemo iure, nobis dolorem dolor, quia voluptas aperiam doloremque commodi id? In? Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </div>
      <p class="text-white text-center font-italic">More styles on
        <a href="http://manos.malihu.gr/repository/custom-scrollbar/demo/examples/scrollbar_themes_demo.html" class="text-white small">
          <u>Malihu scrollbar styles</u>
        </a>
      </p>
    </div>
  </div>
</div>
</template>
<script>
	export default{}
</script>
<style type="text/css" scoped>
/*#chat2 .form-control {
border-color: transparent;
}

#chat2 .form-control:focus {
border-color: transparent;
box-shadow: inset 0px 0px 0px 1px transparent;
}

.divider:after,
.divider:before {
content: "";
flex: 1;
height: 1px;
background: #eee;
}*/

/*
*
* ==========================================
* CUSTOM UTIL CLASSES
* ==========================================
*
*/
.custom-scrollbar-js,
.custom-scrollbar-css {
  height: 200px;
}


/* Custom Scrollbar using CSS */
.custom-scrollbar-css {
  overflow-y: scroll;
}

/* scrollbar width */
.custom-scrollbar-css::-webkit-scrollbar {
  width: 5px;
}

/* scrollbar track */
.custom-scrollbar-css::-webkit-scrollbar-track {
  background: #eee;
}

/* scrollbar handle */
.custom-scrollbar-css::-webkit-scrollbar-thumb {
  border-radius: 1rem;
  background-color: #00d2ff;
  background-image: linear-gradient(to top, #00d2ff 0%, #3a7bd5 100%);
}


/*
*
* ==========================================
* FOR DEMO PURPOSES
* ==========================================
*
*/
body {
  min-height: 100vh;
  background-color: #00d2ff;
  background-image: linear-gradient(to right, #00d2ff 0%, #3a7bd5 100%);
}
</style>