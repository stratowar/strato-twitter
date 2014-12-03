package org.apache.jsp;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import java.util.Scanner;
import org.scribe.builder.*;
import org.scribe.builder.api.*;
import org.scribe.model.*;
import org.scribe.oauth.*;
import HTML.*;
import org.json.simple.JSONObject;
import org.json.simple.JSONArray;
import org.json.simple.parser.ParseException;
import org.json.simple.parser.JSONParser;

public final class index_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

         
    HTML h = new HTML("Tweeter page", " ");
    private static final String PROTECTED_RESOURCE_URL = "https://api.twitter.com/1.1/account/verify_credentials.json";
    private static final String PROTECTED_RESOURCE_URL2 = "https://api.twitter.com/1.1/statuses/home_timeline.json";
    OAuthService service = new ServiceBuilder()
                        .provider(TwitterApi.class)
                        .apiKey("6icbcAXyZx67r8uTAUM5Qw")
                        .apiSecret("SCCAdUUc6LXxiazxH3N0QfpNUvlUy84mZ2XZKiv39s")
                        .build();
    Token requestToken = service.getRequestToken();
    JSONParser parser = new JSONParser();

  private static final JspFactory _jspxFactory = JspFactory.getDefaultFactory();

  private static java.util.List<String> _jspx_dependants;

  private org.glassfish.jsp.api.ResourceInjector _jspx_resourceInjector;

  public java.util.List<String> getDependants() {
    return _jspx_dependants;
  }

  public void _jspService(HttpServletRequest request, HttpServletResponse response)
        throws java.io.IOException, ServletException {

    PageContext pageContext = null;
    HttpSession session = null;
    ServletContext application = null;
    ServletConfig config = null;
    JspWriter out = null;
    Object page = this;
    JspWriter _jspx_out = null;
    PageContext _jspx_page_context = null;

    try {
      response.setContentType("text/html;charset=UTF-8");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;
      _jspx_resourceInjector = (org.glassfish.jsp.api.ResourceInjector) application.getAttribute("com.sun.appserv.jsp.resource.injector");

      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write('\n');

    h.add(HTML.HEADEND, "", true);

      out.write("\n");
      out.write("<div ng-app=\"twitterApp\">\n");
      out.write("    <nav ng-controller=\"TwitterController\" id=\"myNavbar\" class=\"navbar navbar-default\" role=\"navigation\">\n");
      out.write("        <!-- Brand and toggle get grouped for better mobile display -->\n");
      out.write("        <div class=\"container\">\n");
      out.write("            <div class=\"navbar-header\">\n");
      out.write("                <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\">\n");
      out.write("                    <span class=\"sr-only\">Toggle navigation</span>\n");
      out.write("                    <span class=\"icon-bar\"></span>\n");
      out.write("                    <span class=\"icon-bar\"></span>\n");
      out.write("                    <span class=\"icon-bar\"></span>\n");
      out.write("                </button>\n");
      out.write("                <a class=\"navbar-brand\" href=\"#/Twitter\" ng-click=\"loadFirstPage(page1)\">Main Page</a>\n");
      out.write("            </div>\n");
      out.write("            <!-- Collect the nav links, forms, and other content for toggling -->\n");
      out.write("            <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\n");
      out.write("                <ul class=\"nav navbar-nav\">\n");
      out.write("                    <li data-ng-repeat=\"page in pages\">\n");
      out.write("                        <a href=\"{{page.href}}\">{{ page.title}}</a>\n");
      out.write("                    </li>                        \n");
      out.write("                </ul>\n");
      out.write("            </div>\n");
      out.write("        </div>\n");
      out.write("    </nav>    \n");
      out.write("    <div>\n");
      out.write("        Click to get the Authorization token: <a href=\"");
      out.print(service.getAuthorizationUrl(requestToken));
      out.write("\" target=\"_blank\">Authorization</a>\n");
      out.write("        </div>\n");
      out.write("        <div>\n");
      out.write("            Now paste it here:\n");
      out.write("        </div>\n");
      out.write("        <form action=\"index.jsp\" method=\"POST\">\n");
      out.write("            <input type=\"text\" size=\"15\" name=\"value\"><br>\n");
      out.write("            <input type=\"submit\" value=\"Send\" ng-click=\"connectButton()\" id=\"connectButton\"><br>\n");
      out.write("            \n");
      out.write("        </form>\n");
      out.write("        ");

            if (request.getParameter("value")!=null ) {
                Verifier verifier = new Verifier(request.getParameter("value"));
                //Trading the Request Token for an Access Token...
                Token accessToken = service.getAccessToken(requestToken, verifier);
                //Got the Access Token
        
      out.write("\n");
      out.write("        ");

        // Now let's go and ask for a protected resource!
            OAuthRequest request1 = new OAuthRequest(Verb.GET, PROTECTED_RESOURCE_URL);
            OAuthRequest request2 = new OAuthRequest(Verb.GET, PROTECTED_RESOURCE_URL2);
            service.signRequest(accessToken, request1);
            service.signRequest(accessToken, request2);
            Response response1 = request1.send();
            Response response2 = request2.send();
            //Got it! Lets see what we found...
            response1.getBody();
           // String responseBody2 = response2.getBody();
            String responseBody = response1.getBody();
            parser.parse(responseBody);
        
      out.write("\n");
      out.write("        \n");
      out.write("        <br>\n");
      out.write("        <br>\n");
      out.write("        ");

                }
            
      out.write("\n");
      out.write("            And now see your page:\n");
      out.write("            <a class=\"navbar-brand\" href=\"#/Twitter1\">Main Page</a>\n");
      out.write("    <div class=\"jumbotron\" ng-view>\n");
      out.write("    </div>\n");
      out.write("</div>\n");

    out.println(h.showPage());

    } catch (Throwable t) {
      if (!(t instanceof SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          out.clearBuffer();
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
        else throw new ServletException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }
}
