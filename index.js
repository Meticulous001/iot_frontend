$(document).ready(function () {

    let arrData = [];
    
    // Fill the first dropdown with data.
    $.getJSON('https://rickandmortyapi.com/api/character/', function (data) {

    console.log(data);

        let arr_bird_type = [];

        $.each(data, function (index, value) {
            arr_bird_type.push(value.name);
            arrData = data;
        });

        // Remove duplicates. We want unique bird types.
        arr_bird_type = Array.from(new Set (arr_bird_type));
        
        $.each(arr_bird_type, function (index, value) {
            // Fill the first dropdown with unique bird types.
            $('#sel1').append('<option value="' + value + '">' + value + '</option>');
        });
                
    });
    
    $('#sel1').change(function () {
        let type = this.options[this.selectedIndex].value;

        let filterData = arrData.filter(function(value) {
            return value.name === type;
        });

        $('#sel2')
            .empty()
            .append('<option value=""> -- Select Bird -- </option>');

        $.each(filterData, function (index, value) {
            // Now, fill the second dropdown list with bird names.
            $('#sel2').append('<option value="' + value.id + '">' + value.recommendation + '</option>');
        });
        
    });
  });

  
    function writeText() {
            // get assign the values from each text input
            var myCAPtext = document.getElementById('CAPoutput');

            // assign multiple text values
            var select_1 = $("#sel2").val();

            var CAPtext = select_1.join("\n");
            myCAPtext.value = CAPtext;
        }