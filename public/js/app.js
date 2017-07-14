/**
 * Created by progden on 2017/7/8.
 */
require.config({
    baseUrl: '',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        jquery: './asset/jquery/dist/jquery',
        underscore: './asset/underscore/underscore',
        umd:"./js/umd_front"
    }
});

require(["umd"], function(umd){
    var msg = "Hello Wrold!";
    var keyword = "old";
    console.log({
        msg: msg,
        keyword: keyword,
        rs: umd.highlight(msg, keyword)
    });
});