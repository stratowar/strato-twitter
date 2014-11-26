<%-- 
    Document   : index
    Created on : Nov 24, 2014, 5:38:59 PM
    Author     : Strato
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<%@page import="HTML.*" %>
<%! HTML h = new HTML("Tweeter page", " ");%>
<%
    h.add(HTML.HEADEND, "", true);
%>
<div ng-app="twitterApp">
    <nav ng-controller="TwitterController" id="myNavbar" class="navbar navbar-default" role="navigation">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbarCollapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#/Twitter" ng-click="loadFirstPage(page1)">Main Page</a>
            </div>
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="nav navbar-nav">
                    <li data-ng-repeat="page in pages">
                        <a href="{{page.href}}">{{ page.title}}</a>
                    </li>                        
                </ul>
            </div>
        </div>
    </nav>    
    <div class="jumbotron" ng-view>
    </div>
</div>
<%
    out.println(h.showPage());
%>