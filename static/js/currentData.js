/**
 * Created by remy on 01/05/15.
 */



function getCurBattery(callback) {
    var data;
    jQuery.ajax({
        url: "http://idp-api.herokuapp.com/spin/latest/batterij",
        type: "GET",
        dataType: 'json',
        success: function (resultData) {
            callback(resultData);
            //console.log(resultData);
        }, error: function (jqXHR, textStatus, errorThrown) {
            callback(null);
            console.log(errorThrown);
        }
    });
}


function getCurMode(callback) {
    var data;
    jQuery.ajax({
        url: "http://idp-api.herokuapp.com/spin/latest/mode",
        type: "GET",
        dataType: 'json',
        success: function (resultData) {
            callback(resultData);
        }, error: function (jqXHR, textStatus, errorThrown) {
            callback(null);
            console.log(errorThrown);
        }
    });
}

function getCurSlope(cb) {
    jQuery.ajax({
        url: 'http://idp-api.herokuapp.com/spin/latest/helling',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            cb(data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            cb(null);
            console.log(errorThrown);
        }
    });
}

function insertData()
{
    var modus = $(".modus");
    var batterij = $(".batterij");
    var helling = $(".helling");

    getCurBattery(function (data) {
        batterij.each(function () {
             $(this).html("<h1>"+ data +"%</h1>");
        });

    });

   getCurMode(function (modeData) {

        modus.html("<h1>"+ modeData +"</h1>");
    });

   getCurSlope(function (data) {
        helling.html("<h1>"+data+"</h1>")
   });
}







