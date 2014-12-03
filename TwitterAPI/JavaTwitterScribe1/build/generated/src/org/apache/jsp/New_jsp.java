package org.apache.jsp;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import HTML.*;

public final class New_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

 HTML h = new HTML("Tweeter page", " ng-app='twitterApp'");

            String responseBody2 = "prcika";
        
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
      out.write('\n');
      out.write('\n');
      out.write('\n');

    h.add(HTML.STYLESHEET, "//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css", false);
    h.add(HTML.STYLESHEET, "//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap-theme.min.css", false);
    h.add(HTML.STYLESHEET, "css/smallCss.css", false);   
    h.add(HTML.HEADEND, "", false);
    out.println(h.showPage());

      out.write("\n");
      out.write("        ");
      out.write("\n");
      out.write("       <script>\n");
      out.write("            $scope.bilosta; \n");
      out.write("            $(document).ready(function() {\n");
      out.write("              $scope.bilosta = ");
      out.print(responseBody2);
      out.write(";\n");
      out.write("        console.log(bilosta);\n");
      out.write("            }\n");
      out.write("        </script>\n");
      out.write("        <div class=\"row\" ng-repeat=\"t in bilosta\">\n");
      out.write("                    <div class=\"col-xs-2 col-sm-1\">    \n");
      out.write("                        <button class=\"img-circle\">\n");
      out.write("                            <img ng-src=\"{{tweets[0].user.profile_image_url}}\" class=\"img-circle\" ng-click=\"forwardPicture(tweets[0].user.profile_image_url)\">\n");
      out.write("                        </button>\n");
      out.write("                        <div id=\"myModal\" class=\"modal fade\">\n");
      out.write("                            <div class=\"modal-dialog\">\n");
      out.write("                                <div class=\"modal-content\">\n");
      out.write("                                    <div class=\"modal-header\">\n");
      out.write("                                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\n");
      out.write("                                            &times;\n");
      out.write("                                        </button>\n");
      out.write("                                        <h4 class=\"modal-title\">\n");
      out.write("                                            Bigger picture\n");
      out.write("                                        </h4>\n");
      out.write("                                    </div>\n");
      out.write("                                    <div class=\"modal-body\">\n");
      out.write("                                        <p>\n");
      out.write("                                            <img ng-src=\"{{pictureChange}}\" ng-model=\"picture\" class=\"img-responsive\" alt=\"Nemanja\" width=\"712\" height=\"712\">\n");
      out.write("                                        </p>                    \n");
      out.write("                                    </div>\n");
      out.write("                                    <div class=\"modal-footer\">\n");
      out.write("                                        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">\n");
      out.write("                                            Close\n");
      out.write("                                        </button>                    \n");
      out.write("                                    </div>\n");
      out.write("                                </div>\n");
      out.write("                            </div>\n");
      out.write("                        </div>\n");
      out.write("                    </div> \n");
      out.write("                    <div class=\"col-xs-10 col-sm-11\">\n");
      out.write("                        <small>\n");
      out.write("                            {{t.user.name}}: \n");
      out.write("                        </small>\n");
      out.write("                        <small>\n");
      out.write("                            {{t.user.description}}\n");
      out.write("                        </small>\n");
      out.write("                        <br>\n");
      out.write("                        <h4> \n");
      out.write("                            <div ng-bind-html=\"t.text | linky | links\"></div> \n");
      out.write("                        </h4>                     \n");
      out.write("                        <div id=\"{{t.id_str}}\">                        \n");
      out.write("                            <div class=\"tweet_body\" ng-bind=\"t.id_str\" style=\"display: none;\">\n");
      out.write("                            </div>\n");
      out.write("                            <button id=\"deleteButton\" class=\"btn btn-info\" ng-click=\"deleteButton(t.id_str)\"> \n");
      out.write("                                Delete tweet\n");
      out.write("                            </button>\n");
      out.write("                        </div>\n");
      out.write("                    </div>\n");
      out.write("                </div>\n");
      out.write("        \n");
      out.write("   ");
    
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
