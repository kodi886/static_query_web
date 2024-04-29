// script.js

// JavaScript code to handle form submission and other interactions
$(document).ready(function() {
    // Function to handle form submission
    $('#queryForm').submit(function(event) {
        event.preventDefault(); // Prevent default form submission
        // Get values from form fields
        var narfcn = $('#narfcn').val();
        var pci = $('#pci').val();
        var band = $('#band').val();
        var simIndex = $('#simIndex').val();
        var startTime = $('#startTime').val();
        var endTime = $('#endTime').val();
        // Perform any necessary actions with the form data, such as making an AJAX request
        
        // For demonstration purposes, display the form data in the Information Display section
        var informationDisplayContent = `
            <p><strong>Narfcn:</strong> ${narfcn}</p>
            <p><strong>PCI:</strong> ${pci}</p>
            <p><strong>Band:</strong> ${band}</p>
            <p><strong>SIM Index:</strong> ${simIndex}</p>
            <p><strong>Start Time:</strong> ${startTime}</p>
            <p><strong>End Time:</strong> ${endTime}</p>
        `;
        $('#informationDisplay').html(informationDisplayContent);
    });

    // Example: Handle click on recommended narfcn value
    $('#narfcnRecommendations').on('click', 'button', function() {
        $(this).toggleClass('selected'); // Toggle selected class on click
        var selectedValue = $(this).text();
        $('#narfcn').val(selectedValue); // Set the selected value in the input field
    });

    // Example: Populate narfcn recommendations (you can replace this with actual recommendations)
    var narfcnRecommendations = ['123456', '456789'];
    var recommendationsHtml = '';
    narfcnRecommendations.forEach(function(value) {
        recommendationsHtml += `<button type="button" class="btn btn-secondary">${value}</button>`;
    });
    $('#narfcnRecommendations').html(recommendationsHtml);

    $('#startTimeSlider').slider({
        range: true,
        min: 0,
        max: 24,
        step: 0.1,
        values: [0, 24], // 默认值范围从0到24
        slide: function(event, ui) {
            // 滑动时更新输入框的值
            $('#startTimeInput').val(ui.values[0]);
        }
    });

    $('#endTimeSlider').slider({
        range: true,
        min: 0,
        max: 24,
        step: 0.1,
        values: [0, 24], // 默认值范围从0到24
        slide: function(event, ui) {
            // 滑动时更新输入框的值
            $('#endTimeInput').val(ui.values[1]);
        }
    });

    // 输入框变化时更新滑块的值
    $('#startTimeInput').on('input', function() {
        var value = parseFloat($(this).val());
        // 防止超出范围
        if (value < 0) {
            value = 0;
        } else if (value > parseFloat($('#endTimeInput').val())) {
            value = parseFloat($('#endTimeInput').val());
        }
        $('#startTimeSlider').slider('values', 0, value);
    });

    $('#endTimeInput').on('input', function() {
        var value = parseFloat($(this).val());
        // 防止超出范围
        if (value > 24) {
            value = 24;
        } else if (value < parseFloat($('#startTimeInput').val())) {
            value = parseFloat($('#startTimeInput').val());
        }
        $('#endTimeSlider').slider('values', 1, value);
    });

});
