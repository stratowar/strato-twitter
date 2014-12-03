<%-- 
    Document   : index
    Created on : Nov 24, 2014, 5:38:59 PM
    Author     : Strato
--%>
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
    h.add(HTML.HEADEND, "", true);
%>
<div ng-app="twitterApp">
    <div class="container" ng-controller="TwitterController">
    <h2>
        Click to get the Authorization token: <a ng-href="<%=service.getAuthorizationUrl(requestToken)%>" target="_blank"><b>Authorization</b></a>
        </h2>
        <div class="row">
            <div class="col-xs-12">
        
        <form class="form-inline" role="form" action="Start.jsp" method="POST">
            <div class="form-group">
            Now paste it here:
            <input type="text" size="15" name="value" ng-model="Text" id="Text"><br>
           <br> And click Send button:
           <input type="submit" class="btn btn-info" value="Send" id="submitButton" style="display:none;"><br>
            </div>
        </form>
            </div>
        </div>
        <%
            if (request.getParameter("value")!=null ) {
                Verifier verifier = new Verifier(request.getParameter("value"));
                //Trading the Request Token for an Access Token...
                Token accessToken = service.getAccessToken(requestToken, verifier);
                //Got the Access Token
        %>
        <%
        // Now let's go and ask for a protected resource!
            OAuthRequest request1 = new OAuthRequest(Verb.GET, PROTECTED_RESOURCE_URL);
            OAuthRequest request2 = new OAuthRequest(Verb.GET, PROTECTED_RESOURCE_URL2);
            service.signRequest(accessToken, request1);
            service.signRequest(accessToken, request2);
            Response response1 = request1.send();
            Response response2 = request2.send();
            //Got it! Lets see what we found...
           // String responseBody2 = response2.getBody();
            String responseBody = response1.getBody();
            String responseBody2 = response2.getBody();
        %>
       
        <div class="row" id="responseBody">
            <%=responseBody%>
        </div>
            
    
        
        <%
                }
            %>
    
    </div>
</div>
<%
    out.println(h.showPage());
%>