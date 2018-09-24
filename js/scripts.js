$(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var iName = $("#name").val();
    var iAddress = $("#address").val();
    var iBoats =$("#boats").val();

    $("#oName").text(iName);
    $("#oAddress").text(iAddress);
    $("#oBoats").text(iBoats);

    $("#hiddenReceipt").slideToggle();
  });
});
