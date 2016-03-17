package sparkgs

interface ISparkGSFilter {
  function before(req : SparkGSRequest, resp : SparkGSResponse)
  function after(req : SparkGSRequest, resp : SparkGSResponse)
  static var UTIL : Util = new Util()
  static class Util {

    function wrapBefore(blk : block(req: SparkGSRequest, resp: SparkGSResponse)) : ISparkGSFilter {
      return new ISparkGSFilter() {
        override function before(req: SparkGSRequest, resp: SparkGSResponse) {
          blk(req, resp);
        }
        override function after(req: SparkGSRequest, resp: SparkGSResponse) {
        }
      }
    }

    function wrapAfter(blk : block(req: SparkGSRequest, resp: SparkGSResponse)) : ISparkGSFilter {
      return new ISparkGSFilter() {
        override function before(req: SparkGSRequest, resp: SparkGSResponse) {
        }
        override function after(req: SparkGSRequest, resp: SparkGSResponse) {
          blk(req, resp);
        }
      }
    }
  }
}