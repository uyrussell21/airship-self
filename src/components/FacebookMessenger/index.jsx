const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID

const FacebookMessenger = () => (
  <>
    {/* Load Facebook SDK for JavaScript */}
    <div id="fb-root" />
    <script
      dangerouslySetInnerHTML={{
        __html:`
          window.fbAsyncInit = function() {
            FB.init({
              xfbml            : true,
              version          : 'v10.0'
            });
          };
      
          (function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
      `,
    }}
    />
    {/* Your Chat Plugin code */}
    <div
      className="fb-customerchat"
      attribution="setup_tool"
      page_id={FB_PIXEL_ID}
    />
  </>
)

export default FacebookMessenger