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

public final class TwitterJSP_jsp extends org.apache.jasper.runtime.HttpJspBase
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
      out.write("        ");
      out.write("\n");
      out.write("        ");

            h.add(HTML.HEADEND, "", false);
            out.println(h.showPage());
        
      out.write("\n");
      out.write("        <div>\n");
      out.write("        Click to get the Authorization token: <a href=\"");
      out.print(service.getAuthorizationUrl(requestToken));
      out.write("\" target=\"_blank\">Authorization</a>\n");
      out.write("        </div>\n");
      out.write("        <div>\n");
      out.write("            Now paste it here:\n");
      out.write("        </div>\n");
      out.write("        <form action=\"TwitterJSP.jsp\" method=\"POST\">\n");
      out.write("            <input type=\"text\" size=\"15\" name=\"value\"><br>\n");
      out.write("            <input type=\"submit\" value=\"Send\">\n");
      out.write("            \n");
      out.write("        </form>\n");
      out.write("        ");

            if (request.getParameter("value")!=null ) {
                Verifier verifier = new Verifier(request.getParameter("value"));
                //Trading the Request Token for an Access Token...
                Token accessToken = service.getAccessToken(requestToken, verifier);
                //Got the Access Token
        
      out.write("\n");
      out.write("        <div>\n");
      out.write("            Access Token looks like this: ");
      out.print(accessToken);
      out.write("\n");
      out.write("            <input type=\"text\" id=\"accessToken\" value=\"");
      out.print(accessToken);
      out.write("\">\n");
      out.write("        </div>\n");
      out.write("        ");

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
        
      out.write("\n");
      out.write("    \n");
      out.write("        <div id=\"response\">\n");
      out.write("            ");
      out.print(responseBody);
      out.write("\n");
      out.write("        </div>\n");
      out.write("        <br>\n");
      out.write("        <br>\n");
      out.write("        <div id=\"following\">\n");
      out.write("            ");
      out.print(responseBody2);
      out.write("\n");
      out.write("        </div>    \n");
      out.write("            ");

                }
            
      out.write("\n");
      out.write("    </body>\n");
      out.write("</html>\n");
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
