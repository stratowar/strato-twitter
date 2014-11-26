<%-- 
    Document   : Start
    Created on : Oct 19, 2014, 2:18:44 PM
    Author     : Strato
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%--import HTML --%>
<%@page import="HTML.*" %>

<%--declare HTML --%>
<%! HTML h = new HTML("Tweeter page", " ng-app='twitterApp'");%>

<%
    h.add(HTML.STYLESHEET, "//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css", false);
    h.add(HTML.STYLESHEET, "//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap-theme.min.css", false);
    h.add(HTML.STYLESHEET, "css/smallCss.css", false);   
    h.add(HTML.HEADEND, "", false);
    out.println(h.showPage());
%>
    
<jsp:include page="index.jsp" />   
    
<%    
    h.add(HTML.LINE, "", true);
    h.add(HTML.AUTHOR, "", true);
    h.add(HTML.SCRIPT, "http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js", false);
    h.add(HTML.SCRIPT, "http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js", false);
    h.add(HTML.SCRIPT, "js/angular.js/angular.js", false);
    h.add(HTML.SCRIPT, "js/app.js", false);
    h.add(HTML.SCRIPT, "js/services.js", false);
    h.add(HTML.SCRIPT, "js/controller.js", false);
    h.add(HTML.SCRIPT, "js/angular-route.js", false);
    h.add(HTML.SCRIPT, "js/angular-sanitize.js", false);
    h.add(HTML.SCRIPT, "js/oauth.js", false);
    out.println(h.showPage());
%>
