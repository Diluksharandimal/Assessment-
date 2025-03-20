import React, { useState } from "react";
import * as Components from './signup';


function SignUpForm() {

  const [signIn, toggle] = useState(true);

  return (
    <div>
      
      <Components.Container>
        <Components.SignUpContainer signinIn={signIn}>
          <Components.Form >
            <Components.Title>Create Account</Components.Title>

            <Components.Input type='email' name="mails" placeholder='Email' required  />
            <Components.Input type='password' name="paswds" placeholder='Password' required />
            <Components.Input type='password' name="rePaswd" placeholder='Re-enter Password' required/>

            <Components.Button>Sign Up</Components.Button>
          </Components.Form>
        </Components.SignUpContainer>

        <Components.SignInContainer signinIn={signIn}>
          <Components.Form>
            <Components.Title>Sign in</Components.Title>
            <Components.Input type='email' name="mail" placeholder='Email' required />
            <Components.Input type='password' name="paswd" placeholder='Password' required />
            <Components.Anchor href='/restpsw'>Forgot your password?</Components.Anchor>
            <Components.Button>Sign In</Components.Button>
          </Components.Form>
        </Components.SignInContainer>

        <Components.OverlayContainer signinIn={signIn}>
          <Components.Overlay signinIn={signIn}>

            <Components.LeftOverlayPanel signinIn={signIn}>
              <Components.Title>Welcome Back!</Components.Title>
              <Components.Paragraph>
                To keep connected with us, please login with your personal info
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(true)}>
                Sign In
              </Components.GhostButton>
            </Components.LeftOverlayPanel>

            <Components.RightOverlayPanel signinIn={signIn}>
              <Components.Title>Hello!</Components.Title>
              <Components.Paragraph>
                Please enter Your personal details and start the journey with us
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(false)}>
                Sign Up
              </Components.GhostButton>
            </Components.RightOverlayPanel>

          </Components.Overlay>
        </Components.OverlayContainer>
      </Components.Container>
    </div>
  );
}

export default SignUpForm;
