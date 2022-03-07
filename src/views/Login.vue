<template>
  
<main>
  <div :class="{container:true, signupmode:true}">
    <div class="forms-container">
      <div class="signin-signup">
        <form class="sign-in-form">
          <h2 class="title">Sign in</h2>
          <div class="input-field">
            <i class="mdi mdi-account" />
            <input type="text" placeholder="Username"  />
          </div>
          <div class="input-field">
            <i class="mdi mdi-lock" />
            <input
              type="password"
              placeholder="Password"
             
            />
          </div>
          <input type="submit" value="Login" class="btn solid" />
          <p class="social-text">Or Sign in with Google</p>
          <div class="social-media">
            <span class="social-icon cursor-pointer">
              <i class="mdi mdi-google" />
            </span>
          </div>
        </form>
        <form action="#" class="sign-up-form">
          <h2 class="title">Sign up</h2>
          <div class="input-field">
            <i class="mdi mdi-account" />
            <input type="text" placeholder="Username"  />
          </div>
          <div class="input-field">
            <i class="mdi mdi-email" />
            <input type="email" placeholder="Email"  />
          </div>
          <div class="input-field">
            <i class="mdi mdi-lock" />
            <input
              type="password"
              placeholder="Password"
            />
          </div>
          <input type="submit" class="btn" value="Sign up" />
          <p class="social-text">Or Sign in with Google</p>
          <div class="social-media">
          <span class="social-icon cursor-pointer">
              <i class="mdi mdi-google" />
            </span>
          </div>
        </form>
      </div>
    </div>
    <div class="panels-container">
      <div class="panel left-panel">
        <div class="content">
          <h3>New here ?</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
            ex ratione. Aliquid!
          </p>
          <button
            class="btn transparent"
            id="sign-up-btn"

          >
            Sign up
          </button>
        </div>
      </div>
      <div class="panel right-panel">
        <div class="content">
          <h3>One of us ?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            laboriosam ad deleniti.
          </p>
          <button
            class="btn transparent"
            id="sign-in-btn"
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  </div>
</main>
</template>