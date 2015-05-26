/**
 * Created by remy on 01/05/15.
 */



function getCurBattery(callback) {
    var data;
    jQuery.ajax({
        url: "http://idp-api.herokuapp.com/spin/batterij",
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
        url: "http://idp-api.herokuapp.com/spin/mode",
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
             $(this).append("<h1>"+ data[0]['batterij'] +"%</h1>");
        });

    });

   getCurMode(function (modeData) {

        modus.append("<h1>"+ modeData[0]['mode'] +"</h1>");
    });
}







