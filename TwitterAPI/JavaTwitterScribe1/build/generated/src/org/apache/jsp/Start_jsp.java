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

public final class Start_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

 HTML h = new HTML("Tweeter page", " ng-app='twitterApp'");
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
      out.write("\n");
      out.write('\n');
      out.write('\n');
      out.write('\n');

    h.add(HTML.STYLESHEET, "//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css", false);
    h.add(HTML.STYLESHEET, "//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap-theme.min.css", false);
    h.add(HTML.STYLESHEET, "css/smallCss.css", false);   
    h.add(HTML.HEADEND, "", false);
    out.println(h.showPage());

      out.write("\n");
      out.write("  \n");
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "index.jsp", out, false);
      out.write("   \n");
      out.write("    \n");
    
    h.add(HTML.LINE, "", true);
    h.add(HTML.AUTHOR, "", true);
    h.add(HTML.SCRIPT, "http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js", false);
    h.add(HTML.SCRIPT, "http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js", false);
    h.add(HTML.SCRIPT, "script/angular.js/angular.js", false);
    h.add(HTML.SCRIPT, "script/javascript.js", false);
    h.add(HTML.SCRIPT, "script/services.js", false);
    h.add(HTML.SCRIPT, "script/controller.js", false);
    h.add(HTML.SCRIPT, "script/angular-route.js", false);
    h.add(HTML.SCRIPT, "script/angular-sanitize.js", false);
    out.println(h.showPage());

      out.write('\n');
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
