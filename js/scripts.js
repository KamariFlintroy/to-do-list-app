function newItem() {
    let inputValue = $('#input').val();
    if (inputValue === '') {
        alert('You must write something!');
    } else {
        let li = $('<li></li>').text(inputValue);
        $('#list').append(li);

        li.on('dblclick', function() {
            $(this).toggleClass('strike');
          });

        // Add delete button
        let deleteButton = $('<button>X</button>');
            li.append(deleteButton);

        // Delete li when delete button is clicked
        deleteButton.on('click', function() {
            $(this).parent().remove();
        });
    }

    $('#list').sortable(); // Make the list sortable
}
