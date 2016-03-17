package demo

uses gw.lang.reflect.gs.IExternalSymbolMap
uses org.junit.Assert
uses org.junit.Before
uses org.junit.Test

class NotReallyATest {
  
  @Before
  function beforeMethod() {
    //no-op
  }
  
  @Test
  function doSomething() {
    //var $symbols$ : IExternalSymbolMap = null //compiler hack
    //new spark().evaluate(null)
    Assert.assertTrue(true)
  }
  
}