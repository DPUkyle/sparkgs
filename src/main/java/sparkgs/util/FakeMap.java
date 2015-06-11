package sparkgs.util;

import java.util.Collection;
import java.util.Map;
import java.util.Set;

public class FakeMap implements Map<String, String>
{
  public int size()
  {
    throw new UnsupportedOperationException();
  }

  public boolean isEmpty()
  {
    throw new UnsupportedOperationException();
  }

  public boolean containsKey( Object key )
  {
    throw new UnsupportedOperationException();
  }

  public boolean containsValue( Object value )
  {
    throw new UnsupportedOperationException();
  }

  public String get( Object key )
  {
    throw new UnsupportedOperationException();
  }

  public String put( String key, String value )
  {
    throw new UnsupportedOperationException();
  }

  public String remove( Object key )
  {
    throw new UnsupportedOperationException();
  }

  public void putAll( Map<? extends String, ? extends String> m )
  {
    throw new UnsupportedOperationException();
  }

  public void clear()
  {
    throw new UnsupportedOperationException();
  }

  public Set<String> keySet()
  {
    throw new UnsupportedOperationException();
  }

  public Collection<String> values()
  {
    throw new UnsupportedOperationException();
  }

  public Set<Entry<String, String>> entrySet()
  {
    throw new UnsupportedOperationException();
  }
}