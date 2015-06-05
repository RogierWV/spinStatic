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

function insertData()
{
    var modus = $(".modus");
    var batterij = $(".batterij");


    getCurBattery(function (data) {
        batterij.each(function () {
             $(this).html("<h1>"+ data +"%</h1>");
        });

    });

   getCurMode(function (modeData) {

        modus.html("<h1>"+ modeData +"</h1>");
    });
}







