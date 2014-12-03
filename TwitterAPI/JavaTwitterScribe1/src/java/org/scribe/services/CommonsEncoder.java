package org.scribe.services;

import org.apache.commons.codec.binary.*;
import org.scribe.exceptions.*;

import java.io.UnsupportedEncodingException;

/**
 *
 * @author Strato
 */
public class CommonsEncoder extends Base64Encoder
{

    /**
     *
     * @param bytes
     * @return
     */
    @Override
  public String encode(byte[] bytes)
  {
    try
    {
      return new String(Base64.encodeBase64(bytes), "UTF-8");
    }
    catch (UnsupportedEncodingException e)
    {
      throw new OAuthSignatureException("Can't perform base64 encoding", e);
    }
  }

    /**
     *
     * @return
     */
    @Override
  public String getType()
  {
    return "CommonsCodec";
  }

    /**
     *
     * @return
     */
    public static boolean isPresent()
  {
    try
    {
      Class.forName("org.apache.commons.codec.binary.Base64");
      return true;
    }
    catch (ClassNotFoundException e)
    {
      return false;
    }
  }
}
