<%@page  language="java"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page  session="true"%>
<%@page  import="java.util.Scanner"%>
<%@page  import="org.scribe.builder.*"%>
<%@page  import="org.scribe.builder.api.*"%>
<%@page  import="org.scribe.model.*"%>
<%@page  import="org.scribe.oauth.*"%>
<%@page import="HTML.*" %>
        <%!
            HTML h = new HTML("Tweeter page", " ");
            private static final String PROTECTED_RESOURCE_URL = "https://api.twitter.com/1.1/account/verify_credentials.json";
            private static final String PROTECTED_RESOURCE_URL2 = "https://api.twitter.com/1.1/statuses/home_timeline.json";
            OAuthService service = new ServiceBuilder()
                                .provider(TwitterApi.class)
                                .apiKey("6icbcAXyZx67r8uTAUM5Qw")
                                .apiSecret("SCCAdUUc6LXxiazxH3N0QfpNUvlUy84mZ2XZKiv39s")
                                .build();
            Token requestToken = service.getRequestToken();
        %>
        <%
            h.add(HTML.HEADEND, "", false);
            out.println(h.showPage());
        %>
        <div>
        Click to get the Authorization token: <a href="<%=service.getAuthorizationUrl(requestToken)%>" target="_blank">Authorization</a>
        </div>
        <div>
            Now paste it here:
        </div>
        <form action="TwitterJSP.jsp" method="POST">
            <input type="text" size="15" name="value"><br>
            <input type="submit" value="Send">
            
        </form>
        <%
            if (request.getParameter("value")!=null ) {
                Verifier verifier = new Verifier(request.getParameter("value"));
                //Trading the Request Token for an Access Token...
                Token accessToken = service.getAccessToken(requestToken, verifier);
                //Got the Access Token
        %>
        <div>
            Access Token looks like this: <%=accessToken%>
            <input type="text" id="accessToken" value="<%=accessToken%>">
        </div>
        <%
        // Now let's go and ask for a protected resource!
            OAuthRequest request1 = new OAuthRequest(Verb.GET, PROTECTED_RESOURCE_URL);
            OAuthRequest request2 = new OAuthRequest(Verb.GET, PROTECTED_RESOURCE_URL2);
            service.signRequest(accessToken, request1);
            service.signRequest(accessToken, request2);
            Response response1 = request1.send();
            Response response2 = request2.send();
            //Got it! Lets see what we found...
            String responseBody = response1.getBody();
            String responseBody2 = response2.getBody();
        %>
    
        <div id="response">
            <%=responseBody%>
        </div>
        <br>
        <br>
        <div id="following">
            <%=responseBody2%>
        </div>    
            <%
                }
            %>
    </body>
</html>
