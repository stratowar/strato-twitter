/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.scribe.twitter;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Scanner;
import org.scribe.builder.*;
import org.scribe.builder.api.*;
import org.scribe.model.*;
import org.scribe.oauth.*;
import javax.swing.JTextField;
import java.awt.*;
import javax.swing.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.FocusEvent;
import java.awt.event.FocusListener;

/**
 *
 * @author Strato
 */

public class TwitterServlet extends HttpServlet {
    
 private static final String PROTECTED_RESOURCE_URL = "https://api.twitter.com/1.1/account/verify_credentials.json";
    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
        out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet TwitterServlet</title>");            
            out.println("</head>");
            out.println("<body>");   
            OAuthService service = new ServiceBuilder()
                            .provider(TwitterApi.class)
                            .apiKey("6icbcAXyZx67r8uTAUM5Qw")
                            .apiSecret("SCCAdUUc6LXxiazxH3N0QfpNUvlUy84mZ2XZKiv39s")
                            .build();
        //Scanner in = new Scanner(System.in);
    
    // Obtain the Request Token
    
    //Fetching the Request Token...
    Token requestToken = service.getRequestToken();
    
    out.println("Now go and authorize Scribe here:");
    out.println("<a href=" + service.getAuthorizationUrl(requestToken)+ ">Authorization</a>");
    out.println("And paste the verifier here");
    out.print(">>");
    
    final JTextField xyzField = new JTextField(20); 
    Scanner in = new Scanner(xyzField.getText());
    
    JButton btnGetText = new JButton("Get text");
    btnGetText.addActionListener(new ActionListener() {
      @Override
      public void actionPerformed(ActionEvent e) {
        String message = String.format("xyzField='%s'",xyzField.getText());
      }
    });

    
    Verifier verifier = new Verifier(btnGetText.toString());
    
    out.println();
    
    // Trade the Request Token and Verfier for the Access Token
    
    //Trading the Request Token for an Access Token...
    Token accessToken = service.getAccessToken(requestToken, verifier);
    //Got the Access Token!
    out.println("(Access Token looks like this: " + accessToken + " )");
    out.println();

    // Now let's go and ask for a protected resource!
    OAuthRequest request1 = new OAuthRequest(Verb.GET, PROTECTED_RESOURCE_URL);
    service.signRequest(accessToken, request1);
    Response response1 = request1.send();
    
    //Got it! Lets see what we found...
    String responseBody = response1.getBody();
    out.println(responseBody);

    out.println("<h1>Servlet TwitterServlet at " + request.getContextPath() + "</h1>");
    out.println("</body>");
    out.println("</html>");
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
