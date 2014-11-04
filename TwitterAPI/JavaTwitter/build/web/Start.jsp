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
    h.add(HTML.STYLESHEET, "//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css", true);
    h.add(HTML.STYLESHEET, "//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap-theme.min.css", true);
    h.add(HTML.STYLESHEET, "css/smallCss.css", true);   
    h.add(HTML.HEADEND, "", true);
    out.println(h.showPage());
    %>
    
    <jsp:include page="index.html" />   
    
<%    
    h.add(HTML.LINE, "", true);
    h.add(HTML.AUTHOR, "", true);
    h.add(HTML.SCRIPT, "http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js", true);
    h.add(HTML.SCRIPT, "http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js", true);
    h.add(HTML.SCRIPT, "js/angular.js/angular.js", true);
    h.add(HTML.SCRIPT, "js/Script.js", true);
    out.println(h.showPage());
%>
