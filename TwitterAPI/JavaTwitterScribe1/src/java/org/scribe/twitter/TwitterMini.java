package org.scribe.twitter;
/**
 *
 * @author Strato
 */
import java.util.Scanner;

import org.scribe.builder.*;
import org.scribe.builder.api.*;
import org.scribe.model.*;
import org.scribe.oauth.*;

public class TwitterMini {
    
    private static final String PROTECTED_RESOURCE_URL = "https://api.twitter.com/1.1/account/verify_credentials.json";
  
  public static void main(String[] args)
  {
    // If you choose to use a callback, "oauth_verifier" will be the return value by Twitter (request param)
    OAuthService service = new ServiceBuilder()
                                .provider(TwitterApi.class)
                                .apiKey("6icbcAXyZx67r8uTAUM5Qw")
                                .apiSecret("SCCAdUUc6LXxiazxH3N0QfpNUvlUy84mZ2XZKiv39s")
                                .build();
    Scanner in = new Scanner(System.in);

    // Obtain the Request Token
    
    //Fetching the Request Token...
    Token requestToken = service.getRequestToken();
    
    System.out.println("Now go and authorize Scribe here:");
    System.out.println(service.getAuthorizationUrl(requestToken));
    System.out.println("And paste the verifier here");
    System.out.print(">>");
    Verifier verifier = new Verifier(in.nextLine());
    System.out.println();

    // Trade the Request Token and Verfier for the Access Token
    
    //Trading the Request Token for an Access Token...
    Token accessToken = service.getAccessToken(requestToken, verifier);
    //Got the Access Token!
    System.out.println("(Access Token looks like this: " + accessToken + " )");
    System.out.println();

    // Now let's go and ask for a protected resource!
    OAuthRequest request = new OAuthRequest(Verb.GET, PROTECTED_RESOURCE_URL);
    service.signRequest(accessToken, request);
    Response response = request.send();
    
    //Got it! Lets see what we found...
    String responseBody = response.getBody();
    System.out.println(responseBody);
  }
}
